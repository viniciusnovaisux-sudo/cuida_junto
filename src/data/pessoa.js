// Dados simulados. Nenhuma informação aqui é de uma pessoa real.

export const pessoaCuidada = {
  nome: 'Dona Lourdes',
  idade: 79,
  atencao: [
    'Só comida pastosa. Líquidos sempre com espessante.',
    'Alergia a dipirona.',
  ],
  oQueAcalma: 'Rádio com músicas antigas e ficar perto da janela.',
  oQueEvitar:
    'Não contrarie quando ela perguntar pela mãe. Não mude a poltrona de lugar.',
}

export const contatos = [
  {
    id: 'marcia',
    nome: 'Márcia, filha',
    papel: 'Cuidadora principal',
    telefone: '+5511999990000',
    rotulo: 'Ligar',
    principal: true,
  },
  {
    id: 'samu',
    nome: 'SAMU',
    papel: 'Emergência',
    telefone: '192',
    rotulo: 'Ligar 192',
    principal: false,
  },
]

// Quem está usando o app nesta demonstração
export const usuarioAtual = 'Márcia'
