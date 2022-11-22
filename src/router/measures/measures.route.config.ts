/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           measures.route.config.js
 *   DATE:           29/12/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
import { CommonRoutesConfig } from '../common.routes.config';
import express from 'express'; 
import { auth } from '../../middlewares/auth.middlewares'

/* 
 Importando la CommonRoutesConfigclase y extendiéndola a nuestra nueva clase, 
 llamada UsersRoutes. Con el constructor, enviamos la aplicación
 (el express.Applicationobjeto principal ) y el nombre UsersRoutes al CommonRoutesConfigconstructor.
*/

import { allMeasure, showMeasure, addMeasure, deleteMeasure } from "../../controllers/measure.controller";

export class MeasuresRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'MeasuresRoutes');
    }

    configureRoutes(): express.Application {

        this.app.route(`/measure`)
            .get(auth,(req: express.Request, res: express.Response) => {
                allMeasure(req, res);
            })
            .post(auth,(req: express.Request, res: express.Response) => {
                addMeasure(req,res);
            });

        this.app.route(`/measure/:measureId`)
            .all(auth,(req: express.Request, res: express.Response, next: express.NextFunction) => {
                // this middleware function runs before any request to /measures/:measureId
                // but it doesn't accomplish anything just yet---
                // it simply passes control to the next applicable function below using next()
                next();
            })
            .get(auth,(req: express.Request, res: express.Response) => {
                showMeasure(req, res)
            })
            .put(auth,(req: express.Request, res: express.Response) => {
                addMeasure(req,res);
            })
            .patch(auth,(req: express.Request, res: express.Response) => {
                addMeasure(req,res);
            })
            .delete(auth,(req: express.Request, res: express.Response) => {
                deleteMeasure(req,res);
            });
        return this.app
    }
}