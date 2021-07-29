const express = require('express'),
  app = express(),
  rotasProdutos = require('./routes/rotasProdutos'),
  rotasSobre = require('./routes/rotasSobre')
  port = 3000

app.get('/', (req, res) => res.send('<h3>Vocês está na página inicial</h3>'))
app.get('/produto', (req, res) => res.send('<h3>Vocês está na página Produto</h3>'))
app.use('/produtos', rotasProdutos)
app.use('/sobre', rotasSobre)
app.get('/usuarios/:nome?', (req, res) => {
  const { nome } = req.params
  res.send(nome ? `Página do usuário ${nome}` : 'Página de usuários')
})
app.get('/objeto', (req, res) => {
  res.send({
    nome: "Joselito",
    sobrenome: "Sem Noção",
    melhoresAmigos: "Hermes e Renato"
  })
})
app.get('/array', (req, res) => {
  res.send([
    {
      nome: "Joselito",
      sobrenome: "Sem Noção",
      melhoresAmigos: "Hermes e Renato"
    },
    {
      nome: "Irmão",
      sobrenome: "do Jorel",
      melhoresAmigos: "Shostner e Lara"
    }
  ])
})

app.listen(port, () => console.log('Servidor iniciado'))