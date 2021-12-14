'use strict'

let express = require('express');
let controller = require('../controllers/ComandaController');

let api = express.Router();

api.get('/comanda', controller.obtenerTodos);
api.get('/comanda/:id', controller.obtener);
api.post('/comanda', controller.guardar);
api.put('/comanda/:id', controller.actualizar);
api.delete('/comanda/:id', controller.eliminar);
module.exports = api;