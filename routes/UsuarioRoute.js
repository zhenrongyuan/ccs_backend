'use strict'

var express = require('express');
var controller = require('../controllers/UsuarioController');

var api = express.Router();

api.post('/usuario', controller.guardar);
api.get('/usuario', controller.obtenerTodos);
api.get('/usuario/:id', controller.obtener);
api.put('/usuario/:id', controller.actualizar);
api.delete('/usuario/:id', controller.eliminar);
module.exports = api;