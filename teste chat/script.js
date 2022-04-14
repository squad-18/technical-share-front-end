let btnEnviarMsg = document.getElementById('btnEnviarMsg');
let inputMensagem = document.getElementById('enviar-msg').value;



btnEnviarMsg.onclick = function enviarMensagem(){
     const tag = document.createElement('p');
    tag.appendChild(document.createTextNode(document.getElementById('enviar-msg').value));    
    document.getElementById('inicio').appendChild(tag);
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode !== 13) return;
    // Aqui seu código
})

document.addEventListener('keydown', function(event) {
    if (event.keyCode !== 13) return;
    btnEnviarMsg.onclick = function enviarMensagem(){
        const tag = document.createElement('p');
       tag.appendChild(document.createTextNode(document.getElementById('enviar-msg').value));    
       document.getElementById('inicio').appendChild(tag);
   }
})


/*
btnEnviarMsg.onclick = function enviarMensagem(){
    var mensagem = document.createElement('p')
    mensagem.textContent = inputMensagem;
    elementoPai.appendChild(mensagem);
}*/

/* 'let elementoPai = document.body;
function enviarMensagem(){
    var mensagem = document.createElement('p')
    mensagem.textContent = inputMensagem;
    elementoPai.appendChild(mensagem);
}*/

/*
btnEnviarMsg.addEventListener('click',function enviarMensagem(){    
    var mensagem = document.createElement('p')
    mensagem.textContent = inputMensagem;
    elementoPai.appendChild(mensagem);
    
} )*/




