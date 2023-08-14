/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola
 *   FILE:           auth.controllers.ts
 *   DATE:           29/12/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
import { Request, Response } from "express";
import { DocTypeFromGeneric } from "mongoose";
var User = require("../models/User");
import { addUser, allUsers } from "./users.controller";
import * as mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const SECRET_KEY_JWT = "123456789ASdFq?12@ss";

export const login = async (req: Request, res: Response) => {
  try {
    const foundUser = await User.findOne({ email: req.body.email });

    if (!foundUser) {
      console.log("No se encontró ningun usuario.");
      return res.status(401).send("No se encontró ningun usuario.");
    }
    
    const password = req.body.password;
    const isMatch = bcrypt.compareSync(password, foundUser.password);
    console.log(foundUser);
    console.log(password);

    if (isMatch) {
      console.log(foundUser);
      const token = jwt.sign(
        { _id: foundUser._id?.toString(), name: foundUser.name, email: foundUser.email, username: foundUser.username },
        SECRET_KEY_JWT,
        {
          expiresIn: "2 days",
        }
      );

      return res.status(200).send({ foundUser, token: token });

    } else {
      console.log("Unaccesible");
      return res.status(401).send("No coincide la contraseña.");
    }

  } catch (error) {
    return res.status(500);
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    //    await userServices.register(req.body);
    // Comprobar si haya alguno con mismo email
    const user = new User(req.body);
    User.findOne({ email: new RegExp(user.email, "i") }, function (err, user) {
      if (err) {
        console.log("Este email ya ha sido registrado");
        res.status(404).send(err);
      } else {
        // Si no hay nadie con el mismo email dar de alta
        addUser(req, res);
      }
    });
  } catch (error) {
    return res.status(500);
  }
};