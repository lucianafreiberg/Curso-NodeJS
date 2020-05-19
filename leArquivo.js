const fs = require('fs')

// passamos o UTF-8 para o readFile interpretar o buffer corretamente
fs.readFile('exemplo.txt', 'utf-8', (_err, data) => {
  console.log(data)
})
