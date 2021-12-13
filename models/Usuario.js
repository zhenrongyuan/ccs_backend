'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    personal: {
        rut: String,
        nombre: String,
        direccion: String,
        celular: String,
        fecha_ingreso: String,

    },
    perfiles: [{
        clave: String,
        glosa: String
    }],
    password: String,
    intento: Number,
    estado: {
        clave: String,
        glosa: String
    }
});

module.exports = mongoose.model('usuario', UsuarioSchema);