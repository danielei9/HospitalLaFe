"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByEmail = exports.deleteUser = exports.updateUser = exports.addUser = exports.showUser = exports.allUsers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
var User = require("../models/User");
const allUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    User.find((err, users) => {
        if (err) {
            console.log(err);
            return res.status(404).send(err);
        }
        else {
            console.log(users);
            return res.status(200).send(users);
        }
    });
});
exports.allUsers = allUsers;
const showUser = (req, res) => {
    try {
        User.findById(req.params.userId, (err, user) => {
            console.log(req.params.userId);
            if (err || !user) {
                res.status(404).send(err);
            }
            else {
                res.status(200).send(user);
            }
        });
    }
    catch (error) {
        res.status(404).send(error);
    }
};
exports.showUser = showUser;
const addUser = (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
        if (err) {
            res.status(404).send(err);
        }
        else {
            res.status(201).send(user);
        }
    });
};
exports.addUser = addUser;
const saltRounds = 8;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = new User(req.body);
        user.password = yield bcrypt_1.default.hash(user.password, saltRounds);
        user._id = req.params.userId;
        console.log(user);
        User.findByIdAndUpdate(req.params.userId, user, (err, userToUpdate) => {
            if (err || userToUpdate == undefined || !req.params.userId) {
                res.status(404).send(err);
            }
            else {
                User.findById(req.params.userId, (err, userUpdated) => {
                    if (err || userUpdated == undefined || !req.params.userId) {
                        res.status(404).send(err);
                    }
                    else {
                        res.status(200).send(userUpdated);
                    }
                });
            }
        });
    }
    catch (error) {
        res.status(404).send(error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.userId }, (err) => {
        if (err || req.params.userId == undefined) {
            res.status(404).send(err);
        }
        else {
            res.status(200).send(`DELETE requested for id ${req.params.userId}`);
        }
    });
};
exports.deleteUser = deleteUser;
const findByEmail = (req, res) => {
    User.findOne({ email: new RegExp("^" + name + "$", "i") }, function (err, user) {
        if (err) {
            res.status(404).send(err);
        }
        else {
            res.status(200).send(user);
        }
    });
};
exports.findByEmail = findByEmail;
//# sourceMappingURL=users.controller.js.map