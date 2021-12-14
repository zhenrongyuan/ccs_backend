'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EstadoReservaSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('estados_reserva', EstadoReservaSchema);