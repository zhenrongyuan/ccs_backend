'use strict'

var ModeloObjeto = require('../models/Reserva');

function obtenerTodos(request, response) {
    ModeloObjeto.find({}).exec((error, reserva) => {
        if (error) {
            onServerError(response, error);
        } else {
            if (reserva) {
                return response.status(200).send({
                    reserva
                })
            } else {
                onNotFound(response);
            }
        }
    });
}

function obtener(request, response) {
    var modeloObtenidoId = request.params.id;

    ModeloObjeto.findById(modeloObtenidoId).exec((error, modeloObtenido) => {
        if (error) {
            onServerError(response, error);
        } else {
            if (modeloObtenido) {
                return response.status(200).send({
                    'reserva': modeloObtenido
                })
            } else {
                onNotFound(response);
            }
        }
    });
}

function guardar(request, response) {
    var modeloObtenido = new ModeloObjeto();

    var params = request.body;
    if (params.cliente.nombre && params.cliente.correo &&
        params.cliente.celular && params.fecha_reserva &&
        params.cantidad_personas) {
        modeloObtenido.cliente = params.cliente;
        modeloObtenido.fecha_reserva = params.fecha_reserva;
        modeloObtenido.cantidad_personas = params.cantidad_personas;
        modeloObtenido.estado = params.estado;
        modeloObtenido.comentario = params.comentario;

        modeloObtenido.save((error, modeloObtenido) => {
            if (error) {
                onServerError(response, error);
            } else {
                if (modeloObtenido) {
                    return response.status(200).send({
                        'message': 'Reserva guardada correctamente.',
                        'reserva': modeloObtenido
                    })
                } else {
                    response.status(200).send({
                        message: 'No se ha guardado la reserva.'
                    })
                }
            }
        });
    } else {
        response.status(200).send({
            message: 'Faltan algunos de estos datos: nombre, correo, celular, fecha_de_reserva o cantidad_personas.'
        })
    }
}

function actualizar(request, response) {
    var modeloObtenidoId = request.params.id;
    var update = request.body;

    ModeloObjeto.findByIdAndUpdate(modeloObtenidoId, update, { new: true }, (error, modeloObtenido) => {
        if (error) {
            onServerError(response, error);
        } else {
            if (modeloObtenido) {
                return response.status(200).send({
                    'message': 'Reserva actualizada correctamente.'
                })
            } else {
                onNotFound(response);
            }
        }
    });
}

function eliminar(request, response) {
    var modeloObtenidoId = request.params.id;

    ModeloObjeto.findByIdAndRemove(modeloObtenidoId, (error, modeloRemovido) => {
        if (error) {
            onServerError(response, error);
        } else {
            if (modeloRemovido) {
                return response.status(200).send({
                    'message': 'Reserva eliminada correctamente.'
                })
            } else {
                onNotFound(response);
            }
        }
    });
}

function onNotFound(response) {
    response.status(404).send({
        message: 'No existe reserva.'
    });
}

function onServerError(response, error) {
    response.status(500).send({
        message: 'Error en el servidor.',
        error
    });
}

module.exports = {
    obtenerTodos,
    obtener,
    guardar,
    actualizar,
    eliminar
};