'use strict'

const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const routes = require('./routes');
const configureHandlebars = require('./configure-handlebars');


const server = new hapi.Server();


server.connection({
  host: 'localhost',
  port: process.env.PORT || 3000
});

server.register([inert, vision], err => {
  if (err) { throw err; }
  server.route(routes);
  server.views(configureHandlebars);
});


module.exports = server;
