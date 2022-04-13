// $(document).ready(function () {
//   $('#btnSalvar').click(function () {
//     window.localStorage.setItem('Agendamento', JSON.stringify())
//   })

//   function getAgendamento() {
//     var agendamento = JSON.parse(window.localStorage.getItem('Agendamento'))
//   }

//   getAgendamento()
// })

var tabelaAgendamento = document.getElementById('tabelaAgendamento')

var listaAgendamentos = []
var mentoriaExemplo = {
  mentor: 'Yago',
  data: '14/04/2022',
  hora: '11:00'
}

listaAgendamentos.push(mentoriaExemplo)

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
    linha.appendChild(celulaMentor)
    linha.appendChild(celulaData)
    linha.appendChild(celulaHora)
    linha.appendChild(celulaDesmarcar)
    tabelaAgendamento.appendChild(linha)
  }
}

window.addEventListener('load', atualizarAgendamento())

// não esta funcionando
