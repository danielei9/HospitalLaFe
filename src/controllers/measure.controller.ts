/* ----------------------------------------------------------------
 *   AUTHOR:         Daniel Burruchaga Sola
 *   FILE:           measure.controllers.ts
 *   DATE:           22/11/2022
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
import { Request, Response } from "express";
var Measure = require("../models/Measure");

export const allMeasure = async (req: Request, res: Response) => {
  try {
    Measure.find((err: any, measures: any) => {
      if (err) {
        console.log(err);
        return res.status(404).send(err);
      } else {
        console.log(measures);
        return res.status(200).send(measures);
      }
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

export const showMeasure = (req: Request, res: Response) => {
  try {
    Measure.findById(req.params.measureId, (err: any, measure: any) => {
      if (err || measure == undefined || !req.params.measureId) {
        res.status(404).send(err);
      } else {
        res.status(200).send(measure);
      }
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

export const addMeasure = (req: Request, res: Response) => {
  try {
    const measure = new Measure(req.body);
    console.log(req.body);
    measure.save((err: any) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(measure);
      }
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

export const updateMeasure = (req: Request, res: Response) => {
  try {
    Measure.findByIdAndUpdate(
      req.params.measureId,
      req.body,
      (err: any, measureToUpdate: any) => {
        if (err || measureToUpdate == undefined || !req.params.measureId) {
            res.status(404).send(err);
        } else {
          Measure.findById(req.params.measureId, (err: any, measureUpdated: any) => {
            if (err || measureUpdated == undefined || !req.params.measureId) {
              res.status(404).send(err);
            } else {
              res.status(200).send(measureUpdated);
            }
          });
        }
      }
    );
  } catch (error) {
    res.status(404).send(error);
  }
};

export const deleteMeasure = (req: Request, res: Response) => {
  try {
    Measure.deleteOne({ _id: req.params.measureId }, (err: any) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(`DELETE requested for id ${req.params.userId}`);
      }
    });
  } catch (error) {
    res.status(404).send(error);
  }
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
