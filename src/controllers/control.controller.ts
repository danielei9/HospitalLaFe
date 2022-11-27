/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola
 *   FILE:           control.controllers.ts
 *   DATE:           29/12/2021
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */
import { Request, Response } from "express";
import { exec } from "child_process";

export const start = (req: Request, res: Response) => {
  try {
    exec(
      "python /opt/HospitalLaFe_FrontEnd/PythonhospiPython.py",
      (error, stdout, stderr) => {
        if (error) {
          console.error(`{"error": "${error.message.replace("\n"," ").substring(0, error.message.length - 2)}"}`);
          res.status(404).send(`{"error": "${error.message.replace("\n"," ").substring(0, error.message.length - 2)}"}`);
          return;
        }
        if (stderr) {
          console.error(`{"stderr": "${stderr.replace("\n"," ")}"}`);
          res.status(404).send(`{"stderr": "${stderr.replace("\n"," ")}"}`);
          return;
        }
        res.status(200).send(`{"stdout":"${stdout.replace("\n"," ")}"}`);
        console.log(`{"stdout":"${stdout.replace("\n"," ")}"}`);
      }
    );
  } catch (error) {
    res.status(404).send(`{"status":"${error.replace("\n"," ").substring(0, error.length - 3)}"}`);
  }
};
