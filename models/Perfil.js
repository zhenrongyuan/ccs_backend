'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PerfilSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('perfile', PerfilSchema);