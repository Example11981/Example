import e from "express";
import homeController from "../controller/homeController"
let router = express.router()

initRoute = (app) => {
    router.get("/", homeController.getHomepage)
    return app.use('/', router)
}

module.exports = initRoute