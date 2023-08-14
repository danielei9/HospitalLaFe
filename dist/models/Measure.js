"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola
 *   FILE:           Measure.js
 *   DATE:           29/12/2021
 *   STATE:          TODO: CREAR ESQUEMA
 *  ---------------------------------------------------------------- */
const mongoose = __importStar(require("mongoose"));
const measureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dni: { type: String, required: true, unique: true, lowercase: true },
    surname: { type: String, required: true },
    state: { type: String },
    data: {},
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date
});
const Measure = mongoose.model('Measure', measureSchema);
module.exports = Measure;
//# sourceMappingURL=Measure.js.map