'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReservaSchema = Schema({
    cliente: {
        nombre: String,
        correo: String,
        direccion: String,
        celular: String
    },
    fecha_reserva: String,
    estado: {
        clave: String,
        glosa: String,
    },
    cantidad_personas: Number,
    comentario: String
});

module.exports = mongoose.model('reserva', ReservaSchema);