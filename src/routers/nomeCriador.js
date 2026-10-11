module.exports = (app) => {
  app.get('/nome', (req, res) => {
    return res.status(200).json({
      status: 'Jeovan Mailon de Abreu'
    });
  });
}