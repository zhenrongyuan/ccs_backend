'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PerfilSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('perfile', PerfilSchema);