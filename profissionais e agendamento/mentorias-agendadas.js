//formata a data de 2022/04/14 oara 14/04/2022
function dataF(data) {
  var dataF = new Date(data)
  var dataFormatada = dataF.toLocaleDateString('pt-br', { timeZone: 'UTC' })
  return dataFormatada
}

//pega o valor no localStorage
function getAgendamento() {
  var mentoriaAgendada = JSON.parse(localStorage.getItem('Agendamento'))
  return mentoriaAgendada
}

var tabelaAgendamento = document.getElementById('tabelaAgendamento')
var listaMentorias = getAgendamento()

//desmarca mentoria
function remover(index) {
  console.log(index)
  const agendamentos = JSON.parse(localStorage.getItem('Agendamento'))
  agendamentos.splice(index, 1)
  localStorage.setItem('Agendamento', JSON.stringify(agendamentos))
  setTimeout(() => {
    location.reload()
  }, 1000)
}

//coloca os elementos na tabela
function atualizarAgendamento() {
  if (listaMentorias[0] == null) {
    tabelaAgendamento.innerHTML = `<tr><td class="text-muted" id="btnDesmarcar">Nenhuma mentoria agendada</td></tr>`
  } else {
    for (var i = 0; i < listaMentorias.length; i++) {
      var linha = document.createElement('tr')
      var celulaMentor = document.createElement('td')
      var celulaData = document.createElement('td')
      var celulaHora = document.createElement('td')
      var celulaDesmarcar = document.createElement('td')
      // celulaMentor.innerHTML = `${getAgendamento().mentor}`
      celulaMentor.innerHTML = listaMentorias[i].mentor
      celulaData.innerHTML = `${dataF(listaMentorias[i].dia)}`
      celulaHora.innerHTML = `${listaMentorias[i].horario}`
      celulaDesmarcar.innerHTML =
        `<button type="button"
      class="btn btn-light btn-sm botao-agendar"
      data-toggle="modal"
      data-target="#confirmado"
      data-dismiss="modal"
      onclick="remover(` +
        i +
        `)">Desmarcar mentoria</button>`
      linha.appendChild(celulaMentor)
      linha.appendChild(celulaData)
      linha.appendChild(celulaHora)
      linha.appendChild(celulaDesmarcar)
      tabelaAgendamento.appendChild(linha)
    }
  }
}
window.addEventListener('load', atualizarAgendamento())
