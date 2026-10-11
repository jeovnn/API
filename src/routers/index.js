const exampleRoute = require('./example');
const nomeRoute = require('./nomeCriador');
const produtos = require('./produtos')

module.exports = (app) => {
  exampleRoute(app);
  nomeRoute(app);
  produtos(app);
}