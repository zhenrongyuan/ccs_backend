'use strict'

let mongoose = require('mongoose');
let app = require('./app');
let port = 3800;
mongoose.connect('mongodb://localhost:27017/ccs_restaurant_menchoy')
    .then(() => {
        console.log('La conexión a MongoDB se ha realizado correctamente!');

        app.listen(port, () => {
            console.log('El servidor está corriendo en localhost:3800');
        })
    })
    .catch(err => console.log(err));