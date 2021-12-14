'use strict'

let express = require('express');
let controller = require('../controllers/TipoProductoController');

let api = express.Router();

api.post('/tipo_producto', controller.guardar);
api.get('/tipo_producto', controller.obtenerTodos);
api.get('/tipo_producto/:id', controller.obtener);
api.put('/tipo_producto/:id', controller.actualizar);
api.delete('/tipo_producto/:id', controller.eliminar);
module.exports = api;