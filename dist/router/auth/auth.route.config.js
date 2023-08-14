"use strict";
/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola
 *   FILE:           auth.route.config.js
 *   DATE:           22/11/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
// TODO: CAMBIAR users route to user route
const common_routes_config_1 = require("../common.routes.config");
const auth_controller_1 = require("../../controllers/auth.controller");
/*
 Importando la CommonRoutesConfigclase y extendiéndola a nuestra nueva clase,
 llamada UsersRoutes. Con el constructor, enviamos la aplicación
 (el express.Applicationobjeto principal ) y el nombre UsersRoutes al CommonRoutesConfigconstructor.
*/
class AuthRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app.route(`/login`)
            /**
             *  POST   /login check if the user is registered
             * */
            .post((req, res) => {
            (0, auth_controller_1.login)(req, res);
        });
        this.app.route(`/signup`)
            /**
             *  POST   /register register user
             * */
            .post((req, res) => {
            (0, auth_controller_1.signup)(req, res);
        });
        return this.app;
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=auth.route.config.js.map