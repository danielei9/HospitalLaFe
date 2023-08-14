"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlRoutes = void 0;
/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola
 *   FILE:           users.route.config.js
 *   DATE:           29/12/2021
 *   STATE:          DONE
 *   TODO: SHOULD BE A POST NOT GET
 *  ---------------------------------------------------------------- */
const common_routes_config_1 = require("../common.routes.config");
const control_controller_1 = require("../../controllers/control.controller");
const auth_middlewares_1 = require("../../middlewares/auth.middlewares");
/*
 Importando la CommonRoutesConfigclase y extendiéndola a nuestra nueva clase,
 llamada ControlRoutes. Con el constructor, enviamos la aplicación
 (el express.Applicationobjeto principal ) y el nombre UsersRoutes al CommonRoutesConfigconstructor.
*/
class ControlRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'ControlRoutes');
    }
    configureRoutes() {
        this.app.route(`/start`)
            /**
             *  GET   /users   returns a list of users
             * */
            .post(auth_middlewares_1.auth, (req, res) => {
            console.log("START");
            (0, control_controller_1.start)(req, res);
        });
        this.app.route(`/stop`)
            /**
             *  GET   /users   returns a list of users
             * */
            .post(auth_middlewares_1.auth, (req, res) => {
            //start(req, res)
            console.log("STOP");
            res.status(200).send(`{"status":"stop"}`);
        });
        return this.app;
    }
}
exports.ControlRoutes = ControlRoutes;
//# sourceMappingURL=controlMachine.route.config.js.map