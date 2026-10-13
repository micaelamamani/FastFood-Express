import { pAlta, pBaja, pCons, pMenu, pMod, pMT, pnuevo } from '../controller/prodController.js';
import express from 'express';
const rProducto= express.Router();

rProducto.get('/producto', pMenu);
rProducto.get('/producto/alta', pAlta);
rProducto.get('/producto/baja', pBaja);
rProducto.get('/producto/pMod', pMod);
rProducto.get('/producto/cCons', pCons);
rProducto.get('/producto/mt', pMT);
rProducto.post('/producto/prodNuevo', pnuevo);
export{rProducto};