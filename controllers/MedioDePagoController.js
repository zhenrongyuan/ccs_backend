'use strict'

var ModeloObjeto = require('../models/MedioDePago');

function obtenerTodos(request, response) {
    ModeloObjeto.find({}).exec((error, medio_de_pago) => {
        if (error) {
            onServerError(response, error);
        } else {
            if (medio_de_pago) {
                return response.status(200).send({
                    medio_de_pago
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
                    'medio_de_pago': modeloObtenido
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

    if (params.clave && params.glosa) {
        modeloObtenido.clave = params.clave;
        modeloObtenido.glosa = params.glosa;

        modeloObtenido.save((error, modeloObtenido) => {
            if (error) {
                onServerError(response, error);
            } else {
                if (modeloObtenido) {
                    return response.status(200).send({
                        'message': 'Medio de pago guardado correctamente.',
                        'medio_de_pago': modeloObtenido
                    })
                } else {
                    response.status(200).send({
                        message: 'No se ha guardado el medio de pago.'
                    })
                }
            }
        });
    } else {
        response.status(200).send({
            message: 'La clave y glosa son obligatorias.'
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
                    'message': 'Medio de pago actualizado correctamente.'
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
                    'message': 'Medio de pago eliminado correctamente.'
                })
            } else {
                onNotFound(response);
            }
        }
    });
}

function onNotFound(response) {
    response.status(404).send({
        message: 'No existe medio de pago.'
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