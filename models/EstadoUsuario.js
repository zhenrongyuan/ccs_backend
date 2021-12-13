'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstadoUsuarioSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('estados_usuario', EstadoUsuarioSchema);