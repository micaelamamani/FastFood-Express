import express from 'express';
//entre llaves está la función que exportamos, ej: rInicio en rutaInicio.js
import {rCliente} from './rutaCliente.js'
const rInicio= express.Router();

rInicio.get('/', (pet, resp)=>{
    resp.render('index');
});
rInicio.use(rCliente);

export{rInicio};
