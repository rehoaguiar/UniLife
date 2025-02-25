// alert("Olá, mundo!")

console.log("Olá, mundo!");

// variáveis
var animal = "gato";
console.log(animal)

// let
let nome = "Fulano"
console.log(nome)

// const
const valor = 10
// const valor = 20

console.log(valor)

var numero = 10
console.log(numero)

// Template Literal
console.log(`O ${animal} possui ${valor} meses de vida`);

// Verificador
console.log(typeof animal)
console.log(typeof numero)

// comparação
console.log(5 == "5") // True -> Igualdade (Ignorando o tipo e levando em consideração o valor)
console.log(5 === "5") // Falso -> Extritamente Igual (Leva em consideração o valor e o tipo)

console.log(5 != "5") // Desigualdade (Ignorando o tipo e levando em consideração o valor)
console.log(5 !== "5") // Extritamente Desigual (Leva em consideração o valor e o tipo)

// dads de entrada (input)
var nomeCompleto = window.prompt("Digite o nome: ")
var idade = parseFloat(window.prompt("Digite a idade: ")) // Mudamos o tipo da informação recebida para float

console.log(typeof idade); // Tudo que vem do navegador será tratado como string

console.log(`Olá ${nomeCompleto}, você tem ${idade} anos`);