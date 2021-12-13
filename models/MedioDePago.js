'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MediosDePagoSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('medios_de_pago', MediosDePagoSchema);