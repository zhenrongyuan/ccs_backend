'use strict'

let express = require('express');
let controller = require('../controllers/TipoComandaController');

let api = express.Router();

api.post('/tipo_comanda', controller.guardar);
api.get('/tipo_comanda', controller.obtenerTodos);
api.get('/tipo_comanda/:id', controller.obtener);
api.put('/tipo_comanda/:id', controller.actualizar);
api.delete('/tipo_comanda/:id', controller.eliminar);
module.exports = api;