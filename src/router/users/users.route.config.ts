/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           users.route.config.js
 *   DATE:           29/12/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
// TODO: CAMBIAR users route to user route
import { CommonRoutesConfig } from '../common.routes.config';
import express from 'express';
import { allUsers, showUser, addUser,deleteUser } from "../../controllers/users.controller";

/* 
 Importando la CommonRoutesConfigclase y extendiéndola a nuestra nueva clase, 
 llamada UsersRoutes. Con el constructor, enviamos la aplicación
 (el express.Applicationobjeto principal ) y el nombre UsersRoutes al CommonRoutesConfigconstructor.
*/

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/users`)
            /**
             *  GET   /users   returns a list of users 
             * */
            .get((req: express.Request, res: express.Response) => {
                allUsers(req, res);
            })
            /**
            *  POST   /users  save a user in db
             * */
            .post((req: express.Request, res: express.Response) => {
                addUser(req, res);
            });

        this.app.route(`/users/:userId`)
            // .all() función pieza de middleware tenemos tres tipos de campos: Request, Response, y NextFunction.
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
                // this middleware function runs before any request to /users/:userId
                // but it doesn't accomplish anything just yet---
                // it simply passes control to the next applicable function below using next()

                next();
            })
            .get((req: express.Request, res: express.Response) => {

                res.status(200).send(`GET requested for id ${req.params.userId}`);
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`PUT requested for id ${req.params.userId}`);
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`PATCH requested for id ${req.params.userId}`);
            })
            .delete((req: express.Request, res: express.Response) => {
                deleteUser(req,res);
            });

        return this.app
    }
}