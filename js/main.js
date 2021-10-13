let email = document.querySelector(".email");
const botao = document.querySelector(".button");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const errorIcon = document.getElementById('erro-icon');
const mensagemErro = document.getElementById('mensagem-erro')

botao.addEventListener('click', function(e){
  e.preventDefault();
  
    if (email.value.match(pattern)) {
      
      mensagemErro.classList.add('valid')
      mensagemErro.classList.remove('invalid');
      email.classList.remove('invalid');
      errorIcon.classList.remove('invalid');
      errorIcon.classList.add('valid')

    } else{
      mensagemErro.classList.add('invalid')
      mensagemErro.classList.remove('valid');
      email.classList.add('invalid')
      errorIcon.classList.remove('valid');
      errorIcon.classList.add('invalid')
    }

})