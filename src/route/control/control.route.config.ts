/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           users.route.config.js
 *   DATE:           29/12/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
import { CommonRoutesConfig } from '../common.routes.config';
import express from 'express';
import { start } from "../../controllers/control.controller";

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
            .get((req: express.Request, res: express.Response) => {
                console.log("START")
                start(req, res)
            })
            /**
            *  POST   /users  save a user in db
             * *
            .post((req: express.Request, res: express.Response) => {
                console.log("POST")
            });*/
        this.app.route(`/stop`)
            /**
             *  GET   /users   returns a list of users 
             * */
            .get((req: express.Request, res: express.Response) => {
                //start(req, res)
            })
        return this.app
    }
}