import { pedAlta, pedBaja, pedCons, pedMenu, pedMod, pedMT, pedNuevo } from '../controller/pedController.js';
import express from 'express';
const rPedido= express.Router();

rPedido.get('/pedido', pedMenu);
rPedido.get('/pedido/alta', pedAlta);
rPedido.get('/pedido/baja', pedBaja);
rPedido.get('/pedido/mod', pedMod);
rPedido.get('/pedido/cons', pedCons);
rPedido.get('/pedido/mt', pedMT);
rPedido.post('/pedido/pedNuevo', pedNuevo);
export{rPedido};