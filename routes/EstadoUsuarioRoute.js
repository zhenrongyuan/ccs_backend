'use strict'

var express = require('express');
var controller = require('../controllers/EstadoUsuarioController');

var api = express.Router();

api.post('/estado_usuario', controller.guardar);
api.get('/estado_usuario', controller.obtenerTodos);
api.get('/estado_usuario/:id', controller.obtener);
api.put('/estado_usuario/:id', controller.actualizar);
api.delete('/estado_usuario/:id', controller.eliminar);
module.exports = api;