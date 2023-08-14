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
exports.signup = exports.login = void 0;
var User = require("../models/User");
const users_controller_1 = require("./users.controller");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY_JWT = "123456789ASdFq?12@ss";
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const foundUser = yield User.findOne({ email: req.body.email });
        if (!foundUser) {
            console.log("No se encontró ningun usuario.");
            return res.status(401).send("No se encontró ningun usuario.");
        }
        const password = req.body.password;
        const isMatch = bcrypt_1.default.compareSync(password, foundUser.password);
        console.log(foundUser);
        console.log(password);
        if (isMatch) {
            console.log(foundUser);
            const token = jsonwebtoken_1.default.sign({ _id: (_a = foundUser._id) === null || _a === void 0 ? void 0 : _a.toString(), name: foundUser.name, email: foundUser.email, username: foundUser.username }, SECRET_KEY_JWT, {
                expiresIn: "2 days",
            });
            return res.status(200).send({ foundUser, token: token });
        }
        else {
            console.log("Unaccesible");
            return res.status(401).send("No coincide la contraseña.");
        }
    }
    catch (error) {
        return res.status(500);
    }
});
exports.login = login;
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //    await userServices.register(req.body);
        // Comprobar si haya alguno con mismo email
        const user = new User(req.body);
        User.findOne({ email: new RegExp(user.email, "i") }, function (err, user) {
            if (err) {
                console.log("Este email ya ha sido registrado");
                res.status(404).send(err);
            }
            else {
                // Si no hay nadie con el mismo email dar de alta
                (0, users_controller_1.addUser)(req, res);
            }
        });
    }
    catch (error) {
        return res.status(500);
    }
});
exports.signup = signup;
//# sourceMappingURL=auth.controller.js.map