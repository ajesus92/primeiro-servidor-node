const express = require('express'),
  app = express()

app.get('/', (req, res) => res.send('<h3>Vocês está na página inicial</h3>'))
app.get('/sobre', (req, res) => res.send('<h3>Vocês está na página sobre</h3>'))
app.get('/produto/:id/:cor?', (req, res) => res.send(`<h3>Vocês está na página do produto de id ${req.params.id} e cor ${req.params.cor}</h3>`))
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

app.listen(3000, () => console.log('Servidor iniciado'))