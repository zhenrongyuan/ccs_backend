'use strict'

let express = require('express');
let controller = require('../controllers/EstadoComandaController');

let api = express.Router();

api.post('/estado_comanda', controller.guardar);
api.get('/estado_comanda', controller.obtenerTodos);
api.get('/estado_comanda/:id', controller.obtener);
api.put('/estado_comanda/:id', controller.actualizar);
api.delete('/estado_comanda/:id', controller.eliminar);
module.exports = api;