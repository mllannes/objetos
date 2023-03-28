const cliente = {
  nome: 'Mariana',
  idade: 29,
  cpf: '1122233345',
  email: 'mariana@dominio.com'
}

console.log(
  `O nome da cliente é ${cliente['nome']} e ela tem ${cliente['idade']} anos.`
)

const chaves = ['nome', 'idade', 'email']

chaves.forEach(chave => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})
