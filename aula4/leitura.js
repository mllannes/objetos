const dados = require('./cliente.json')

console.log(dados)
console.log(typeof dados)

// require() permite passar o caminho de um arquivo terminado em .json para obter o conteúdo de um arquivo tipo JSON

const clienteEmString = JSON.stringify(dados)

console.log(clienteEmString)
console.log(typeof clienteEmString)

console.log(clienteEmString.nome)

const objetoCliente = JSON.parse(clienteEmString)
console.log(objetoCliente)

console.log(objetoCliente.nome)
