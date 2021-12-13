'use strict'

var express = require('express');
var controller = require('../controllers/EstadoReservaController');

var api = express.Router();

api.post('/estado_reserva', controller.guardar);
api.get('/estado_reserva', controller.obtenerTodos);
api.get('/estado_reserva/:id', controller.obtener);
api.put('/estado_reserva/:id', controller.actualizar);
api.delete('/estado_reserva/:id', controller.eliminar);
module.exports = api;