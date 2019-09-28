const {src,dest,series,parallel,watch} = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const webpack = require('webpack-stream')
const path = require('path')
  
   function html(){
       return src('./src/**/*.html')
       .pipe(dest('./dist'))
       .pipe(connect.reload())
   } 
   function js(){
    return src('./src/js/index.js')
    .pipe(webpack({
        mode:'development',
        entry:'./src/js/index.js',
        output:{
            path:path.resolve(__dirname, './dist'), //物理路径
            filename:'index.js',
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
       return src('./src/styles/**/*.scss')
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
       })
   }
   function watchCode(){
       watch('./src/*.html', series(html))
       watch('./src/**/*.scss', series(css))
       watch('./src/**/*.js', series(js))
   }
   function libs () {
       return src('./src/libs/*')
       .pipe(dest('./dist/libs'))
   }
exports.default = series(parallel(html,css,js,libs), parallel(server,watchCode));