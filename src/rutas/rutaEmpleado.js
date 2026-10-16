import { eAlta, eBaja, eCons, eMenu, eMod, eMT, enuevo } from '../controller/empController.js';
import express from 'express';
const rEmpleado= express.Router();

rEmpleado.get('/empleado', eMenu);
rEmpleado.get('/empleado/alta', eAlta);
rEmpleado.get('/empleado/baja', eBaja);
rEmpleado.get('/empleado/eMod', eMod);
rEmpleado.get('/empleado/eCons', eCons);
rEmpleado.get('/empleado/mt', eMT);
rEmpleado.post('/empleado/empNuevo', enuevo);
export{rEmpleado};