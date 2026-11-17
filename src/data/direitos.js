// Direitos e apoios para quem cuida de uma pessoa idosa com demência.
// Informações levantadas em 16/11/2026. As regras podem mudar:
// cada item traz a fonte para conferência.

export const direitos = [
  {
    id: 'bpc',
    titulo: 'Benefício de Prestação Continuada (BPC)',
    descricao:
      'Um salário mínimo por mês para pessoas com 65 anos ou mais e baixa renda.',
    onde: 'CRAS e Meu INSS',
    comoBuscar:
      'Faça ou atualize o Cadastro Único no CRAS. Depois, peça o benefício pelo site ou aplicativo Meu INSS. Não é preciso ter contribuído para o INSS.',
    fonte: {
      nome: 'Portal gov.br',
      url: 'https://www.gov.br/pt-br/servicos/solicitar-beneficio-assistencial-ao-idoso',
    },
  },
  {
    id: 'remedios',
    titulo: 'Remédios para Alzheimer pelo SUS',
    descricao: 'Remédios gratuitos, com receita e laudo médico.',
    onde: 'Unidade de saúde',
    comoBuscar:
      'Leve a receita e o laudo do médico à unidade de saúde. A equipe informa onde retirar os remédios na sua cidade.',
    fonte: {
      nome: 'Ministério da Saúde',
      url: 'https://www.gov.br/saude/pt-br',
    },
  },
  {
    id: 'melhor-em-casa',
    titulo: 'Melhor em Casa',
    descricao: 'Equipe de saúde em casa para quem não consegue sair.',
    onde: 'Unidade de saúde ou hospital',
    comoBuscar:
      'Não existe inscrição direta. Peça o encaminhamento na unidade básica de saúde ou no hospital que acompanha a pessoa.',
    fonte: {
      nome: 'Ministério da Saúde',
      url: 'https://www.gov.br/saude/pt-br/composicao/saes/melhor-em-casa',
    },
  },
  {
    id: 'centro-dia',
    titulo: 'Centro-Dia',
    descricao: 'Cuidado durante o dia e apoio para a família.',
    onde: 'CRAS ou CREAS',
    comoBuscar:
      'Procure o CRAS ou o CREAS mais perto. O serviço é gratuito, mas não existe em todas as cidades.',
    fonte: {
      nome: 'Ministério do Desenvolvimento e Assistência Social',
      url: 'https://www.gov.br/mds/pt-br',
    },
  },
  {
    id: 'acrescimo-25',
    titulo: 'Acréscimo de 25% na aposentadoria',
    descricao: 'Só para aposentadoria por incapacidade permanente.',
    onde: 'Meu INSS',
    comoBuscar:
      'Vale apenas para quem recebe aposentadoria por incapacidade permanente e precisa de ajuda permanente de outra pessoa. O pedido é feito pelo Meu INSS e passa por perícia médica.',
    fonte: {
      nome: 'INSS',
      url: 'https://www.gov.br/inss/pt-br',
    },
  },
  {
    id: 'curatela',
    titulo: 'Procuração e curatela',
    descricao: 'Como responder legalmente pela pessoa cuidada.',
    onde: 'Cartório ou Defensoria Pública',
    comoBuscar:
      'A procuração é feita em cartório e só vale enquanto a pessoa ainda consegue decidir por si. Quando ela já não consegue, o caminho é a curatela, que depende de processo na Justiça com laudo médico. Quem não pode pagar advogado pode procurar a Defensoria Pública. Cada caso precisa de orientação jurídica.',
    fonte: {
      nome: 'Defensoria Pública da União',
      url: 'https://www.dpu.def.br',
    },
  },
]
