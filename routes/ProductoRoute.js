'use strict'

var express = require('express');
var controller = require('../controllers/ProductoController');

var api = express.Router();

api.post('/producto', controller.guardar);
api.get('/producto', controller.obtenerTodos);
api.get('/producto/:id', controller.obtener);
api.put('/producto/:id', controller.actualizar);
api.delete('/producto/:id', controller.eliminar);
module.exports = api;