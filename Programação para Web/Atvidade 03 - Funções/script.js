const inputTexto = document.getElementById("inputTexto");
const tabela = document.getElementById("corpoTabela");
const select = document.getElementById("escolherItem");

function adicionarItem() {
    const valor = inputTexto.value.trim();

    if (valor === "") {
        alert("Digite um valor válido!");
        return;
    }

    // Criar nova linha e célula
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

    inputTexto.value = "";
}

inputTexto.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        adicionarItem();
    }
});

function encontrarLinhaPorTexto(texto) {
    const linhas = tabela.getElementsByTagName("tr");
    for (let linha of linhas) {
        if (linha.cells[0].textContent === texto) {
            return linha;
        }
    }
    return null;
}

function marcarItem() {
    const textoSelecionado = select.value;
    const linha = encontrarLinhaPorTexto(textoSelecionado);

    if (linha) {
        linha.cells[0].classList.add("marcado");
    }
}

function desmarcarItem() {
    const textoSelecionado = select.value;
    const linha = encontrarLinhaPorTexto(textoSelecionado);

    if (linha) {
        const celula = linha.cells[0];
        if (!celula.classList.contains("marcado")) {
            alert("Este item já está desmarcado.");
        } else {
            celula.classList.remove("marcado");
        }
    }
}

function removerItem() {
    const textoSelecionado = select.value;
    const linha = encontrarLinhaPorTexto(textoSelecionado);

    if (linha) {
        tabela.removeChild(linha);
    }

    // Remover do select
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === textoSelecionado) {
            select.remove(i);
            break;
        }
    }
}
