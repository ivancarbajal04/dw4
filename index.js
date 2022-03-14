const express = require('express');
const app = express();
// Hasta aca express
const hbs = require('hbs');
const { handlebars } = require('hbs');
app.set('view engine', 'hbs');
// Hasta aca hbs
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodedb'
});
// Llamado y conexion a mysql

// app.listen(3000, () => console.log("iniciando en puerto 3000"));
// Iniciando puerto 
app.listen(3000, () => {
    console.log('Conectado al servidor')
});
// Conectando al servidor de la DB 

db.connect((err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Conexion exitosa a la base de datos');
    }
});
// Mensaje de conexion para DB 

const persons = [
    {
      firstName:"Claudia",
      lastName:"Lopez"
    },
    {
      firstName:"Nadia",
      lastName:"Gomez"
    },
    {
      firstName:"Gustavo",
      lastName:"Leiva"
    },
  ];

//   Objeto para handlebars 

app.get('/', function (req, res){
    res.render('inicio', {
        titulo: "Estas en la pagina inicial",
        mensaje: "Esta es mi pagina, te invito a conocerme",
        persons: persons,
        prueba: "Hola mundo"
    })
});

// funcion para handlebars

hbs.registerPartials(__dirname + '/views/partials');

// Registro de apartados de handlebars

// Inicio de querys 

app.get('/productos', (req,res) => {
    // db.query('SELECT * FROM productos', (err, rows) =>{
    //     if(!err){
    //         console.log('hola');
    //     }else{
    //         console.log(err);
    //     }
    // });
    console.log('hola');
});
