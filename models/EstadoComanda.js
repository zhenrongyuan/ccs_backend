'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstadoComandaSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('estados_comanda', EstadoComandaSchema);