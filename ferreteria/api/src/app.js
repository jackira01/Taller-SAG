const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const getCorsOptions = require('./config/cors');
const products = require('./routes/products.router');
const categories = require('./routes/categories.router');
const users = require('./routes/users.router');

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(cors(getCorsOptions()));

// Endpoint de bienvenida
server.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: '🚀 API Taller SAG funcionando correctamente',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

server.use('/products', products);
server.use('/categories', categories);
server.use('/users', users);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
