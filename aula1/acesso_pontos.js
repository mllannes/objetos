const cliente = {
  nome: 'Mariana',
  idade: 29,
  cpf: '1122233345',
  email: 'mariana@dominio.com'
}

console.log(
  `O nome da cliente é ${cliente.nome} e ela tem ${cliente.idade} anos.`
)

console.log(
  `Os três primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}.`
)
