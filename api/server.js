const express = require('express');
const morgan = require('morgan')
const { logger } = require('./middleware/middleware')

const server = express();


// remember express by default cannot parse JSON in request bodies
server.use(express.json())
// global middleware's and the user's router need to be connected here
server.use(logger)
server.use(morgan('dev'))

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
