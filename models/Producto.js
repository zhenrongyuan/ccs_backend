'use strict'

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ProductoSchema = Schema({
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