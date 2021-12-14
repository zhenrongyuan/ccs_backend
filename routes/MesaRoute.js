'use strict'

let express = require('express');
let controller = require('../controllers/MesaController');

let api = express.Router();

api.post('/mesa', controller.guardar);
api.get('/mesa', controller.obtenerTodos);
api.get('/mesa/:id', controller.obtener);
api.put('/mesa/:id', controller.actualizar);
api.delete('/mesa/:id', controller.eliminar);
module.exports = api;