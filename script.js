$(document).ready(function() {
    let contador = 0
    $('form').on('submit', function(e){
        e.preventDefault()
        contador += 1
        if (contador <= 10) {
            const text = $('#txt').val()
            $('ul').append(`<li>${text}</li>`)
        } else {
            window.alert('Limite de tarefas atingida!')
        }
        for (let item of $('li')) {

                $(item).on('click', function() {
                    $(item).css('text-decoration', 'none')
                    $(item).css('text-decoration', 'line-through')
                    console.log(tr)
            })
        }
    })
})