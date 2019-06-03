const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('<h3>DB Helpers with knex</h3>');
});

module.exports = server;