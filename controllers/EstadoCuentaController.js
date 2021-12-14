'use strict'

let ModeloObjeto = require('../models/EstadoCuenta');

function obtenerTodos(request, response) {
    ModeloObjeto.find({}).exec((error, estado_cuenta) => {
        if (error) {
            onServerError(response, error);
        } else {
            if (estado_cuenta) {
                return response.status(200).send({
                    estado_cuenta
                })
            } else {
                onNotFound(response);
            }
        }
    });
}

function obtener(request, response) {
    let modeloObtenidoId = request.params.id;

    ModeloObjeto.findById(modeloObtenidoId).exec((error, modeloObtenido) => {
        if (error) {
            onServerError(response, error);
        } else {
            if (modeloObtenido) {
                return response.status(200).send({
                    'estado_cuenta': modeloObtenido
                })
            } else {
                onNotFound(response);
            }
        }
    });
}

function guardar(request, response) {
    let modeloObtenido = new ModeloObjeto();

    let params = request.body;

    if (params.clave && params.glosa) {
        modeloObtenido.clave = params.clave;
        modeloObtenido.glosa = params.glosa;

        modeloObtenido.save((error, modeloObtenido) => {
            if (error) {
                onServerError(response, error);
            } else {
                if (modeloObtenido) {
                    return response.status(200).send({
                        'message': 'Estado de cuenta guardado correctamente.',
                        'estado_cuenta': modeloObtenido
                    })
                } else {
                    response.status(200).send({
                        message: 'No se ha guardado el estado de cuenta.'
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
    let modeloObtenidoId = request.params.id;
    let update = request.body;

    ModeloObjeto.findByIdAndUpdate(modeloObtenidoId, update, { new: true }, (error, modeloObtenido) => {
        if (error) {
            onServerError(response, error);
        } else {
            if (modeloObtenido) {
                return response.status(200).send({
                    'message': 'Estado cuenta actualizado correctamente.'
                })
            } else {
                onNotFound(response);
            }
        }
    });
}

function eliminar(request, response) {
    let modeloObtenidoId = request.params.id;

    ModeloObjeto.findByIdAndRemove(modeloObtenidoId, (error, modeloRemovido) => {
        if (error) {
            onServerError(response, error);
        } else {
            if (modeloRemovido) {
                return response.status(200).send({
                    'message': 'Estado cuenta eliminado correctamente.'
                })
            } else {
                onNotFound(response);
            }
        }
    });
}

function onNotFound(response) {
    response.status(404).send({
        message: 'No existe estado cuenta.'
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