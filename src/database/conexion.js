import mysql from 'mysql2/promise'

export async function conectar (){
    try {
        const bdd = await mysql.createPool({
            host:"Localhost",
            database:"comidarapida",
            user:"root",
            password:"tienesmiedopotter?niunpoco"
        })

        console.log('conectado')
        return bdd;
    }
    catch (error){
    console.log("error, base no conectada")
    }
    
}