/* ----------------------------------------------------------------
 *   AUTHOR:         Daniel Burruchaga Sola 
 *   FILE:           measure.controllers.ts
 *   DATE:           22/11/2022
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
import { Request, Response } from "express";
var Measure = require("../models/Measure");

export const allMeasure = async (req: Request, res: Response) => {
    Measure.find((err: any, measures: any) => {
        if (err) {
            console.log(err);
            return res.status(404).send(err);
        } else {
            console.log(measures);
            return res.status(200).send(measures);
        }
    });
};

export const showMeasure = (req: Request, res: Response) => {
    Measure.findById(req.params.id, (err: any, measure: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(measure);
        }
    });
};

export const addMeasure = (req: Request, res: Response) => {
    const measure = new Measure(req.body);
    console.log(req.body)
    measure.save((err: any) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(measure);
        }
    });
};

export const updateMeasure = (req: Request, res: Response) => {
    Measure.findByIdAndUpdate(
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

export const deleteMeasure = (req: Request, res: Response) => {
    Measure.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.status(200).send(`DELETE requested for id ${req.params.userId}`);
        }
    });
};

// export const findBy = (req: Request,res: Response) => {
//     Measure.findOne({email: new RegExp('^'+name+'$', "i")}, function(err, user) {
//         if(err){
//             res.status(404).send(err);
//         } else {
//             res.status(200).send(user);
//         }
//     });
// }