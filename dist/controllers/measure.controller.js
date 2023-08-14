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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMeasure = exports.updateMeasure = exports.addMeasure = exports.showMeasure = exports.allMeasure = void 0;
var Measure = require("../models/Measure");
const allMeasure = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        Measure.find((err, measures) => {
            if (err) {
                console.log(err);
                return res.status(404).send(err);
            }
            else {
                console.log(measures);
                return res.status(200).send(measures);
            }
        });
    }
    catch (error) {
        res.status(404).send(error);
    }
});
exports.allMeasure = allMeasure;
const showMeasure = (req, res) => {
    try {
        Measure.findById(req.params.measureId, (err, measure) => {
            if (err || measure == undefined || !req.params.measureId) {
                res.status(404).send(err);
            }
            else {
                res.status(200).send(measure);
            }
        });
    }
    catch (error) {
        res.status(404).send(error);
    }
};
exports.showMeasure = showMeasure;
const addMeasure = (req, res) => {
    try {
        const measure = new Measure(req.body);
        console.log(req.body);
        measure.save((err) => {
            if (err) {
                res.status(404).send(err);
            }
            else {
                res.status(200).send(measure);
            }
        });
    }
    catch (error) {
        res.status(404).send(error);
    }
};
exports.addMeasure = addMeasure;
const updateMeasure = (req, res) => {
    try {
        Measure.findByIdAndUpdate(req.params.measureId, req.body, (err, measureToUpdate) => {
            if (err || measureToUpdate == undefined || !req.params.measureId) {
                res.status(404).send(err);
            }
            else {
                Measure.findById(req.params.measureId, (err, measureUpdated) => {
                    if (err || measureUpdated == undefined || !req.params.measureId) {
                        res.status(404).send(err);
                    }
                    else {
                        res.status(200).send(measureUpdated);
                    }
                });
            }
        });
    }
    catch (error) {
        res.status(404).send(error);
    }
};
exports.updateMeasure = updateMeasure;
const deleteMeasure = (req, res) => {
    try {
        Measure.deleteOne({ _id: req.params.measureId }, (err) => {
            if (err) {
                res.status(404).send(err);
            }
            else {
                res.status(200).send(`DELETE requested for id ${req.params.userId}`);
            }
        });
    }
    catch (error) {
        res.status(404).send(error);
    }
};
exports.deleteMeasure = deleteMeasure;
// export const findBy = (req: Request,res: Response) => {
//     Measure.findOne({email: new RegExp('^'+name+'$', "i")}, function(err, user) {
//         if(err){
//             res.status(404).send(err);
//         } else {
//             res.status(200).send(user);
//         }
//     });
// }
//# sourceMappingURL=measure.controller.js.map