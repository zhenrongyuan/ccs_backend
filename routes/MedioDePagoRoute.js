'use strict'

let express = require('express');
let controller = require('../controllers/MedioDePagoController');

let api = express.Router();

api.post('/medio_de_pago', controller.guardar);
api.get('/medio_de_pago', controller.obtenerTodos);
api.get('/medio_de_pago/:id', controller.obtener);
api.put('/medio_de_pago/:id', controller.actualizar);
api.delete('/medio_de_pago/:id', controller.eliminar);
module.exports = api;