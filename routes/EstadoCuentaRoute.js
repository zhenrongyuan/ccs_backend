'use strict'

let express = require('express');
let controller = require('../controllers/EstadoCuentaController');

let api = express.Router();

api.post('/estado_cuenta', controller.guardar);
api.get('/estado_cuenta', controller.obtenerTodos);
api.get('/estado_cuenta/:id', controller.obtener);
api.put('/estado_cuenta/:id', controller.actualizar);
api.delete('/estado_cuenta/:id', controller.eliminar);
module.exports = api;