const express = require('express');
const router = express.Router();

// importar los controladores
const {getContactos,addContactos} =require('./controllers/contactoController')

module.exports = () => {

    
    router.get('/', getContactos);
    router.post('/',addContactos);
    
    return router;
};