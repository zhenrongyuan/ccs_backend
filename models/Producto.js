'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductoSchema = Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    popularidad: Number,
    tipo: {
        clave: String,
        glosa: String
    },
    estado: {
        clave: String,
        glosa: String
    }
});

module.exports = mongoose.model('producto', ProductoSchema);