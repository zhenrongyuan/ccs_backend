'use strict'

var express = require('express');
var controller = require('../controllers/MesaController');

var api = express.Router();

api.post('/mesa', controller.guardar);
api.get('/mesa', controller.obtenerTodos);
api.get('/mesa/:id', controller.obtener);
api.put('/mesa/:id', controller.actualizar);
api.delete('/mesa/:id', controller.eliminar);
module.exports = api;