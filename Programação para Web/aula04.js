var incrementar = document.getElementById("btn-incrementar")
var decrementar = document.getElementById("btn-decrementar")

var adicionar_lista = document.getElementById("adicionar-lista")
var resetar = document.getElementById("reset-btns")

var resultado_calculo = document.getElementById("resultado-calculo")
var contador = 0

incrementar.onclick = function(){
    contador++
    console.log(contador)
    resultado_calculo.textContent = contador
}

decrementar.onclick = function(){
    if(contador > 0){
        contador--
        console.log(contador)
        resultado_calculo.textContent = contador
    } else
        window.alert('Não é possível decrementar o número 0')
}