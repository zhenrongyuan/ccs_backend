'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PersonalSchema = Schema({
    rut: String,
    nombre: String,
    direccion: String,
    celular: String,
    fecha_ingreso: String
});

module.exports = mongoose.model('personale', PersonalSchema);