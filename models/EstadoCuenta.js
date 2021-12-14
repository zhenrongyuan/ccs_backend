'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EstadoCuentaSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('estados_cuenta', EstadoCuentaSchema);