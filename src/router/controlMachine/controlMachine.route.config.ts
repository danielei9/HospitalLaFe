/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           users.route.config.js
 *   DATE:           29/12/2021
 *   STATE:          DONE
 *   TODO: SHOULD BE A POST NOT GET
 *  ---------------------------------------------------------------- */
import { CommonRoutesConfig } from '../common.routes.config';
import express from 'express';
import { start } from "../../controllers/control.controller";
import { auth } from '../../middlewares/auth.middlewares'

/* 
 Importando la CommonRoutesConfigclase y extendiéndola a nuestra nueva clase, 
 llamada ControlRoutes. Con el constructor, enviamos la aplicación
 (el express.Applicationobjeto principal ) y el nombre UsersRoutes al CommonRoutesConfigconstructor.
*/
export class ControlRoutes  extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ControlRoutes');
    }
    configureRoutes(): express.Application {
        this.app.route(`/start`)
            /**
             *  GET   /users   returns a list of users 
             * */
            .post(auth,(req: express.Request, res: express.Response) => {
                console.log("START")
                start(req, res)
            })
        this.app.route(`/stop`)
            /**
             *  GET   /users   returns a list of users 
             * */
            .post(auth,(req: express.Request, res: express.Response) => {
                //start(req, res)
                console.log("STOP")
                res.status(200).send(`{"status":"stop"}`);
            })
        return this.app
    }
}