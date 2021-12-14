'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EstadoComandaSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('estados_comanda', EstadoComandaSchema);