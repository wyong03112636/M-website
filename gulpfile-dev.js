const {src,dest,series,parallel,watch} = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const webpack = require('webpack-stream')
const path = require('path')
const proxy = require('http-proxy-middleware')
   
   function html(){
       return src('./src/**/*.html')
       .pipe(dest('./dev'))
       .pipe(connect.reload())
   } 
   function js(){
    return src('./src/js/*.js')
    .pipe(webpack({
        mode:'development',
        entry:{
            app:'./src/js/app.js',
            'app-search':'./src/js/app-search.js',
            'app-profile':'./src/js/app-profile.js'
        },
        output:{
            path:path.resolve(__dirname, './dev'), //物理路径
            filename:'[name].js',
        },
        module : {
            rules :[
                {
                    test:/\.art$/,
                    loader:'art-template-loader',
                },
                
            ]
        }
    }))
    .pipe(dest('./dev/js'))
    .pipe(connect.reload())

} 
   function css(){
       return src(['./src/styles/*.scss', '!./src/styles/yo/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./dev/styles/'))
       .pipe(connect.reload())

   }
   async function server(){
       return await connect.server({
           name: 'App',
           root:'./dev',
           port : 9000,
           livereload : true,
        //    host:'10.9.49.200',
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
   async function watchCode(){
       await watch('./src/*.html', series(html))
       await watch('./src/**/*.scss', series(css))
       await watch('./src/js/**/*', series(js))
       await watch('./src/assets/**/*', series(assets))
       await watch('./src/libs/**/*', series(libs))
   }
   function libs () {
       return src('./src/libs/*')
       .pipe(dest('./dev/libs'))
   }
   function assets(){
       return src('./src/assets/**/*')
       .pipe(dest('./dev/assets'))
   }
exports.default = series(parallel(html,css,js,libs,assets), parallel(server,watchCode));