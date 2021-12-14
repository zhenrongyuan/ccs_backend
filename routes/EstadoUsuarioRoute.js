'use strict'

let express = require('express');
let controller = require('../controllers/EstadoUsuarioController');

let api = express.Router();

api.post('/estado_usuario', controller.guardar);
api.get('/estado_usuario', controller.obtenerTodos);
api.get('/estado_usuario/:id', controller.obtener);
api.put('/estado_usuario/:id', controller.actualizar);
api.delete('/estado_usuario/:id', controller.eliminar);
module.exports = api;