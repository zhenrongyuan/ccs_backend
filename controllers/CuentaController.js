'use strict'
let ModeloObjeto = require('../models/Comanda');
let EstadoCuenta = require('../models/EstadoCuenta');

let cuenta = {
    subtotal: Number,
    descuento: Number,
    propina: Number,
    total: Number,
    comentario: String,
    estado: {
        clave: String,
        glosa: String
    }
};

async function calcularCuenta(request, response) {
    let modeloObtenidoId = request.params.id;

    ModeloObjeto.findById(modeloObtenidoId).exec(async(error, modeloObtenido) => {
        if (error) {
            onServerError(response, error);
        } else {
            if (modeloObtenido) {;
                let comanda_calculada = calcular(modeloObtenido);
                let estado = await EstadoCuenta.findOne({ clave: 'SOL' }).exec();
                estado = { "estado": estado };
                console.log(estado);
                comanda_calculada.estado = estado;
                return response.status(200).send({
                    comanda_calculada
                })
            } else {
                onNotFound(response);
            }
        }
    });
}

function obtenerEstadoCuenta(request, response, valor) {
    let query = { clave: valor };
    EstadoCuenta.findOne(query).exec((error, modeloObtenido) => {
        if (error) {
            console.log(error);
            //onServerError(response, error);
        } else {
            if (modeloObtenido) {
                return modeloObtenido;
            } else {
                //onNotFound(response);
            }
        }
    });
}

function calcular(comanda) {
    cuenta.subtotal = 0;
    cuenta.propina = 0;

    comanda.detalle.forEach(function(det) {
        det.producto.monto_neto = det.producto.precio * det.cantidad;

        cuenta.subtotal += det.producto.monto_neto;
    });
    //comanda.cuenta.total = 1000000 + subtotal;
    let cuentaConDescuento = cuenta.subtotal - cuenta.descuento;
    cuenta.propina = cuentaConDescuento * 0.1;
    cuenta.total = cuentaConDescuento + comanda.cuenta.propina;
    comanda.cuenta = cuenta;
    return comanda;
}

function onNotFound(response) {
    response.status(404).send({
        message: 'No existe comanda.'
    });
}

function onServerError(response, error) {
    response.status(500).send({
        message: 'Error en el servidor.',
        error
    });
}

module.exports = {
    calcularCuenta
};