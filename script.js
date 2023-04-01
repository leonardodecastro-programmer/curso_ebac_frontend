$(document).ready(function() {
    tr = true
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
            /* $(item).on('click', function() {
            tr == false ? (
                tr = true,
                $(item).css('text-decoration', 'none')
            ) : (
                tr = false,
                $(item).css('text-decoration', 'line-through')
            )
            }) */

                $(item).on('click', function() {
                    tr == true ? (tr = false) : (tr = true)
                if (tr == false) {
                    $(item).css('text-decoration', 'none')
                } else {
                    $(item).css('text-decoration', 'line-through')
                    console.log(tr)
                }
            })
        }
    })
})