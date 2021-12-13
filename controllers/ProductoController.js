'use strict'

var ModeloObjeto = require('../models/Producto');

function obtenerTodos(request, response) {
    ModeloObjeto.find({}).exec((error, producto) => {
        if (error) {
            onServerError(response, error);
        } else {
            if (producto) {
                return response.status(200).send({
                    producto
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
                    'producto': modeloObtenido
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
    if (params.nombre && params.descripcion &&
        params.precio &&
        params.tipo.clave && params.tipo.glosa &&
        params.estado.clave && params.estado.glosa) {
        modeloObtenido.nombre = params.nombre;
        modeloObtenido.descripcion = params.descripcion;
        modeloObtenido.precio = params.precio;
        modeloObtenido.tipo = params.tipo;
        modeloObtenido.estado = params.estado;

        modeloObtenido.save((error, modeloObtenido) => {
            if (error) {
                onServerError(response, error);
            } else {
                if (modeloObtenido) {
                    return response.status(200).send({
                        'message': 'Producto guardado correctamente.',
                        'producto': modeloObtenido
                    })
                } else {
                    response.status(200).send({
                        message: 'No se ha guardado el producto.'
                    })
                }
            }
        });
    } else {
        response.status(200).send({
            message: 'Faltan algunos de estos datos: nombre, descripción, precio, tipo o estado.'
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
                    'message': 'Producto actualizado correctamente.'
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
                    'message': 'Producto eliminado correctamente.'
                })
            } else {
                onNotFound(response);
            }
        }
    });
}

function onNotFound(response) {
    response.status(404).send({
        message: 'No existe producto.'
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