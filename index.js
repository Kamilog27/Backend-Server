require('dotenv').config()
const express=require('express');
const cors=require('cors');
const { dbConnection } = require('./database/config');
//Crear servidor express
const app=express();

//configurar CORS
app.use(cors());

//lectura de body y parseo
app.use(express.json());

//BD
dbConnection()

app.listen(process.env.PORT,()=>{
    console.log("Servidor corriendo en puerto",process.env.PORT)
})

//Rutas

app.use('/api/heroes',require('./routes/heroes'));
