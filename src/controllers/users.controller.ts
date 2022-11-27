/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola
 *   FILE:           users.controllers.ts
 *   DATE:           29/12/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
import { Request, Response } from "express";
import { exceptions } from "winston";
import bcrypt from "bcrypt";
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
  try {
    User.findById(req.params.userId, (err: any, user: any) => {
      console.log(req.params.userId);
      if (err || !user) {
        res.status(404).send(err);
      } else {
        res.status(200).send(user);
      }
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

export const addUser = (req: Request, res: Response) => {
  const user = new User(req.body);
  user.save((err: any) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(user);
    }
  });
};

const saltRounds = 8;

export const updateUser = async (req: Request, res: Response) => {
  try {
    let user = new User(req.body);
    user.password = await bcrypt.hash(user.password, saltRounds);
    user._id = req.params.userId
    console.log(user);
    User.findByIdAndUpdate(
      req.params.userId,
      user,
      (err: any, userToUpdate: any) => {
        if (err || userToUpdate == undefined || !req.params.userId) {
          res.status(404).send(err);
        } else {
          User.findById(req.params.userId, (err: any, userUpdated: any) => {
            if (err || userUpdated == undefined || !req.params.userId) {
              res.status(404).send(err);
            } else {
              res.status(200).send(userUpdated);
            }
          });
        }
      }
    );
  } catch (error) {
    res.status(404).send(error);
  }
};

export const deleteUser = (req: Request, res: Response) => {
  User.deleteOne({ _id: req.params.userId }, (err: any) => {
    if (err || req.params.userId == undefined) {
      res.status(404).send(err);
    } else {
      res.status(200).send(`DELETE requested for id ${req.params.userId}`);
    }
  });
};

export const findByEmail = (req: Request, res: Response) => {
  User.findOne(
    { email: new RegExp("^" + name + "$", "i") },
    function (err, user) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(user);
      }
    }
  );
};
