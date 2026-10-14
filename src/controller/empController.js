import { get } from "http";
import { conectar } from "../database/conexion.js"

const bdd= await conectar();

export const eAlta = (pet, resp) => {
    resp.render('empAlta');
}
export const eMenu = (pet, resp) => {
    resp.render('mEmpleado');
}
export const eBaja = (pet, resp) => {
    resp.render('cliBaja');
}
export const eMod = (pet, resp) => {
    resp.render('empMod');
}
export const eCons = (pet, resp) => {
    resp.render('empConsulta');
}
export const eMT = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idempleados,nombre_completo,cargo,turno FROM comidarapida.empleados;";
        const [registros] = await bdd.query(mostrarsql)
        console.log(registros);
        resp.render('empMostrar', { registros });
    } catch (error) {
        console.log(`No puede mostrar los datos ${error}`);
    }
}

export const enuevo = async (pet, resp) => {
    let id, nom, cargo, turno;
    id= pet.body.idhtml;
    nom = pet.body.nomhtml;
    cargo = pet.body.cargohtml;
    turno = pet.body.turnohtml;
    try{
        let altasql= "INSERT INTO comidarapida.empleados(idempleados,nombre_completo,cargo,turno) VALUES ('"+id+"','"+nom+"', '"+cargo+"', '"+turno+"')";
        const [registro]= await bdd.query(altasql)
        console.log(registro);
        resp.render('index');
    } catch(error){
        console.log(`Error al crear la sentencia insert ${error}`);
    }
}

