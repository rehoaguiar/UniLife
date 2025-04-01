// 4 - Crie um programa que desenha um triângulo de asteriscos (*) no console, onde o número de linhas é especificado pelo usuário. Exemplo de saída: Se o usuário digitar 5 para o número de linhas, o resultado será: * ** *** **** *****

function perguntarNum(){
    let numLinhas = prompt('Digite o número de linhas que você deseja ter no seu triângulo: ');
    return parseInt(numLinhas);
}

function verificarNum(numLinhas){
    if(isNaN(numLinhas)){
        console.log('Valor inválido! Favor digite somente números');
        let novoNumero = perguntarNum();
        verificarNum(novoNumero)

    } else {
        console.log(`Triângulo com ${numLinhas} linha(s):`);
        for (let i = 1; i <= numLinhas; i++){
            console.log('*'.repeat(i));
        }
    }
}

let numero = perguntarNum();
verificarNum(numero);