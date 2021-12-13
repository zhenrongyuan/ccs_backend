'use strict'

var ModeloObjeto = require('../models/Comanda');

function obtenerTodos(request, response) {
    ModeloObjeto.find({}).exec((error, comanda) => {
        if (error) {
            onServerError(response, error);
        } else {
            if (comanda) {
                return response.status(200).send({
                    comanda
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
                    'comanda': modeloObtenido
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
    if (params.tipo.clave && params.personal[0].rut) {
        modeloObtenido.cliente = params.cliente;
        modeloObtenido.mesa = params.mesa;
        modeloObtenido.tipo = params.tipo;
        modeloObtenido.personal = params.personal;
        modeloObtenido.detalle = params.detalle;
        modeloObtenido.cuenta = params.cuenta;
        modeloObtenido.estado = params.estado;

        modeloObtenido.save((error, modeloObtenido) => {
            if (error) {
                onServerError(response, error);
            } else {
                if (modeloObtenido) {
                    return response.status(200).send({
                        'message': 'Comanda guardada correctamente.',
                        'comanda': modeloObtenido
                    })
                } else {
                    response.status(200).send({
                        message: 'No se ha guardado la comanda.'
                    })
                }
            }
        });
    } else {
        response.status(200).send({
            message: 'Faltan algunos de estos datos: tipo de comanda (clave) y rut del personal.'
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
                    'message': 'Comanda actualizada correctamente.'
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
                    'message': 'Comanda eliminada correctamente.'
                })
            } else {
                onNotFound(response);
            }
        }
    });
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
    obtenerTodos,
    obtener,
    guardar,
    actualizar,
    eliminar
};