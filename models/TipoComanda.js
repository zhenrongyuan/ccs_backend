'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipoComandaSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('tipos_comanda', TipoComandaSchema);