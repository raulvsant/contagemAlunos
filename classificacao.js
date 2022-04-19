let listaAlunos = ["Leonardo", "Robson", "Rafael", "Raiane", "Beyoncé", "Shakira", "Christina", "Justin", "Selena", "Vinicius"]

let quantidadeAlunos = 10;

for (let contador = 0; contador < listaAlunos.length; contador++) {

    if (contador == 0) {
        console.log(`O aluno ${listaAlunos[contador]} é o número ZERO`)
    } else if (contador % 2 == 0) {
        // contador % 2 == 0 -> PAR
        // contador % 2 == 1 -> IMPAR
        // Concatenação -> Junção de texto -> Operador: +
        console.log("O aluno " + listaAlunos[contador] + " é número " + contador + ": PAR")
    } else if (contador % 2 == 1) {
        // Interpolação -> Formata um texto inserindo valores dentro do texto
        console.log(`O aluno ${listaAlunos[contador]} é número ${contador}: IMPAR`)
    }
}