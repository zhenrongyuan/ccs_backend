'use strict'

let express = require('express');
let controller = require('../controllers/ProductoController');

let api = express.Router();

api.post('/producto', controller.guardar);
api.get('/producto', controller.obtenerTodos);
api.get('/producto/:id', controller.obtener);
api.put('/producto/:id', controller.actualizar);
api.delete('/producto/:id', controller.eliminar);
module.exports = api;