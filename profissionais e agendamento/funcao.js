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

var data = document.getElementById('data')
var hora = document.getElementById('hora')
var btnAgendar = document.getElementById('btnAgendar')
var btnConfirmar = document.getElementById('btnConfirmar')
var nomeMentor = document.getElementById('nomeMentor')
var dataMentoria = document.getElementById('dataMentoria')
var horaMentoria = document.getElementById('horaMentoria')

btnConfirmar.addEventListener('click', function infoAgendamento() {
  const infoMentoria = {
    dia: data.value,
    horario: hora.value
  }
  dataF = new Date(infoMentoria.dia)
  dataFormatada = dataF.toLocaleDateString('pt-br', { timeZone: 'UTC' })
  dataMentoria.innerText = 'Data: ' + dataFormatada
  horaMentoria.innerText = 'Hora: ' + infoMentoria.horario
})

btnAgendar.addEventListener('click', function mentoriaAgendada() {
  var agendamentoMentoria = {
    mentor: nomeMentor.innerText,
    dia: data.value,
    horario: hora.value
  }
  window.localStorage.setItem(
    'Agendamento',
    JSON.stringify(agendamentoMentoria)
  )
})

var tabelaAgendamento = document.getElementById('tabelaAgendamento')

var mentoriaAgendada = JSON.parse(window.localStorage.getItem('Agendamento'))

function atualizarAgendamento() {}

// function atualizarAgendamento() {
//   if (listaAgendamentos.length === 0) {
//     tabelaAgendamento.innerHTML =
//       '<tr><td class="text-muted">Nenhuma mentoria agendada</td></tr>'
//   } else {
//     for (var i = 0; i < listaAgendamentos.length; i++) {
//       var agendamentoMentoria = listaAgendamentos[i]
//       var linha = document.createElement('tr')
//       var celulaMentor = document.createElement('td')
//       var celulaData = document.createElement('td')
//       var celulaHora = document.createElement('td')
//       var celulaDesmarcar = document.createElement('td')
//       celulaMentor.innerText = mentoria.mentor
//       celulaData.innerText = mentoria.data
//       celulaHora.innerText = mentoria.horario
//       celulaDesmarcar.innerHTML =
//         '<button class="btn btn-light btn-sm botao-agendar">Desmarcar mentoria</button>'
//       linha.appendChild(celulaMentor)
//       linha.appendChild(celulaData)
//       linha.appendChild(celulaHora)
//       linha.appendChild(celulaDesmarcar)
//       tabelaAgendamento.appendChild(linha)
//     }
//   }
// }

window.addEventListener('load', atualizarAgendamento())
