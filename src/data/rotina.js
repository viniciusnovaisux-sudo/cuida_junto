// Rotina simulada de um dia. Tipos: remedio, refeicao, higiene.
// "naoPodeAtrasar" marca horários rígidos, como alguns remédios.

export const dataDeHoje = 'Segunda, 16 de novembro'

export const rotinaDeHoje = [
  {
    id: 'remedio-manha',
    hora: '07:30',
    tipo: 'remedio',
    titulo: 'Remédio da manhã',
    detalhe: '1 comprimido branco, com o café',
    naoPodeAtrasar: true,
    estado: 'feito',
    feitoPor: 'Márcia',
    feitoAs: '07:34',
  },
  {
    id: 'agua',
    hora: '11:00',
    tipo: 'higiene',
    titulo: 'Oferecer água',
    detalhe: 'Meio copo, com espessante',
    naoPodeAtrasar: false,
    estado: 'atrasado',
  },
  {
    id: 'almoco',
    hora: '12:30',
    tipo: 'refeicao',
    titulo: 'Almoço',
    detalhe: 'Comida pastosa, sem açúcar',
    naoPodeAtrasar: false,
    estado: 'feito',
    feitoPor: 'Márcia',
    feitoAs: '12:45',
  },
  {
    id: 'remedio-pressao',
    hora: '14:00',
    tipo: 'remedio',
    titulo: 'Remédio da pressão',
    detalhe: '1 comprimido com água, depois do almoço.',
    naoPodeAtrasar: true,
    estado: 'a-fazer',
  },
  {
    id: 'higiene-tarde',
    hora: '16:00',
    tipo: 'higiene',
    titulo: 'Higiene e troca',
    detalhe: 'Trocar a fralda e passar a pomada',
    naoPodeAtrasar: false,
    estado: 'a-fazer',
  },
  {
    id: 'jantar',
    hora: '18:30',
    tipo: 'refeicao',
    titulo: 'Jantar',
    detalhe: 'Comida pastosa, sem açúcar',
    naoPodeAtrasar: false,
    estado: 'a-fazer',
  },
  {
    id: 'remedio-noite',
    hora: '20:00',
    tipo: 'remedio',
    titulo: 'Remédio da noite',
    detalhe: '2 comprimidos, antes de deitar',
    naoPodeAtrasar: true,
    estado: 'a-fazer',
  },
]

// Plano que a pessoa substituta recebe (quarta-feira, dia da cuidadora contratada)
export const dataDoPlano = 'Quarta, 18 de novembro'

export const horariosDoPlano = [
  {
    hora: '08:00',
    titulo: 'Remédio da manhã',
    detalhe: '1 comprimido branco, com o café',
    naoPodeAtrasar: true,
  },
  {
    hora: '10:00',
    titulo: 'Higiene e troca',
    detalhe: 'Trocar a fralda e passar a pomada',
    naoPodeAtrasar: false,
  },
  {
    hora: '12:30',
    titulo: 'Almoço',
    detalhe: 'Comida pastosa, sem açúcar',
    naoPodeAtrasar: false,
  },
  {
    hora: '14:00',
    titulo: 'Remédio da pressão',
    detalhe: '1 comprimido com água',
    naoPodeAtrasar: true,
  },
  {
    hora: '16:00',
    titulo: 'Higiene e troca',
    detalhe: 'Trocar a fralda',
    naoPodeAtrasar: false,
  },
]
