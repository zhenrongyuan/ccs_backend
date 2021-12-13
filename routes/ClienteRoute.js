'use strict'

var express = require('express');
var controller = require('../controllers/ClienteController');

var api = express.Router();

api.get('/cliente', controller.obtenerTodos);
api.get('/cliente/:id', controller.obtener);
api.post('/cliente', controller.guardar);
api.put('/cliente/:id', controller.actualizar);
api.delete('/cliente/:id', controller.eliminar);
module.exports = api;