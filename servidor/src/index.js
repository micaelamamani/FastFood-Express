import express from 'express'
import color from 'colors'
import path from 'path';
import {fileURLToPath} from 'url';

const puerto= 3000
const app= express()

app.set('view engine', 'ejs');

const directorio= path.dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(directorio, 'vistas'));

//levantamos la carpeta public con -> css, img
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')));
app.use(express.urlencoded({extended:false}))
import {rInicio} from './rutas/rutaInicio.js';
app.use(rInicio)


app.listen(puerto,()=>{
    console.log(`Servidor iniciando ${puerto}`.blue);
});