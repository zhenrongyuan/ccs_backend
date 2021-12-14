'use strict'

let express = require('express');
let controller = require('../controllers/EstadoProductoController');

let api = express.Router();

api.post('/estado_producto', controller.guardar);
api.get('/estado_producto', controller.obtenerTodos);
api.get('/estado_producto/:id', controller.obtener);
api.put('/estado_producto/:id', controller.actualizar);
api.delete('/estado_producto/:id', controller.eliminar);
module.exports = api;