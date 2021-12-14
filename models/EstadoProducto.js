'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EstadoProductoSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('estados_producto', EstadoProductoSchema);