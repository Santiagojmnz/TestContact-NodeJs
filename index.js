const express = require("express");
const app = express();
const dotenv= require("dotenv").config();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));
//Rutas
const routes = require('./routes');
//Servidor
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Ruta abase
app.use('/api',routes());

app.listen(process.env.PORT||8000,() => {
    console.log("Servidor corriendo en el puerto: "+ process.env.PORT);
});

module.exports = app;
