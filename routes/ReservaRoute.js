'use strict'

let express = require('express');
let controller = require('../controllers/ReservaController');

let api = express.Router();

api.post('/reserva', controller.guardar);
api.get('/reserva', controller.obtenerTodos);
api.get('/reserva/:id', controller.obtener);
api.put('/reserva/:id', controller.actualizar);
api.delete('/reserva/:id', controller.eliminar);
module.exports = api;