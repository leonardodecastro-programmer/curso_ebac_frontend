let form = document.querySelector('form')
let a = document.getElementById('txta')
let b = document.getElementById('txtb')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (b.value < a.value) {
        window.alert('[ERRO] seu formulário é inválido')
    } else {
        window.alert('seu formulário foi enviado')
    }
})
