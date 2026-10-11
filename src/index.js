require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./configs');
const PORT = process.env.PORT;

app.use(express.json());

require('./routers')(app);

app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'ok',
    message: 'API rodando'
  });
});

app.listen(PORT, () => {
  console.log(`API Rodando na porta ${PORT}`)
});