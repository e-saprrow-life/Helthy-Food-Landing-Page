/**====================================
 *  Java Script Tasks 
 * ===================================*/

// Использует webpack
export const js = () => {
    return gulp.src(path.src.js, {
        sourcemaps: vars.isDev
    })
    .pipe(plugins._if(!vars.useWebpack, plugins.file_include()))
    .pipe(plugins.plumber(
        plugins.notify.onError({
            title: '=== JavaScript ERROR ===',
            message: "Error: <%= error.message %>" 
        })
    ))
    .pipe(plugins._if(vars.useWebpack, plugins.webpack({
        mode: vars.isBuild ? 'production' : 'development', // production / development / none
        output: {
            filename: 'script.js'
        }
    })))
    .pipe(gulp.dest(path.build.js))
    .pipe(plugins._if(vars.isBuild, plugins.uglify()))

    .pipe(plugins._if(vars.isBuild, plugins.rename({
        extname: ".min.js"
    })))
    .pipe(plugins._if(vars.isBuild, gulp.dest(path.build.js)))
    .pipe(plugins.browser_sync.stream())
}



export const jsReplaceLibs = () => {
    return gulp.src(path.src.jsLibs)
    .pipe(plugins.plumber(
        plugins.notify.onError({
            title: '=== jsReplaceLibs ERROR ===',
            message: "Error: <%= error.message %>" 
        })
    ))
    .pipe(gulp.dest(path.build.jsLibs)) 
    .pipe(plugins.browser_sync.stream())
}

/* 
export const mainScriptConnect = async () => {        
    let cont = plugins.fs.readFileSync(`${path.src.root}html/_scripts.html`, "utf8");

    if (cont == "") {
        let script = plugins.fs.readdirSync(path.build.js);
        for (let i = 0; i < script.length; i++) {
            if (script[i] == 'script.min.js') {
                plugins.fs.appendFile(`${path.src.root}html/_scripts.html`, '<script src="js/' + script[i] + '"></script>\r\n', cb);
                break;
            } else if (script[i] == 'script.js') {
                plugins.fs.appendFile(`${path.src.root}html/_scripts.html`, '<script src="js/' + script[i] + '"></script>\r\n', cb);
                break;
            }
        };
    }
}*

/*
export const scriptsConect = async () => {        
    plugins.fs.writeFile(`${path.src.root}html/_scripts.html`, '', cb);
    let libs_files =  plugins.fs.readdirSync(`${path.src.jsLibs}`);
    for (let i = 0; i < libs_files.length; i++) {
        plugins.fs.appendFile(`${path.src.root}html/_scripts.html`, '<script src="js/libs/' + libs_files[i] + '"></script>\r\n', cb);
    };

    let script = plugins.fs.readdirSync(path.build.js);
    for (let i = 0; i < script.length; i++) {
        if (script[i] == 'script.min.js') {
            plugins.fs.appendFile(`${path.src.root}html/_scripts.html`, '<script src="js/' + script[i] + '"></script>\r\n', cb);
            break;
        } else if (script[i] == 'script.js') {
            plugins.fs.appendFile(`${path.src.root}html/_scripts.html`, '<script src="js/' + script[i] + '"></script>\r\n', cb);
            break;
        }
    };
}*/

function cb() {}