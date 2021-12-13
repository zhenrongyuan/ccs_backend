'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstadoReservaSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('estados_reserva', EstadoReservaSchema);