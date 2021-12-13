'use strict'

var express = require('express');
var controller = require('../controllers/ComandaController');

var api = express.Router();

api.get('/comanda', controller.obtenerTodos);
api.get('/comanda/:id', controller.obtener);
api.post('/comanda', controller.guardar);
api.put('/comanda/:id', controller.actualizar);
api.delete('/comanda/:id', controller.eliminar);
module.exports = api;