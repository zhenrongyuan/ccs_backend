'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonalSchema = Schema({
    rut: String,
    nombre: String,
    direccion: String,
    celular: String,
    fecha_ingreso: String
});

module.exports = mongoose.model('personale', PersonalSchema);