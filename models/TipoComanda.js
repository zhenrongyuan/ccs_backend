'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TipoComandaSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('tipos_comanda', TipoComandaSchema);