const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    })
    switch (req.url) {
        case '/':
          return res.end('<h1>VOCÊ ESTÁ NA HOME</h1>')
        case '/sobre':
          return res.end('<h1>VOCÊ ESTÁ NA PÁGINA SOBRE</h1>')
        case '/produto':
          return res.end('<h1>VOCÊ ESTÁ NA PÁGINA DE PRODUTO</h1>')
        default:
          return res.end(`<h1>NÃO EXISTE ESSA PÁGINA${req.url.toUpperCase().replace(/\/|-/g,' ')}</h1>`)
      }
    
}).listen(3000, 'localhost', () => console.log('O servidor está rodando na porta 3000'))