var btnEnviarMsg = document.getElementById('btnEnviarMsg');
var inputMensagem = document.getElementsByClassName('enviar-mensagem-input').value;
var elementoPai = document.body;


btnEnviarMsg.addEventListener('click',function enviarMensagem(){
    
    var mensagem = document.createElement('p')
    mensagem.textContent = inputMensagem;
    elementoPai.appendChild(mensagem);
    
} )




