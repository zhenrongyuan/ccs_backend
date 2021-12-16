// Usa nuevas funcionalidades de JS.
'use strict'

// Se carga el módulo express.
const express = require('express'),
    // Se carga el módulo bodyParser.
    bodyParser = require('body-parser'),
    // Llamada a express.
    app = express(),
    jwt = require('jsonwebtoken'),
    config = require('./configs/config');

// cargar rutas de la app.
let clienteRoute = require('./routes/ClienteRoute');
let comandaRoute = require('./routes/ComandaRoute');
let estadoComandaRoute = require('./routes/EstadoComandaRoute');
let estadoProductoRoute = require('./routes/EstadoProductoRoute');
let estadoReservaRoute = require('./routes/EstadoReservaRoute');
let estadoUsuarioRoute = require('./routes/EstadoUsuarioRoute');
let estadoCuentaRoute = require('./routes/EstadoCuentaRoute');
let medioDePagoRoute = require('./routes/MedioDePagoRoute');
let mesaRoute = require('./routes/MesaRoute');
let perfilRoute = require('./routes/PerfilRoute');
let personalRoute = require('./routes/PersonalRoute');
let reservaRoute = require('./routes/ReservaRoute');
let tipoComandaRoute = require('./routes/TipoComandaRoute');
let tipoProductoRoute = require('./routes/TipoProductoRoute');
let productoRoute = require('./routes/ProductoRoute');
let usuarioRoute = require('./routes/UsuarioRoute');
let cuentaRoute = require('./routes/CuentaRoute');



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
app.use('/api', cuentaRoute);


// Hacerlo un módulo para que se pueda importar en otro lado.
module.exports = app;