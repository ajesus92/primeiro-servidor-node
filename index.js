const express = require('express'),
  app = express()

  app.get('/', (req, res) => res.send('<h3>Vocês está na página inicial</h3>'))

  app.listen(3000, ()=> console.log('Servidor iniciado'))