module.exports = (app) => {
  app.get('/produtos', (req, res) => {
    return res.status(200).json({
      status: 'Nenhum produto'
    });
  });
}