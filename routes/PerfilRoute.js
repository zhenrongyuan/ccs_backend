'use strict'

var express = require('express');
var controller = require('../controllers/PerfilController');

var api = express.Router();

api.post('/perfil', controller.guardar);
api.get('/perfil', controller.obtenerTodos);
api.get('/perfil/:id', controller.obtener);
api.put('/perfil/:id', controller.actualizar);
api.delete('/perfil/:id', controller.eliminar);
module.exports = api;