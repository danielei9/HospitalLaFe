"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasuresRoutes = void 0;
/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola
 *   FILE:           measures.route.config.js
 *   DATE:           29/12/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
const common_routes_config_1 = require("../common.routes.config");
const auth_middlewares_1 = require("../../middlewares/auth.middlewares");
/*
 Importando la CommonRoutesConfigclase y extendiéndola a nuestra nueva clase,
 llamada UsersRoutes. Con el constructor, enviamos la aplicación
 (el express.Applicationobjeto principal ) y el nombre UsersRoutes al CommonRoutesConfigconstructor.
*/
const measure_controller_1 = require("../../controllers/measure.controller");
class MeasuresRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'MeasuresRoutes');
    }
    configureRoutes() {
        this.app.route(`/measure`)
            .get(auth_middlewares_1.auth, (req, res) => {
            (0, measure_controller_1.allMeasure)(req, res);
        })
            .post(auth_middlewares_1.auth, (req, res) => {
            (0, measure_controller_1.addMeasure)(req, res);
        });
        this.app.route(`/measure/:measureId`)
            .all(auth_middlewares_1.auth, (req, res, next) => {
            // this middleware function runs before any request to /measures/:measureId
            // but it doesn't accomplish anything just yet---
            // it simply passes control to the next applicable function below using next()
            next();
        })
            .get(auth_middlewares_1.auth, (req, res) => {
            (0, measure_controller_1.showMeasure)(req, res);
        })
            .put(auth_middlewares_1.auth, (req, res) => {
            (0, measure_controller_1.updateMeasure)(req, res);
        })
            .patch(auth_middlewares_1.auth, (req, res) => {
            (0, measure_controller_1.updateMeasure)(req, res);
        })
            .delete(auth_middlewares_1.auth, (req, res) => {
            (0, measure_controller_1.deleteMeasure)(req, res);
        });
        return this.app;
    }
}
exports.MeasuresRoutes = MeasuresRoutes;
//# sourceMappingURL=measures.route.config.js.map