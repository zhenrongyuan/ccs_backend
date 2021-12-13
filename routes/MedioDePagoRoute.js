'use strict'

var express = require('express');
var controller = require('../controllers/MedioDePagoController');

var api = express.Router();

api.post('/medio_de_pago', controller.guardar);
api.get('/medio_de_pago', controller.obtenerTodos);
api.get('/medio_de_pago/:id', controller.obtener);
api.put('/medio_de_pago/:id', controller.actualizar);
api.delete('/medio_de_pago/:id', controller.eliminar);
module.exports = api;