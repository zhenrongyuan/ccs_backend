'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
    nombre: String,
    correo: String,
    direccion: String,
    celular: String
});

module.exports = mongoose.model('cliente', ClienteSchema);