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

btnAgendar.addEventListener('click', function mentoriaAgendada() {
  var agendamento = {
    dia: data.value,
    horario: hora.value
  }
  window.localStorage.setItem('Agendamento Yago', JSON.stringify(agendamento))
})

var tabelaAgendamento = document.getElementById('tabelaAgendamento')

var listaAgendamentos = []
var mentoriaExemplo = {
  mentor: 'Yago',
  data: '14/04/2022',
  hora: '11:00'
}

var mentoriaExemplo2 = {
  mentor: 'Bruna',
  data: '18/04/2022',
  hora: '12:00'
}

listaAgendamentos.push(mentoriaExemplo)
listaAgendamentos.push(mentoriaExemplo2)

function atualizarAgendamento() {
  if (listaAgendamentos.length === 0) {
    tabelaAgendamento.innerHTML =
      '<tr><td class="text-muted">Nenhuma mentoria agendada</td></tr>'
    return
  }
  for (var i = 0; i < listaAgendamentos.length; i++) {
    var agendamento = listaAgendamentos[i]
    var linha = document.createElement('tr')
    var celulaMentor = document.createElement('td')
    var celulaData = document.createElement('td')
    var celulaHora = document.createElement('td')
    var celulaDesmarcar = document.createElement('td')
    celulaMentor.innerText = agendamento.mentor
    celulaData.innerText = agendamento.data
    celulaHora.innerText = agendamento.hora
    celulaDesmarcar.innerHTML =
      '<button class="btn btn-light btn-sm botao-agendar">Desmarcar mentoria</button>'
    linha.appendChild(celulaMentor)
    linha.appendChild(celulaData)
    linha.appendChild(celulaHora)
    linha.appendChild(celulaDesmarcar)
    tabelaAgendamento.appendChild(linha)
  }
}

window.addEventListener('load', atualizarAgendamento())
