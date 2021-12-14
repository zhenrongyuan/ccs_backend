'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MediosDePagoSchema = Schema({
    clave: String,
    glosa: String
});

module.exports = mongoose.model('medios_de_pago', MediosDePagoSchema);