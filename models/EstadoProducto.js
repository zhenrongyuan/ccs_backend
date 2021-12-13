'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstadoProductoSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('estados_producto', EstadoProductoSchema);