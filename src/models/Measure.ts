/* ----------------------------------------------------------------
 *   AUTHOR:        Daniel Burruchaga Sola 
 *   FILE:           Measure.js
 *   DATE:           29/12/2021
 *   STATE:          TODO: CREAR ESQUEMA
 *  ---------------------------------------------------------------- */
import * as mongoose from 'mongoose';

const measureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dni: { type: String, required: true, unique: true, lowercase: true },
  surname: { type: String, required: true },
  state: { type: String },
  data:{},// Aquí van los datos obtenidos de la máquina
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

const Measure = mongoose.model('Measure', measureSchema);
module.exports = Measure;