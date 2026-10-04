import { get } from "http";
import { conectar } from "../database/conexion.js"

export const cAlta = (pet, resp) => {
    resp.render('cliAlta');
}
export const cMenu = (pet, resp) => {
    resp.render('mCliente');
}
export const cBaja = (pet, resp) => {
    resp.render('cliBaja');
}
export const cMod = (pet, resp) => {
    resp.render('cliMod');
}
export const cCons = (pet, resp) => {
    resp.render('cliConsulta');
}
export const cMT = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idclientes,nombre_completo,direccion,telefono FROM comidarapida.clientes;";
        const [registros] = await bdd.query(mostrarsql)
        console.log(registros);
        resp.render('cliMostrar', { registros });
    } catch (error) {
        console.log(`No puede mostrar los datos ${error}`);
    }
}

export const nuevo = async (pet, resp) => {
    let id, nom, direc, tel;
    id= pet.body.idhtml;
    nom = pet.body.nomhtml;
    direc = pet.body.dirhtml;
    tel = pet.body.telhtml;
    try{
        let altasql= "INSERT INTO comidarapida.clientes(idclientes,nombre_completo,direccion,telefono) VALUES ('"+id+"','"+nom+"', '"+direc+"', '"+tel+"')";
        const [registro]= await bdd.query(altasql)
        console.log(registro);
        resp.render('index');
    } catch(error){
        console.log(`Error al crear la sentencia insert ${error}`);
    }
}

