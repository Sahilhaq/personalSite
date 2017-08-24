var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('styles', function(){
   return gulp.src('./app/assets/styles/style.css')
            .pipe(postcss([cssImport, hexrgba, mixins, autoprefixer, cssvars, nested]))
            .on('error', function(errorInfo){
                console.log(errorInfo.toString());
                this.emit('end');
            })
            .pipe(gulp.dest('./app/temp/styles'));
});
    