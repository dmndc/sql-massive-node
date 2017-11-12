const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

// Controller
const controller = require('./products_controller')

const app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then( db => app.set('db', db) );


// Endpoints
app.post('/api/product', controller.create);
app.get('/api/products', controller.getAll);
app.get('/api/product/:id', controller.getOne);
app.put('/api/product/:id', controller.update);
app.delete('/api/product/:id', controller.delete);


const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server listening on port ${3000}.`) });