// VAR //
// void (function () {
//   console.log(mensagem)
// })()
// var mensagem

// LET //

// var exibeMensagem = function () {
//   if (true) {
//     var escopoFuncao = `Caleum`
//     let escopoBloco = `Alura`

//     console.log(escopoBloco)
//   }
//   console.log(escopoFuncao)
//   console.log(escopoBloco)
// }

// exibeMensagem()

// CONST //

// void (function () {
//   let mensagem
//   console.log(mensagem)
// })()

// void (function () {
//   const mensagem1 = `Alura`
//   console.log(mensagem1)
//   mensagem = 'Caleum'
// })()

/* constante válida */

// const idade = 18
// console.log(idade)

/* constante inválida */

// const pi;
// console.log(pi)

// const objPersonagem = {
//   nome: 'Gandalf',
//   classe: 'mago',
//   nivel: '20',
//   aliado: {
//     nome: 'Saruman',
//     classe: 'mago'
//   },
//   status: 'desaparecido'
// }

// // delete objPersonagem.aliado

// //console.log(objPersonagem.aliado) //undefined

// // Notação de colchetes

// delete objPersonagem.aliado
// delete objPersonagem['status']

// console.log(objPersonagem.aliado) //undefined
// console.log(objPersonagem.status) //undefined
// console.log(objPersonagem)

const pessoa = {
  nome: 'Bruce Banner',
  dataNascimento: '25/01/1980',
  carteiraIdentidade: '997776-X',
  email: 'profbanner@email.com',
  telefone: '+552877776666',
  cidade: 'Cachoeiro de Itapemirim',
  estado: 'ES'
}

;(pessoa.cpf = '2132156141564'), (pessoa.seguroSocial = '56454654654')

console.log(pessoa.cpf.substring(0, 4))
console.log(pessoa.seguroSocial.substring(0, 4))
