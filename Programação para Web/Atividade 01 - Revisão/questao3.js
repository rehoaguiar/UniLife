// 3 - Crie um programa que pede ao usuário para digitar um número e, em seguida, exibe a tabuada desse número de 1 a 10 no formato de uma tabela. Exemplo de saída: Se o número escolhido por 5, a saída será: 5 x 1 = 5 5 x 2 = 10 5 x 3 = 15 ... 5 x 10 = 50

function perguntarNumUser(){
    let numUser = prompt('Digite um número: ')
    return parseInt(numUser)
}

function verificarNum(numUser){
    if(isNaN(numUser)){
        console.log('Número inválido. Tente novamente.');
        let novoNum = perguntarNumUser();
        verificarNum(novoNum);      
             // chama recursivamente com o novo número
    } else {
        console.log(`Tabuada do número ${numUser}`)
        for (let i = 1; i <= 10; i++){
            console.log(`${numUser} x ${i} = ${numUser * i}`)
        }
    }
}

let numero = perguntarNumUser();
verificarNum(numero);
