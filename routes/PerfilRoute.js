'use strict'

let express = require('express');
let controller = require('../controllers/PerfilController');

let api = express.Router();

api.post('/perfil', controller.guardar);
api.get('/perfil', controller.obtenerTodos);
api.get('/perfil/:id', controller.obtener);
api.put('/perfil/:id', controller.actualizar);
api.delete('/perfil/:id', controller.eliminar);
module.exports = api;