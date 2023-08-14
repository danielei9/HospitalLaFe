/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           auth.route.config.js
 *   DATE:           22/11/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */

// TODO: CAMBIAR users route to user route
import { CommonRoutesConfig } from '../common.routes.config';
import express from 'express';
import { allUsers, showUser, addUser,deleteUser } from "../../controllers/users.controller";
import { login, signup } from "../../controllers/auth.controller";
import {  } from "../../controllers/users.controller";

/* 
 Importando la CommonRoutesConfigclase y extendiéndola a nuestra nueva clase, 
 llamada UsersRoutes. Con el constructor, enviamos la aplicación
 (el express.Applicationobjeto principal ) y el nombre UsersRoutes al CommonRoutesConfigconstructor.
*/

export class AuthRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }
    configureRoutes(): express.Application {
        this.app.route(`/login`)
            /**
             *  POST   /login check if the user is registered
             * */
            .post((req: express.Request, res: express.Response) => {
                login(req, res);
            });

        this.app.route(`/signup`)
            /**
             *  POST   /register register user
             * */
            .post((req: express.Request, res: express.Response) => {
                signup(req, res);
            });

        return this.app
    }
}

