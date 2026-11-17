// Semana simulada da família.

export const periodoDaSemana = '16 a 22 de novembro'

export const tarefasSemResponsavel = [
  {
    id: 'consulta',
    titulo: 'Levar à consulta do neurologista',
    quando: 'Quarta, 9h',
  },
  {
    id: 'tarde-sexta',
    titulo: 'Ficar com ela à tarde',
    quando: 'Sexta, 13h às 18h',
  },
  {
    id: 'banho-domingo',
    titulo: 'Dar o banho da manhã',
    quando: 'Domingo, 8h',
  },
]

// "tarefas" liga cada dia às tarefas sem responsável daquele dia
export const diasDaSemana = [
  { dia: 'Seg 16', quem: 'Márcia, o dia todo', tarefas: [] },
  { dia: 'Ter 17', quem: 'Márcia de manhã, Ana à tarde', tarefas: [] },
  {
    dia: 'Qua 18',
    quem: 'Cida das 8h às 17h, Márcia à noite',
    tarefas: ['consulta'],
  },
  { dia: 'Qui 19', quem: 'Márcia, o dia todo', tarefas: [] },
  { dia: 'Sex 20', quem: 'Márcia de manhã', tarefas: ['tarde-sexta'] },
  { dia: 'Sáb 21', quem: 'Paulo, o dia todo', tarefas: [] },
  { dia: 'Dom 22', quem: 'Ana e Márcia', tarefas: ['banho-domingo'] },
]
