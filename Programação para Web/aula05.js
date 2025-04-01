// Preço do combustível
const precoGasolina = 5.79;
const precoEtanol = 4.29;
const precoDiesel = 6.19;

function atualizarValor(){
    let tipo = document.getElementById("combustivel").value;
    let litros = parseFloat(document.getElementById("litros").value);
    let precoPorLitro;

    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina
            break;

        case "etanol":
            precoPorLitro = precoEtanol
            break;

        case "diesel":
            precoPorLitro = precoDiesel
            break;

        default:
            document.getElementById("resultado").textContent = "Inválido";
            return
    }

    calcularValorAbastecimento(precoPorLitro, litros)
}

function calcularValorAbastecimento(precoCombustivel, litros){
    let valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = valorTotal;

}

document.getElementById("litros").addEventListener("input", atualizarValor)
document.getElementById("combustivel").addEventListener("change", atualizarValor)