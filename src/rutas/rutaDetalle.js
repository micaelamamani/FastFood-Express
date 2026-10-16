import express from 'express';
import { dAlta, dBaja, dCons, dMenu, dMod, dMT, dnuevo } from '../controller/detController.js';
const rDetalle= express.Router();

rDetalle.get('/detalle', dMenu);
rDetalle.get('/detalle/alta', dAlta);
rDetalle.get('/detalle/baja', dBaja);
rDetalle.get('/detalle/dMod', dMod);
rDetalle.get('/detalle/dCons', dCons);
rDetalle.get('/detalle/mt', dMT);
rDetalle.post('/detalle/detNuevo', dnuevo);
export{rDetalle};