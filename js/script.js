const email = document.querySelector('#email')
const contextError = document.querySelector('#context-error')

let Verificar = function(){
    if(email.value === ''){
        contextError.style.display = 'block'
        email.classList.add('email-error')
    }
}

let submit = document.querySelector('#submit')
submit.addEventListener('click', Verificar)

email.addEventListener('keydown', function(){
    if(email.classList.contains('email-error')){
        email.classList.remove('email-error')
        contextError.style.display = 'none'
    }
})