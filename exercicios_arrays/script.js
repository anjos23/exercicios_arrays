//exercicios de array

let Array
console.log('a.', Array)

array = null// e um valor nulo
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log("c.", array.length)//mostra a quantidade

//let i = 0
//console.log('d.',array[i])//3

let i = 0
console.log('d.',array[i])//3

array[i+1]=19;
console.log('e',array)

const valor = array[i+6]
console.log('f.', valor)//9


//const frase = prompt('Digite uma frase')

//console.log(frase.toUpperCase().replaceAll('A', 'I'), frase.lengt)

//let nome = prompt('digite seu no nome')
//let email = prompt('digite seu email')


//console.log('o email aline' + email + ' foi cadastrado com sucesso. ' + 'seja bem-vindo(a)'+ nome + '')



let listaDeTarefas = []
let tarefa1 =prompt('digite a pirimeira tarefa')
let tarefa2 = prompt('digite sua segunda tarefa')
let tarefa3 = prompt('finalmente digite a terceira tarefa')

listaDeTarefas.push(tarefa1 ,tarefa2 ,tarefa3 )
console.log(listaDeTarefas)

let indice = prompt("digite agora uma tarefa que vc ja fez")
indice.splice(indice)
console.log(listaDeTarefas)