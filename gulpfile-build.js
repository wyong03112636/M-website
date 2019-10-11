import { src, dest, series, parallel } from "gulp";
import sass, { logError } from "gulp-sass";
import webpack from "webpack-stream";
import { resolve } from "path";
import cleanCSS from "gulp-clean-css";
import rev, { manifest } from "gulp-rev";
import revCollector from "gulp-rev-collector";

function html() {
  return src(["./dist/rev/**/*.json", "./src/**/*.html"])
    .pipe(revCollector()) //通过json文件，改变html中引入对应的js文件和css数据
    .pipe(dest("./dist"));
}
function js() {
  return src("./src/js/app.js")
    .pipe(
      webpack({
        mode: "production",
        entry: "./src/js/app.js",
        output: {
          path: resolve(__dirname, "./dist"), //物理路径
          filename: "app.js"
        },
        module: {
          rules: [
            {
              test: /\.art$/,
              loader: "art-template-loader"
            }
          ]
        }
      })
    )
    .pipe(rev()) //文件名生成字符串
    .pipe(dest("./dist/js"))
    .pipe(manifest()) //生成json文件
    .pipe(dest("./dist/rev/js"));
}
function css() {
  return src("./src/styles/*.scss")
    .pipe(sass().on("error", logError))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(rev())
    .pipe(dest("./dist/styles/"))
    .pipe(manifest())
    .pipe(dest("./dist/rev/styles/"));
}

function libs() {
  return src("./src/libs/*").pipe(dest("./dist/libs"));
}
function assets() {
  return src("./src/assets/**/*").pipe(dest("./dist/assets"));
}
const _default = series(parallel(css, js, libs, assets), html);
export { _default as default };
