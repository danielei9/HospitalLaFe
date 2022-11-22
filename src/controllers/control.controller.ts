/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           control.controllers.ts
 *   DATE:           29/12/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
import { Request, Response } from "express";
import {exec} from 'child_process'

export const start = (req: Request, res: Response) => {
 
    exec('python /opt/HospitalLaFe_FrontEnd/PythonhospiPython.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            res.status(404).send(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            res.status(404).send(`stderr: ${stderr}`);
            return;
        }
        res.status(200).send(`{stdout:\n${stdout}}`);
        console.log(`stdout:\n${stdout}`);
    });
};
