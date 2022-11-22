/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           users.controllers.ts
 *   DATE:           29/12/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
import { Request, Response } from "express";
import { exceptions } from "winston";
var User = require("../models/User");

export const allUsers = async (req: Request, res: Response) => {
  User.find((err: any, users: any) => {
        if (err) {
            console.log(err);
            return res.status(404).send(err);
        } else {
            console.log(users);
            return res.status(200).send(users);
        }
    });
};

export const showUser = (req: Request, res: Response) => {
  User.findById(req.params.id, (err: any, user: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(user);
        }
    });
};

export const addUser = (req: Request, res: Response) => {
    const user = new User(req.body);
    console.log(req.body)
    user.save((err: any) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(user);
        }
    });
};

export const updateUser = (req: Request, res: Response) => {
   User.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err: any, user: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(user);
            }
        }
    );
};

export const deleteUser = (req: Request, res: Response) => {
    User.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(`DELETE requested for id ${req.params.userId}`);
        }
    });
};

export const findByEmail = (req: Request,res: Response) => {
    User.findOne({email: new RegExp('^'+name+'$', "i")}, function(err, user) {
        if(err){
            res.status(404).send(err);
        } else {
            res.status(200).send(user);
        }

    });
}