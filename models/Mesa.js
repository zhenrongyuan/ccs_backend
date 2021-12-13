'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MesaSchema = Schema({
    nombre: String,
    capacidad: Number,
    piso: Number,
    ubicacion: String
});

module.exports = mongoose.model('mesa', MesaSchema);