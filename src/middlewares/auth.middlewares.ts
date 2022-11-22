/* ----------------------------------------------------------------
 *   AUTHOR:         Daniel Burruchaga Sola
 *   FILE:           auth.middlewares.ts
 *   DATE:           17/11/2022
 *   STATE:          DONE
 *  ---------------------------------------------------------------- */

import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const SECRET_KEY_JWT: Secret = '123456789ASdFq?12@ss';

export interface CustomRequest extends Request {
 token: string | JwtPayload;
}

/**
 * 
 * @param req Incoming request 
 * @param res Response to process
 * @param next next function 
 * 
 * Middleware auth verify the json web token
 */
export const auth = async (req: Request, res: Response, next: NextFunction) => {
 try {
   const token = req.header('Authorization') // ?.replace('Bearer ', '');

   if (!token) {
     throw new Error();
   }

   const decoded = jwt.verify(token, SECRET_KEY_JWT);
   (req as CustomRequest).token = decoded;

   next();
 } catch (err) {
   res.status(401).send('Please authenticate');
 }
};