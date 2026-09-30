import {cMenu, cAlta, cBaja, cMod, cCons, cMT, nuevo} from '../controller/cliController.js';
import express from 'express';
const rCliente= express.Router();

rCliente.get('/cliente', cMenu);
rCliente.get('/cliente/alta', cAlta);
rCliente.get('/cliente/baja', cBaja);
rCliente.get('/cliente/cMod', cMod);
rCliente.get('/cliente/cCons', cCons);
rCliente.get('/cliente/mt', cMT);
rCliente.post('/cliente/cliNuevo', nuevo);
export{rCliente};