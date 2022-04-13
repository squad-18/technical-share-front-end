$(document).ready(function () {
  $('#btnSalvar').click(function () {
    window.localStorage.setItem('Agendamento', JSON.stringify())
  })

  function getAgendamento() {
    var agendamento = JSON.parse(window.localStorage.getItem('Agendamento'))
  }

  getAgendamento()
})
