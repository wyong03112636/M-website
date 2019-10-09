const {src,dest,series,parallel,watch} = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const webpack = require('webpack-stream')
const path = require('path')
const proxy = require('http-proxy-middleware')
  
   function html(){
       return src('./src/**/*.html')
       .pipe(dest('./dist'))
       .pipe(connect.reload())
   } 
   function js(){
    return src('./src/js/app.js')
    .pipe(webpack({
        mode:'development',
        entry:'./src/js/app.js',
        output:{
            path:path.resolve(__dirname, './dist'), //物理路径
            filename:'app.js',
        },
        module : {
            rules :[
                {
                    test:/\.art$/,
                    loader:'art-template-loader',
                }
            ]
        }
    }))
    .pipe(dest('./dist/js'))
    .pipe(connect.reload())

} 
   function css(){
       return src(['./src/styles/**/*.scss','!./src/styles/yo/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./dist/styles/'))
       .pipe(connect.reload())

   }
   async function server(){
       return await connect.server({
           name: 'App',
           root:'./dist',
           port : 8000,
           livereload : true,
           middleware : ()=>{
               return [
                    proxy('/api', {
                        target:'http://m.shihuo.cn',
                        changeOrigin:true,
                        pathRewrite:{
                            '^/api':''
                        }
                    })
               ]
           },    
       })
   }
   function watchCode(){
       watch('./src/*.html', series(html))
       watch('./src/**/*.scss', series(css))
       watch('./src/js/**/*', series(js))
       watch('./src/assets/**/*', series(assets))
       watch('./src/libs/**/*', series(libs))
   }
   function libs () {
       return src('./src/libs/*')
       .pipe(dest('./dist/libs'))
   }
   function assets(){
       return src('./src/assets/**/*')
       .pipe(dest('./dist/assets'))
   }
exports.default = series(parallel(html,css,js,libs,assets), parallel(server,watchCode));