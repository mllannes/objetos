// const aluno = {
//   nome: 'Pablo Henrique Lima',
//   matricula: 65465465456,
//   curso: 'Administração',
//   materiais: ['calculo', 'matematica', 'metodologia']
// }

// console.log(aluno.materiais)

const objPersonagem = {
  nome: 'Gandalf',
  classe: 'mago',
  nivel: '20'
}

const objPersonagem2 = objPersonagem
objPersonagem2.nome = 'Gandalf, o Cinzento'

console.log(objPersonagem.nome)
console.log(objPersonagem2.nome)
