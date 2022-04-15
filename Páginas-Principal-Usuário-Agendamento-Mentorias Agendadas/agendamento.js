// página agendamento mentor
var data = document.getElementById('data')
var hora = document.getElementById('hora')
var btnAgendar = document.getElementById('btnAgendar')
var btnConfirmar = document.getElementById('btnConfirmar')
var btnMentoria = document.getElementById('btnMentoria')
var nomeMentor = document.getElementById('nomeMentor')
var dataMentoria = document.getElementById('dataMentoria')
var horaMentoria = document.getElementById('horaMentoria')

// coloca a informação do agendamento no pop-up para confirmação
btnConfirmar.addEventListener('click', function infoAgendamento() {
  const infoMentoria = {
    dia: data.value,
    horario: hora.value
  }
  dataF = new Date(infoMentoria.dia)
  dataFormatada = dataF.toLocaleDateString('pt-br', { timeZone: 'UTC' })
  dataMentoria.innerHTML = `<div class="modal-body">Data: ${dataFormatada}</div>`
  horaMentoria.innerHTML = `<div class="modal-body">Hora: ${infoMentoria.horario}</div>`
})

// guarda no localStorage
btnAgendar.addEventListener('click', function mentoriaAgendada() {
  const agendamentos =
    localStorage.getItem('Agendamento') == null
      ? []
      : JSON.parse(localStorage.getItem('Agendamento'))
  const agendamentoMentoria = {
    mentor: nomeMentor.innerText,
    dia: data.value,
    horario: hora.value
  }
  agendamentos.push(agendamentoMentoria)
  localStorage.setItem('Agendamento', JSON.stringify(agendamentos))
})
