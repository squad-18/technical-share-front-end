let btnEnviarMsg = document.getElementById('btnEnviarMsg');
let inputMensagem = document.getElementById('enviar-msg').value;



btnEnviarMsg.onclick = function enviarMensagem(){
     const tag = document.createElement('p');
    tag.appendChild(document.createTextNode(document.getElementById('enviar-msg').value));    
    document.getElementById('inicio').appendChild(tag);
}





