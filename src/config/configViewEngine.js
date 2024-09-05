import e from "express";
import path from "path";

viewEngine = (app) => {
    app.set("views", path.join('./src', 'views'))
    app.set('view engine', 'ejs')

    app.use(e.static(path.join('./src', 'public')))
}

module.exports = viewEngine