'use strict'

let Cuenta = {
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
};