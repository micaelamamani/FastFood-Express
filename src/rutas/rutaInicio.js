import express from 'express';
//entre llaves está la función que exportamos, ej: rInicio en rutaInicio.js
import {rCliente} from './rutaCliente.js'
import { rProducto } from './rutaProducto.js';

const rInicio= express.Router();

rInicio.get('/', (pet, resp)=>{
    resp.render('index');
});

rInicio.use(rCliente);
rInicio.use(rProducto);


export{rInicio};
