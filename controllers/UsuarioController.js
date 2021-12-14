'use strict'

let ModeloObjeto = require('../models/Usuario');

function obtenerTodos(request, response) {
    ModeloObjeto.find({}).exec((error, usuario) => {
        if (error) {
            onServerError(response, error);
        } else {
            if (usuario) {
                return response.status(200).send({
                    usuario
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
                    'usuario': modeloObtenido
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
    if (params.personal.nombre && params.personal.rut &&
        params.personal.celular && params.personal.fecha_ingreso &&
        params.perfiles[0].clave && params.perfiles[0].glosa &&
        params.password && params.estado.clave && params.estado.glosa) {
        modeloObtenido.personal = params.personal;
        modeloObtenido.perfiles = params.perfiles;
        modeloObtenido.password = params.password;
        modeloObtenido.estado = params.estado;
        modeloObtenido.intento = 0;

        modeloObtenido.save((error, modeloObtenido) => {
            if (error) {
                onServerError(response, error);
            } else {
                if (modeloObtenido) {
                    return response.status(200).send({
                        'message': 'Usuario guardado correctamente.',
                        'usuario': modeloObtenido
                    })
                } else {
                    response.status(200).send({
                        message: 'No se ha guardado el usuario.'
                    })
                }
            }
        });
    } else {
        response.status(200).send({
            message: 'Faltan algunos de estos datos: nombre, rut, celular, fecha_ingreso, password, estado; clave o glosa.'
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
                    'message': 'Reserva actualizada correctamente.'
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
        message: 'No existe usuario.'
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