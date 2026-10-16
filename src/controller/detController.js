import { get } from "http";
import { conectar } from "../database/conexion.js"

const bdd= await conectar();

export const dAlta = (pet, resp) => {
    resp.render('detAlta');
}
export const dMenu = (pet, resp) => {
    resp.render('mDetalle');
}
export const dBaja = (pet, resp) => {
    resp.render('detBaja');
}
export const dMod = (pet, resp) => {
    resp.render('detMod');
}
export const dCons = (pet, resp) => {
    resp.render('detConsulta');
}
export const dMT = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT iddetalle_pedido,cantidad,precio_total,pedidos_idpedido,productos_idproductos FROM comidarapida.detalle_pedido;";
        const [registros] = await bdd.query(mostrarsql)
        console.log(registros);
        resp.render('detMostrar', { registros });
    } catch (error) {
        console.log(`No puede mostrar los datos ${error}`);
    }
}

export const dnuevo = async (pet, resp) => {
    let id, cantidad, precio, idpedido, idproducto;
    id= pet.body.idhtml;
    cantidad = pet.body.canthtml;
    precio = pet.body.prechtml;
    idpedido = pet.body.idpedidohtml;
    idproducto = pet.body.idproductohtml;
    try{
        let altasql= "INSERT INTO comidarapida.detalle_pedido(iddetalle_pedido,cantidad,precio_total,pedidos_idpedido,productos_idproductos) VALUES ('"+id+"','"+cantidad+"', '"+precio+"', '"+idpedido+"','"+idproducto+"')";
        const [registro]= await bdd.query(altasql)
        console.log(registro);
        resp.render('detAlta');
    } catch(error){
         resp.send(`<script>alert("Error: ${error.message}"); history.back();</script>`);
    }
}