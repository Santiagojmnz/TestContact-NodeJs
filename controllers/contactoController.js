
const { connection } = require('../db');
exports.getContactos = async (req, res) => {

    try {
        const [rows] = await connection.query('SELECT * FROM contactos');
        const mensajes= rows;
        res.status(200).send({mensajes});
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Error al procesar la peticion', error });
    }
};
exports.addContactos = async (req, res) => {
const {nombre,email,mensaje} = req.body;
    console.log(nombre, email,mensaje)

if(nombre==""&email==""&mensaje==""|| nombre==null&email==null&mensaje==null){
    res.status(500).send({ message: 'por favor ingresa la informacion faltante'});

}

    try {
      const [rows]= await connection.query('INSERT INTO contactos (nombre, email, mensaje) VALUES (?,?,?)',[nombre,email,mensaje]);
       res.status(200).send({ message: 'Mensaje enviado correactamente'});
    } catch (error) {
        res.status(500).send({ message: 'Error al procesar la peticion', error });
    }
};



