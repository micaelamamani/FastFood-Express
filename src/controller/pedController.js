import { get } from "http";
import { conectar } from "../database/conexion.js"

const bdd= await conectar();

export const pedAlta = (pet, resp) => {
    resp.render('pedAlta');
}
export const pedMenu = (pet, resp) => {
    resp.render('mPedido');
}
export const pedBaja = (pet, resp) => {
    resp.render('pedBaja');
}
export const pedMod = (pet, resp) => {
    resp.render('pedMod');
}
export const pedCons = (pet, resp) => {
    resp.render('pedConsulta');
}
export const pedMT = async (pet, resp) => {
    try {
        let mostrarsql = "SELECT idpedido,fecha,hora,tipo_servicio, estado, clientes_idclientes, empleados_idempleados FROM comidarapida.pedidos;";
        const [registros] = await bdd.query(mostrarsql)
        console.log(registros);
        resp.render('pedMostrar', { registros });
    } catch (error) {
        console.log(`No puede mostrar los datos ${error}`);
    }
}

export const pedNuevo = async (pet, resp) => {
    let id, fecha, hora, servicio, estado, cliente, empleado;
    id= pet.body.idhtml;
    fecha = pet.body.fechahtml;
    hora = pet.body.horahtml;
    servicio = pet.body.serviciohtml;
    estado = pet.body.estadohtml;
    cliente = pet.body.clihtml;
    empleado = pet.body.emphtml;
    try{
        let altasql= "INSERT INTO comidarapida.pedidos(idpedido,fecha,hora,tipo_servicio,estado,clientes_idclientes,empleados_idempleados) VALUES ('"+id+"','"+fecha+"', '"+hora+"', '"+servicio+"', '"+estado+"', '"+cliente+"', '"+empleado+"')";
        const [registro]= await bdd.query(altasql)
        console.log(registro);
        resp.render('detAlta');
    } catch(error){
        
            Swal.fire({
                title: "Error al crear el pedido",
                text: "<%= error %>",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(https://github.io)",
                backdrop: `
                    rgba(0,0,123,0.4)
                    url("https://github.io")
                    left top
                    no-repeat
                `
            });
        
    }
}