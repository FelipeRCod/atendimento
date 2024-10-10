const botao = document.getElementById("gerasenha")
const idade = document.getElementById("lista")
const atender = document.getElementById("atender")

const fila = []

botao.addEventListener("click", (e) => {
    e.preventDefault()
    const idade = document.getElementById("idade").value
   
    if (idade >= 65) {
        inicioFila(idade)
    } else{
        finalFila(idade)
    }
})

function inicioFila(idade) {
    fila.unshift(idade)
    exibir()
}
function finalFila(idade) {
    fila.push(idade)
    exibir()
}

function exibir() {
lista.innerHTML = fila
}

atender.addEventListener("click", (e) => {
    e.preventDefault()
    retirarFila(fila)

})

function retirarFila(fila) {
    fila.shift()
    exibir()}
