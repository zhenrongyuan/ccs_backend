'use strict'

let express = require('express');
let controller = require('../controllers/ClienteController');

let api = express.Router();

api.get('/cliente', controller.obtenerTodos);
api.get('/cliente/:id', controller.obtener);
api.post('/cliente', controller.guardar);
api.put('/cliente/:id', controller.actualizar);
api.delete('/cliente/:id', controller.eliminar);
module.exports = api;