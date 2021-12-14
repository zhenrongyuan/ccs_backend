'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TipoProductoSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('tipos_producto', TipoProductoSchema);