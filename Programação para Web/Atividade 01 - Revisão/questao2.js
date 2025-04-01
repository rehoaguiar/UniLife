// 2 – Crie um jogo de Pedra, Papel ou Tesoura onde: • O usuário escolhe uma das três opções digitando no prompt(). • O computador escolhe uma opção aleatória. • O programa deve determinar o vencedor e exibir o resultado no console.log().

function gerarEscolhaComputador(){
    let opcoes = [
        'Pedra', 
        'Papel', 
        'Tesoura'
    ];

    let escolhaComputador = Math.floor(Math.random() * opcoes.length)
    return opcoes[escolhaComputador];
}

function perguntarUsuario(){
    let escolhaUsuario = prompt('Escolha Pedra, Papel ou Tesoura: ')
    return escolhaUsuario
}

function verificarRespostaUsuario(){
    let escolhaUsuario = perguntarUsuario();
    let escolhaComputador = gerarEscolhaComputador();

    try{
        if(escolhaUsuario.toLowerCase() === escolhaComputador.toLowerCase()){
            console.log('Empate!')
            console.log(`Escolha do Usuário: ${escolhaUsuario}\nEscolha do Computador: ${escolhaComputador}`)
        } else {
            if (
                (escolhaUsuario.toLowerCase() === 'pedra' && escolhaComputador.toLowerCase() === 'tesoura' ) || (escolhaUsuario.toLowerCase() === 'papel' && escolhaComputador.toLowerCase() === 'pedra') || (escolhaUsuario.toLowerCase() === 'tesoura' && escolhaComputador.toLowerCase() === 'papel')
            ){
                console.log('Você venceu!')
                console.log(`Escolha do Usuário: ${escolhaUsuario}\nEscolha do Computador: ${escolhaComputador}`)
            } else {
                console.log('Você Perdeu!')
                console.log(`Escolha do Usuário: ${escolhaUsuario}\nEscolha do Computador: ${escolhaComputador}`)
            }
        }
    } catch (erro) {
        console.log('Ocorreu um erro. Tente novamente')
        perguntarUsuario()
    }
}

verificarRespostaUsuario()