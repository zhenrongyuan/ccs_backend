'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComandaSchema = Schema({
    cliente: {
        nombre: String,
        correo: String,
        direccion: String,
        celular: String
    },
    mesa: {
        nombre: String,
        capacidad: Number,
        piso: Number,
        ubicacion: String
    },
    tipo: {
        clave: String,
        glosa: String
    },
    personal: {
        rut: String,
        nombre: String,
        direccion: String,
        celular: String,
        fecha_ingreso: String
    },
    detalle: [{
        producto: {
            nombre: String,
            descripcion: String,
            precio: Number,
            popularidad: Number,
            tipo: {
                clave: String,
                glosa: String
            }
        },
        cantidad: Number,
        monto_neto: Number,
        comentario: String
    }],
    cuenta: {
        subtotal: Number,
        descuento: Number,
        propina: Number,
        total: Number,
        medio_de_pago: {
            clave: String,
            glosa: String
        },
        comentario: String,
        estado: {
            clave: String,
            glosa: String
        }
    },
    personal: [{
        rut: String,
        nombre: String,
        direccion: String,
        celular: String,
        fecha_ingreso: String
    }],
    estado: {
        clave: String,
        glosa: String
    }
});

module.exports = mongoose.model('comanda', ComandaSchema);