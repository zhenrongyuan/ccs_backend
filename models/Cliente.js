'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ClienteSchema = Schema({
    nombre: String,
    correo: String,
    direccion: String,
    celular: String
});

module.exports = mongoose.model('cliente', ClienteSchema);