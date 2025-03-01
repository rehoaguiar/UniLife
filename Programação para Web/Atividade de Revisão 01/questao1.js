// 1 - Crie um jogo onde o computador gera um número aleatório de 1 a 20, e o usuário precisa adivinhar qual é. O jogo deve dar dicas se o número digitado for maior ou menor que o número secreto. O jogo só termina quando o usuário acertar.

// Declarando as variáveis
let numGerado = Math.floor(Math.random() * 20) + 1

function perguntarNum(){
    var tentativaUser = parseInt(window.prompt("Digite a sua tentativa: "))

    isNum(tentativaUser)
    verificar_num(tentativaUser)
}

function verificar_num(tentativaUser){
    if(tentativaUser > 20 || tentativaUser < 1){
        console.log('Opção inválida. Por favor digite somente números inteiros')
        perguntarNum()

    } else if (tentativaUser > numGerado) {
        console.log(`O número ${tentativaUser} é maior que o número secreto`);
        perguntarNum();

    } else if (tentativaUser === numGerado) {
        console.log(`Parabéns! O número secreto era igual a ${tentativaUser}`);

    } else {
        console.log(`O número ${tentativaUser} é menor que o número secreto`);
        perguntarNum();
    }
}

// Tratamento de erros
function isNum(tentativaUser){
    if (isNaN(tentativaUser)) {
        console.log('Opção inválida. Por favor digite somente números inteiros')
        perguntarNum()
    
    }
}

perguntarNum()

