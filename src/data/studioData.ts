export interface ServiceItem {
  id: string;
  title: string;
  category: 'alongamento' | 'cuidados' | 'arte' | 'manutencao';
  description: string;
  highlights: string[];
  duration: string;
  startingPrice?: string;
  recommendedFor: string;
  whatsappMessage: string;
}

export interface PortfolioItem {
  id: string;
  src: string;
  title: string;
  category: 'alongamento' | 'blindagem' | 'decoracao' | 'classico';
  categoryLabel: string;
  technique: string;
  description: string;
  whatsappMessage: string;
}

export interface CourseItem {
  id: string;
  title: string;
  modality: string;
  level: string;
  targetAudience: string;
  description: string;
  modules: string[];
  whatsIncluded: string[];
  spotsStatus: string;
  whatsappMessage: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  serviceMentioned?: string;
}

export const STUDIO_CONFIG = {
  brandName: "Rachel Caetano",
  brandSubtitle: "Nail Designer",
  city: "Belo Horizonte - MG",
  fullAddress: "Atendimento com hora marcada em Belo Horizonte, MG",
  neighborhood: "Belo Horizonte / MG",
  phoneDisplay: "(31) Atendimento Exclusivo",
  whatsappUrl: "https://wa.me/message/3VLZFGNH7M4CL1",
  whatsappMessageBase: "Olá, Rachel! Gostaria de agendar um horário para fazer minhas unhas no seu studio.",
  instagramUrl: "https://www.instagram.com/rachelcaetanonail?stkn=dmwyOXpjOTFpNW0=",
  instagramHandle: "@rachelcaetanonail",
  googleProfileUrl: "https://www.google.com.br/search?kgmid=/g/11y_t82hlf&hl=pt-BR&q=Rachel+Caetano+Nail+designer+BH&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/osrp/m1/3&kgs=bcea51efd37be5eb&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/osrp/m1/3",
  googleRating: 5.0,
  googleReviewCount: "Avaliações 5 Estrelas",
  tagline: "Realçando sua beleza através de unhas impecáveis, delicadas e sofisticadas.",
  footerQuote: "Beleza, cuidado e sofisticação em cada detalhe.",
  officialPortrait: "/assets/rachel_portrait.jpg",
  logoImage: "/assets/logo.jpg",
  openingHours: [
    { days: "Terça a Sexta", hours: "09:00 às 19:00" },
    { days: "Sábado", hours: "09:00 às 17:00" },
    { days: "Domingo e Segunda", hours: "Fechado para cursos e descanso" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "alongamento-fibra-gel",
    title: "Alongamento em Fibra de Vidro / Gel",
    category: "alongamento",
    description: "Alongamento estruturado com curvatura C refinada e espessura ultrafina. Proporciona aspecto de unha natural, alta resistência e elegância sem exageros.",
    highlights: ["Curvatura C milimétrica", "Ponto de tensão imperceptível", "Alta durabilidade"],
    duration: "Aprox. 2h30",
    startingPrice: "Consulte opções",
    recommendedFor: "Quem deseja unhas longas, delicadas e resistentes com acabamento sofisticado.",
    whatsappMessage: "Olá Rachel! Gostaria de agendar o serviço de Alongamento em Gel/Fibra. Quais horários você tem disponíveis?"
  },
  {
    id: "blindagem-gel",
    title: "Blindagem de Diamante & Nivelamento",
    category: "cuidados",
    description: "Técnica focada em fortalecer e proteger o crescimento da sua unha natural através de uma camada fina de gel estruturante, evitando quebras e descamações.",
    highlights: ["Preserva a lâmina natural", "Acabamento slim", "Estimula crescimento saudável"],
    duration: "Aprox. 1h30",
    startingPrice: "Consulte opções",
    recommendedFor: "Unhas naturais frágeis ou para quem quer manter o comprimento sem alongar.",
    whatsappMessage: "Olá Rachel! Quero agendar a Blindagem de Unhas Naturais. Como funciona a sua agenda?"
  },
  {
    id: "esmaltacao-gel",
    title: "Esmaltação em Gel de Longa Duração",
    category: "cuidados",
    description: "Aplicação de esmalte em gel com cura UV/LED. Brilho espelhado que não descasca, não perde o brilho e dura de 15 a 21 dias impecável.",
    highlights: ["Brilho espelhado contínuo", "Secagem instantânea", "Zero lascas por até 3 semanas"],
    duration: "Aprox. 1h15",
    startingPrice: "Consulte opções",
    recommendedFor: "Mulheres práticas que precisam de unhas perfeitas em viagens e no dia a dia.",
    whatsappMessage: "Olá Rachel! Tenho interesse em agendar a Esmaltação em Gel. Poderia me enviar os horários disponíveis?"
  },
  {
    id: "manutencao-preventiva",
    title: "Manutenção & Correção Estrutural",
    category: "manutencao",
    description: "Reposição de gel, realinhamento de simetria, lixamento técnico e nova selagem para garantir a saúde e beleza contínua das suas unhas.",
    highlights: ["Higienização profunda", "Prevenção de infiltrações", "Ajuste milimétrico do formato"],
    duration: "Aprox. 2h00",
    startingPrice: "Consulte opções",
    recommendedFor: "Clientes com alongamento a cada 20 a 28 dias.",
    whatsappMessage: "Olá Rachel! Gostaria de agendar a manutenção do meu alongamento. Qual o próximo horário vago?"
  },
  {
    id: "nail-art-minimalista",
    title: "Nail Art Sofisticada & Francesa Reversa",
    category: "arte",
    description: "Designs exclusivos e minimalistas, traços finos de alto padrão, francesa reversa com glitter delicado, baby boomer e aplicações sutis.",
    highlights: ["Traços refinados feitos à mão", "Estilo clean girl / minimal luxury", "Pigmentos e glitters nobres"],
    duration: "Aprox. +30min",
    startingPrice: "Personalizado",
    recommendedFor: "Noivas, formandas ou quem ama detalhes artísticos discretos e requintados.",
    whatsappMessage: "Olá Rachel! Gostaria de fazer uma Nail Art sofisticada/Francesa Reversa. Como posso agendar?"
  },
  {
    id: "spa-cuticulagem-russa",
    title: "Cuticulagem Combinada & Cuidado Profundo",
    category: "cuidados",
    description: "Procedimento de manicure com brocas de precisão (técnica russa/hardware) para acabamento limpo e duradouro, seguido de hidratação botânica nutritiva.",
    highlights: ["Biossegurança total (100% esterilizado)", "Cutícula limpa e sem picotes", "Hidratação profunda"],
    duration: "Aprox. 1h00",
    startingPrice: "Consulte opções",
    recommendedFor: "Quem valoriza uma cutícula uniforme e saudável sem agressão à pele.",
    whatsappMessage: "Olá Rachel! Gostaria de agendar a Cuticulagem Combinada com tratamento. Quais dias você atende?"
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "work-1",
    src: "/assets/work_1.jpg",
    title: "Alongamento com Francesa Reversa & Brilho Sutil",
    category: "alongamento",
    categoryLabel: "Alongamento & Francesa",
    technique: "Alongamento em Gel com encapsulado fino e reflexos dourados delicados",
    description: "Acabamento de alto padrão com borda livre simétrica, brilho translúcido e encaixe perfeito na cutícula.",
    whatsappMessage: "Olá Rachel! Amei esse trabalho da foto 1 (Francesa Reversa com brilho) e gostaria de fazer igual! Quando tem horário?"
  },
  {
    id: "work-2",
    src: "/assets/work_2.jpg",
    title: "Nude Sofisticado com Formato Amendoado",
    category: "classico",
    categoryLabel: "Clássico Sofisticado",
    technique: "Alongamento estruturado em tom nude clássico com simetria almond",
    description: "A essência da elegância atemporal. Linhas harmônicas que alongam os dedos com extrema naturalidade.",
    whatsappMessage: "Olá Rachel! Me apaixonei pelo modelo nude amendoado do seu portfólio (foto 2). Como faço para agendar?"
  },
  {
    id: "work-3",
    src: "/assets/work_3.jpg",
    title: "Curvatura Impecável & Estrutura Slim",
    category: "alongamento",
    categoryLabel: "Estrutura & Curvatura",
    technique: "Técnica de nivelamento avançado com espessura milimétrica de cartão",
    description: "Demonstração de precisão técnica: curvatura harmônica, ausência de excesso de produto e resistência superior.",
    whatsappMessage: "Olá Rachel! Adorei a naturalidade e a curvatura da foto 3 do seu portfólio. Gostaria de agendar!"
  },
  {
    id: "work-4",
    src: "/assets/work_4.jpg",
    title: "Esmaltação Perfeita & Cutícula Alinhada",
    category: "blindagem",
    categoryLabel: "Blindagem & Esmaltação",
    technique: "Cuticulagem de precisão combinada com esmaltação em gel rente à cutícula",
    description: "Acabamento microscópico sem manchas, com contorno limpo que prolonga o intervalo de crescimento visível.",
    whatsappMessage: "Olá Rachel! Vi a foto 4 do seu trabalho com acabamento impecável e quero marcar meu horário."
  }
];

export const COURSES: CourseItem[] = [
  {
    id: "curso-iniciacao-pro",
    title: "Formação Profissional do Zero ao Alto Padrão",
    modality: "Presencial VIP (Turmas Reduzidas ou Individual)",
    level: "Iniciante ao Intermediário",
    targetAudience: "Para quem deseja ingressar na carreira de Nail Designer com técnicas modernas e conquistar independência financeira.",
    description: "Aprenda a construir unhas resistentes, finas e naturais com método passo a passo testado e validado em mesa de atendimento real.",
    modules: [
      "Biossegurança, anatomia e patologias da lâmina ungueal",
      "Química dos produtos, aderência correta e zero descolamentos",
      "Preparação mecânica e cuticulagem combinada de precisão",
      "Aplicação estruturada: ponto de tensão e controle de produto",
      "Lixamento técnico simétrico e curvatura natural sem quebras",
      "Atendimento ao cliente, precificação justa e captação no Instagram"
    ],
    whatsIncluded: [
      "Apostila técnica completa ilustrada",
      "Prática em modelo real supervisionada",
      "Certificado de Conclusão Profissional",
      "Suporte pós-curso direto com a Rachel",
      "Lista de fornecedores de confiança e materiais"
    ],
    spotsStatus: "Vagas Limitadas / Consulte Próxima Turma",
    whatsappMessage: "Olá Rachel! Tenho muito interesse na Formação Profissional em Nail Design. Pode me enviar valores e próximas datas de turma?"
  },
  {
    id: "curso-aperfeicoamento-vip",
    title: "Imersão VIP: Aperfeiçoamento & Simetria de Luxo",
    modality: "Exclusivo 100% Individual (1 aluna por dia)",
    level: "Avançado para profissionais atuantes",
    targetAudience: "Nail Designers que já atendem e desejam elevar o valor do seu serviço, diminuir tempo de mesa e dominar acabamentos ultrafinos.",
    description: "Um dia intensivo focado em diagnosticar seus gargalos, corrigir vícios de mesa e dominar a estética de alto padrão que atrai clientes dispostas a pagar mais.",
    modules: [
      "Diagnóstico de mesa e otimização de tempo sem perder qualidade",
      "Técnicas de Francesa Reversa sem degrau e encapsulados finos",
      "Controle de produto sem lixamento excessivo (técnica no-file)",
      "Fotografia e posicionamento visual para valorizar seu portfólio"
    ],
    whatsIncluded: [
      "Atenção 100% dedicada da Rachel Caetano",
      "Treinamento prático intensivo",
      "Certificado VIP de Especialização",
      "Mentoria de 30 dias via WhatsApp para tirar dúvidas"
    ],
    spotsStatus: "Agendamento Individual sob consulta",
    whatsappMessage: "Olá Rachel! Já sou Nail Designer e quero fazer o Aperfeiçoamento VIP individual com você. Quais datas tem disponíveis?"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Camila Ribeiro",
    rating: 5,
    date: "Avaliação recente no Google",
    comment: "A Rachel é a melhor Nail Designer de BH! O trabalho dela é impecável, super delicado e dura muito tempo sem nenhuma infiltração. O espaço é aconchegante, cheiroso e ela é extremamente atenciosa com a saúde das nossas unhas.",
    verified: true,
    serviceMentioned: "Alongamento em Gel"
  },
  {
    id: "rev-2",
    author: "Juliana Mendes",
    rating: 5,
    date: "Avaliação recente no Google",
    comment: "Estava com as unhas muito frágeis depois de experiências ruins em outros lugares. A Rachel fez a blindagem com tanto cuidado que hoje minhas unhas estão fortes e lindas. Não troco por nada!",
    verified: true,
    serviceMentioned: "Blindagem & Cuidados"
  },
  {
    id: "rev-3",
    author: "Fernanda Silveira",
    rating: 5,
    date: "Avaliação recente no Google",
    comment: "Pontualidade britânica, higiene impecável (tudo esterilizado na autoclave) e uma delicadeza sem igual nas mãos. O acabamento fica fininho parecendo a nossa própria unha. Nota 1000!",
    verified: true,
    serviceMentioned: "Alongamento & Nail Art"
  },
  {
    id: "rev-4",
    author: "Mariana Alvim",
    rating: 5,
    date: "Avaliação recente no Google",
    comment: "Profissional maravilhosa! Fiz o curso com ela e superou todas as expectativas. Ela ensina sem esconder nenhum segredo e me deu total confiança para começar a atender minhas próprias clientes.",
    verified: true,
    serviceMentioned: "Aluna do Curso Profissional"
  }
];

export const FAQS = [
  {
    question: "Quanto tempo dura o alongamento e com que frequência devo fazer a manutenção?",
    answer: "Com os cuidados corretos, o alongamento dura continuamente com manutenções periódicas a cada 20 a 28 dias. Esse intervalo é fundamental para reequilibrar o ponto de tensão e garantir a integridade da sua lâmina natural."
  },
  {
    question: "O alongamento danifica a unha natural?",
    answer: "Não! O que danifica as unhas é a remoção forçada em casa ou a aplicação inadequada com produtos de má procedência. No studio, priorizamos a saúde biológica da unha com técnicas seguras e remoção química ou mecânica controlada."
  },
  {
    question: "Como funciona o agendamento de horário?",
    answer: "Os agendamentos são realizados com antecedência através do WhatsApp. Assim garantimos um horário exclusivo e sem filas para você desfrutar de um atendimento calmo e personalizado."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos Pix, cartões de crédito e débito, e dinheiro. Consulte facilidades para pacotes de manutenção e cursos."
  },
  {
    question: "Como posso saber mais sobre os cursos e turmas?",
    answer: "Basta clicar no botão 'Quero saber mais' na seção de Cursos ou nos chamar no WhatsApp. Enviaremos todo o cronograma detalhado, lista de materiais e datas disponíveis."
  }
];
