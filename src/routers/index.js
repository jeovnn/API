const exampleRoute = require('./example');
const nomeRoute = require('./nomeCriador');

module.exports = (app) => {
  exampleRoute(app);
  nomeRoute(app);
}