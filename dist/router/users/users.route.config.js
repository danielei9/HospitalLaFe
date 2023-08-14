"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola
 *   FILE:           users.route.config.js
 *   DATE:           29/12/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
// TODO: CAMBIAR users route to user route
const common_routes_config_1 = require("../common.routes.config");
const users_controller_1 = require("../../controllers/users.controller");
const auth_middlewares_1 = require("../../middlewares/auth.middlewares");
/*
 Importando la CommonRoutesConfigclase y extendiéndola a nuestra nueva clase,
 llamada UsersRoutes. Con el constructor, enviamos la aplicación
 (el express.Applicationobjeto principal ) y el nombre UsersRoutes al CommonRoutesConfigconstructor.
*/
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "UsersRoutes");
    }
    configureRoutes() {
        this.app
            .route(`/user`)
            /**
             *  GET   /users   returns a list of users
             * */
            .get(auth_middlewares_1.auth, (req, res) => {
            (0, users_controller_1.allUsers)(req, res);
        })
            /**
             *  POST   /users  save a user in db
             * */
            .post((req, res) => {
            (0, users_controller_1.addUser)(req, res);
        });
        this.app
            .route(`/user/:userId`)
            // .all() función pieza de middleware tenemos tres tipos de campos: Request, Response, y NextFunction.
            .all(auth_middlewares_1.auth, (req, res, next) => {
            // this middleware function runs before any request to /users/:userId
            // but it doesn't accomplish anything just yet---
            // it simply passes control to the next applicable function below using next()
            next();
        })
            .get(auth_middlewares_1.auth, (req, res) => {
            (0, users_controller_1.showUser)(req, res);
        })
            .put(auth_middlewares_1.auth, (req, res) => {
            (0, users_controller_1.updateUser)(req, res);
        })
            .patch(auth_middlewares_1.auth, (req, res) => {
            (0, users_controller_1.updateUser)(req, res);
        })
            .delete(auth_middlewares_1.auth, (req, res) => {
            (0, users_controller_1.deleteUser)(req, res);
        });
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=users.route.config.js.map