const express = require('express');
const path = require('path');
const router = express.Router();

const feedbacks = [];

router.post('/enviar', (req, res) => {
  const { nome, comentario } = req.body;
  if (nome && comentario) {
    feedbacks.push({ nome, comentario });
  }
  res.redirect('/feedbacks/lista');
});

router.get('/lista', (req, res) => {
  let html = '<h1>Feedbacks Recebidos</h1><ul>';
  feedbacks.forEach((fb) => {
    html += `<li><strong>${fb.nome}:</strong> ${fb.comentario}</li>`;
  });
  html += '</ul><a href="/">Voltar</a>';
  res.send(html);
});

module.exports = router;
