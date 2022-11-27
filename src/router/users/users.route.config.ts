/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola
 *   FILE:           users.route.config.js
 *   DATE:           29/12/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
// TODO: CAMBIAR users route to user route
import { CommonRoutesConfig } from "../common.routes.config";
import express from "express";
import {
  allUsers,
  showUser,
  addUser,
  deleteUser,
  updateUser,
} from "../../controllers/users.controller";
import { auth } from "../../middlewares/auth.middlewares";

/* 
 Importando la CommonRoutesConfigclase y extendiéndola a nuestra nueva clase, 
 llamada UsersRoutes. Con el constructor, enviamos la aplicación
 (el express.Applicationobjeto principal ) y el nombre UsersRoutes al CommonRoutesConfigconstructor.
*/

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UsersRoutes");
  }

  configureRoutes(): express.Application {
    this.app
      .route(`/user`)
      /**
       *  GET   /users   returns a list of users
       * */
      .get(auth, (req: express.Request, res: express.Response) => {
        allUsers(req, res);
      })
      /**
       *  POST   /users  save a user in db
       * */
      .post((req: express.Request, res: express.Response) => {
        addUser(req, res);
      });

    this.app
      .route(`/user/:userId`)
      // .all() función pieza de middleware tenemos tres tipos de campos: Request, Response, y NextFunction.
      .all(
        auth,
        (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          // this middleware function runs before any request to /users/:userId
          // but it doesn't accomplish anything just yet---
          // it simply passes control to the next applicable function below using next()

          next();
        }
      )
      .get(auth, (req: express.Request, res: express.Response) => {
        showUser(req, res); 
      })
      .put(auth, (req: express.Request, res: express.Response) => {
        updateUser(req, res); 
      })
      .patch(auth, (req: express.Request, res: express.Response) => {
        updateUser(req, res); 
      })
      .delete(auth, (req: express.Request, res: express.Response) => {
        deleteUser(req, res);
      });

    return this.app;
  }
}
