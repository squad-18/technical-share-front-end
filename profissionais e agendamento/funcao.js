// $(document).ready(function () {
//   $('#btnAgendarYago').click(function () {
//     window.localStorage.setItem('Agendamento Yago', JSON.stringify())
//   })

//   function getAgendamento() {
//     var mentoriaAgendada = JSON.parse(
//       window.localStorage.getItem('Agendamento Yago')
//     )
//   }

//   getAgendamento()
// })

//página lista de agendamentos
function getAgendamento() {
  var mentoriaAgendada = JSON.parse(localStorage.getItem('Agendamento'))
  return mentoriaAgendada
}

var tabelaAgendamento = document.getElementById('tabelaAgendamento')
//não funciona
var listaMentorias = []
listaMentorias.push(getAgendamento())

function atualizarAgendamento() {
  if (listaMentorias[0] == null) {
    tabelaAgendamento.innerHTML = `<tr><td class="text-muted">Nenhuma mentoria agendada</td></tr>`
  } else {
    // for (var i = 0; i < listaAgendamentos.length; i++) {
    // var linha = document.createElement('tr')
    // var celulaMentor = createElement('td')
    // var celulaData = createElement('td')
    // var celulaHora = createElement('td')
    // var celulaDesmarcar = createElement('td')
    // celulaMentor.innerHTML = `${getAgendamento().mentor}`
    // celulaData.innerHTML = `${getAgendamento().dia}`
    // celulaHora.innerHTML = `${getAgendamento().horario}`
    // celulaDesmarcar.innerHTML = `<button class="btn btn-light btn-sm botao-agendar">Desmarcar mentoria</button>`
    // linha.appendChild(celulaMentor)
    // linha.appendChild(celulaData)
    // linha.appendChild(celulaHora)
    // linha.appendChild(celulaDesmarcar)
    // tabelaAgendamento.appendChild(linha)
  }
}
window.addEventListener('load', atualizarAgendamento())
