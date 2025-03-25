// 5 - Escreva um programa para encontrar a soma da série 1 + 11 + 1111 + ... n termos. Conforme a entrada a seguir: Exemplo da saída: Se o usuário digitar a quantidade de termos igual a 5, o resultado será: 1 + 11 + 111 + 1111 + 11111 A soma é: 12345

function perguntarQuantidade(){
    let numTermos = prompt('Digite o número de termos: ');
    return parseInt(numTermos);
}

function calcularSerie(numTermos){
    if(isNaN(numTermos)){
        console.log('Valor inválido! Favor digite somente números');
        let novoNumero = perguntarNum();
        calcularSerie(novoNumero)

    } else {
        let soma = 0
        let resultado = "";
    
        for (let i = 1; i <= numTermos; i++){
            let termo = '1'.repeat(i);
            soma += parseInt(termo);
            resultado += termo;

            if (i < numTermos){
                resultado += ' + ';
            }
        }

        console.log(resultado);
        console.log("A soma é: " + soma);
    }
}

let quantidade = perguntarQuantidade();
calcularSerie(quantidade);