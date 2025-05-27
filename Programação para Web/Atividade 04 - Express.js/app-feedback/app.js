// app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const feedbackRoutes = require('./rotas/feedbacks');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rotas de feedbacks
app.use('/feedbacks', feedbackRoutes);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
