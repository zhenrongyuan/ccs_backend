// Usa nuevas funcionalidades de JS.
'use strict'

// Se carga el módulo express.
var express = require('express');
// Se carga el módulo bodyParser.
var bodyParser = require('body-parser');

// Llamada a express.
var app = express();

// cargar rutas de la app.
var clienteRoute = require('./routes/ClienteRoute');
var comandaRoute = require('./routes/ComandaRoute');
var estadoComandaRoute = require('./routes/EstadoComandaRoute');
var estadoProductoRoute = require('./routes/EstadoProductoRoute');
var estadoReservaRoute = require('./routes/EstadoReservaRoute');
var estadoUsuarioRoute = require('./routes/EstadoUsuarioRoute');
var estadoCuentaRoute = require('./routes/EstadoCuentaRoute');
var medioDePagoRoute = require('./routes/MedioDePagoRoute');
var mesaRoute = require('./routes/MesaRoute');
var perfilRoute = require('./routes/PerfilRoute');
var personalRoute = require('./routes/PersonalRoute');
var reservaRoute = require('./routes/ReservaRoute');
var tipoComandaRoute = require('./routes/TipoComandaRoute');
var tipoProductoRoute = require('./routes/TipoProductoRoute');
var productoRoute = require('./routes/ProductoRoute');
var usuarioRoute = require('./routes/UsuarioRoute');


// body parser (middleware -> instrucción que se ejecuta antes de una petición http).
app.use(bodyParser.urlencoded({ extended: false })); // Todo lo que llegue mediante post o por put lo convertirá a JSON.
app.use(bodyParser.json()); // Convierte la data recibida en JSON.

// Configurar CORS

// rutas base
app.use('/api', clienteRoute);
app.use('/api', comandaRoute);
app.use('/api', estadoComandaRoute);
app.use('/api', estadoProductoRoute);
app.use('/api', estadoReservaRoute);
app.use('/api', estadoUsuarioRoute);
app.use('/api', estadoCuentaRoute);
app.use('/api', medioDePagoRoute);
app.use('/api', mesaRoute);
app.use('/api', perfilRoute);
app.use('/api', personalRoute);
app.use('/api', reservaRoute);
app.use('/api', tipoComandaRoute);
app.use('/api', tipoProductoRoute);
app.use('/api', productoRoute);
app.use('/api', usuarioRoute);

// Hacerlo un módulo para que se pueda importar en otro lado.
module.exports = app;