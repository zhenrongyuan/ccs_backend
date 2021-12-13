'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstadoCuentaSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('estados_cuenta', EstadoCuentaSchema);