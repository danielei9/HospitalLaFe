/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           users.controllers.ts
 *   DATE:           29/12/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
import { Request, Response } from "express";
var User = require("../models/User");

export const allUsers = (req: Request, res: Response) => {
    
    const users = User.find((err: any, users: any) => {
        if (err) {
            res.status(404).send(err);
            console.log(err);
        } else {
            console.log(users);
            res.status(200).send(users);
        }
    });
};

export const showUser = (req: Request, res: Response) => {
    const user = User.findById(req.params.id, (err: any, user: any) => {
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
    let user = User.findByIdAndUpdate(
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