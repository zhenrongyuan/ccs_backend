'use strict'

var express = require('express');
var controller = require('../controllers/ReservaController');

var api = express.Router();

api.post('/reserva', controller.guardar);
api.get('/reserva', controller.obtenerTodos);
api.get('/reserva/:id', controller.obtener);
api.put('/reserva/:id', controller.actualizar);
api.delete('/reserva/:id', controller.eliminar);
module.exports = api;