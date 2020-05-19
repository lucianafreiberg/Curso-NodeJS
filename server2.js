const http = require('http')

http.createServer((req, res) => {
  // todas as requisições são descritas dentro do url
  console.log(req.url)

  if (req.url === '/favicon.ico') {
    console.log('Solicitou o icone!')
  }

  console.log('Chegou uma requisição')

  // retorna um cabeçalho para a requisição.
  res.writeHead(404, { 'Content-type': 'text/html' })

  res.end('<h1>FIM</h1>')
}
).listen(3033)
