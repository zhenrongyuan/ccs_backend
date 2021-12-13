'use strict'

var express = require('express');
var controller = require('../controllers/TipoProductoController');

var api = express.Router();

api.post('/tipo_producto', controller.guardar);
api.get('/tipo_producto', controller.obtenerTodos);
api.get('/tipo_producto/:id', controller.obtener);
api.put('/tipo_producto/:id', controller.actualizar);
api.delete('/tipo_producto/:id', controller.eliminar);
module.exports = api;