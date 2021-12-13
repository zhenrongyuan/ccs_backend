'use strict'

var express = require('express');
var controller = require('../controllers/PersonalController');

var api = express.Router();

api.get('/personal', controller.obtenerTodos);
api.get('/personal/:id', controller.obtener);
api.post('/personal', controller.guardar);
api.put('/personal/:id', controller.actualizar);
api.delete('/personal/:id', controller.eliminar);
module.exports = api;