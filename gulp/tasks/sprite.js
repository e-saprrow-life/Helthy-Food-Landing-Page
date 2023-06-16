export const sprites = () => {
    /** Позволяет перекрашивать SVG иконки с помощью свойства fill: 
     * Инструкция по использованию тут:
     * https://siteok.org/blog/html/svg-sprajty
    */

    return gulp.src(path.src.svgicons)
    .pipe(plugins.plumber(
        plugins.notify.onError({
            title: '=== SVG ICONS ERROR ===',
            message: "Error: <%= error.message %>" 
        })
    ))

    .pipe(plugins.svgSprite({
        shape: {
            dimension: {
                maxWidth: 500,
                maxHeight: 500
            },
            spacing: {
                padding: 0
            },
            transform: [{
                "svgo": {
                    "plugins": [
                        { removeViewBox: false },
                        { removeUnusedNS: false },
                        { removeUselessStrokeAndFill: true },
                        { cleanupIDs: false },
                        { removeComments: true },
                        { removeEmptyAttrs: true },
                        { removeEmptyText: true },
                        { collapseGroups: true },
                        { removeAttrs: { attrs: '(fill|stroke|style)' } }
                    ]
                }
            }]
        },
        mode: {
            symbol: {
                dest : '',
                sprite: 'icons/icons.svg'
            }
        }
    }))
    .pipe(gulp.dest(`${path.src.root}/img/`))
}


export const spriteHtmlWrite = async () => {
    plugins.fs.writeFile(`${path.src.root}html/_svg.html`, '<!-- SVG Icons -->', cb);
    let spriteSVGcontent = plugins.fs.readFileSync(`${path.src.root}/img/icons/icons.svg`, "utf8");
    if (spriteSVGcontent) {
        plugins.fs.appendFile(`${path.src.root}/html/_svg.html`, "<div class='svg-icons-set'>", cb);
        plugins.fs.appendFile(`${path.src.root}/html/_svg.html`, spriteSVGcontent, cb);
        plugins.fs.appendFile(`${path.src.root}/html/_svg.html`, "</div>", cb);
    }
}


function cb() {}


/** От Жеки
export const svg_icons = () => {
    return app.gulp.src(app.path.src.svgicons)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: '=== SVG ICONS ERROR ===',
            message: "Error: <%= error.message %>" 
        })
    ))

    .pipe(svg_sprite({
        mode: {
            stack: {
                sprite: '../icons/icons.svg',
                example: true
            }
        },
    }
    ))

    .pipe(app.gulp.dest(`${app.path.src.root}/img/`))
}*/