'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MesaSchema = Schema({
    nombre: String,
    capacidad: Number,
    piso: Number,
    ubicacion: String
});

module.exports = mongoose.model('mesa', MesaSchema);