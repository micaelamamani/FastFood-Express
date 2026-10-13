import { get } from "http";
import { conectar } from "../database/conexion.js"

const bdd= await conectar();

export const pAlta = (pet, resp) => {
    resp.render('prodAlta');
}
export const pMenu = (pet, resp) => {
    resp.render('mProducto');
}
export const pBaja = (pet, resp) => {
    resp.render('prodBaja');
}
export const pMod = (pet, resp) => {
    resp.render('prodMod');
}
export const pCons = (pet, resp) => {
    resp.render('prodConsulta');
}
export const pMT = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idproductos,nombre_articulo,categoria,precio FROM comidarapida.productos;";
        const [registros] = await bdd.query(mostrarsql)
        console.log(registros);
        resp.render('prodMostrar', { registros });
    } catch (error) {
        console.log(`No puede mostrar los datos ${error}`);
    }
}

export const pnuevo = async (pet, resp) => {
    let id, nom, cat, prec;
    id= pet.body.idhtml;
    nom = pet.body.nomhtml;
    cat = pet.body.cathtml;
    prec = pet.body.prechtml;
    try{
        let altasql= "INSERT INTO comidarapida.productos(idproductos,nombre_articulo,categoria,precio) VALUES ('"+id+"','"+nom+"', '"+cat+"', '"+prec+"')";
        const [registro]= await bdd.query(altasql)
        console.log(registro);
        resp.render('index');
    } catch(error){
        console.log(`Error al crear la sentencia insert ${error}`);
    }
}

