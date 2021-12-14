'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EstadoUsuarioSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('estados_usuario', EstadoUsuarioSchema);