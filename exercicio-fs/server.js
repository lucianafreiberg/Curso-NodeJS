const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  let arquivo

  switch (req.url) {
    case '/contato':
      arquivo = 'contato.html'
      break
    case '/cliente':
      arquivo = 'cliente.html'
      break
    default:
      arquivo = 'index.html'
      break
  }

  // lemos o arquivo conforme a rota
  fs.readFile(arquivo, 'utf8', (_err, data) => {
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.end(data)
  })
}).listen(3033)
