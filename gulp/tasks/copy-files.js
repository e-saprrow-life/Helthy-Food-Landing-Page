/** Копирует файлы из указанной папки в такую же папку проекта */ 
export const copyFiles = () => {
    plugins.del(`${path.build.files}/**/*.*`)
    return gulp.src(path.src.files)
    .pipe(gulp.dest(path.build.files))
}