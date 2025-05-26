const inputTexto = document.getElementById("inputTexto");
const tabelaItens = document.getElementById("tabelaItens");
const btnAdicionar =  document.getElementById("btnAdicionar");

function adicionarItem() {
    const valor = inputTexto.value.trim();

    if (valor == '') {
        alert("Por favor digite algo!")
        return;
    }

    // Criar nova linha na tabela
    const novaLinha = document.createElement("tr");
    const novaCelula = document.createElement("td");
    novaCelula.textContent = valor;
    novaLinha.appendChild(novaCelula);
    tabela.appendChild(novaLinha);

    // Adicionar item ao <select>
    const novaOpcao = document.createElement("option");
    novaOpcao.value = valor;
    novaOpcao.textContent = valor;
    select.appendChild(novaOpcao);

    // Limpar input
    inputTexto.value = "";
    inputTexto.focus();
}

function adicionarItemSelect() {
}

function marcarItem(){
}

function desmarcarItem(){
}

function removerItem(){
}

const selectItens = document.getElementById("escolherItem");