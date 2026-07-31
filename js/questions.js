// ~9 afirmações por arquétipo, escala Likert 1 (discordo totalmente) a 5 (concordo totalmente)
const QUESTIONS = [
  // INOCENTE
  { id: 'inc-01', archetype: 'inocente', text: 'Prefiro acreditar no melhor das pessoas, mesmo sem provas.' },
  { id: 'inc-02', archetype: 'inocente', text: 'Sinto desconforto profundo diante de conflitos abertos.' },
  { id: 'inc-03', archetype: 'inocente', text: 'Busco simplicidade e evito complicar as coisas.' },
  { id: 'inc-04', archetype: 'inocente', text: 'Tenho fé de que tudo vai se resolver no final.' },
  { id: 'inc-05', archetype: 'inocente', text: 'Evito pensar em intenções más por trás de atos das pessoas.' },
  { id: 'inc-06', archetype: 'inocente', text: 'Já fui chamado de ingênuo por confiar demais.' },
  { id: 'inc-07', archetype: 'inocente', text: 'Prefiro manter uma visão otimista mesmo diante de evidências contrárias.' },
  { id: 'inc-08', archetype: 'inocente', text: 'Tenho dificuldade em reconhecer quando alguém quer me prejudicar.' },
  { id: 'inc-09', archetype: 'inocente', text: 'Sinto que o mundo é, no fundo, um lugar seguro.' },

  // ÓRFÃO
  { id: 'orf-01', archetype: 'orfao', text: 'Frequentemente sinto que não pertenço totalmente a nenhum grupo.' },
  { id: 'orf-02', archetype: 'orfao', text: 'Tenho medo de ser abandonado pelas pessoas próximas.' },
  { id: 'orf-03', archetype: 'orfao', text: 'Me identifico com histórias de superação de adversidade.' },
  { id: 'orf-04', archetype: 'orfao', text: 'Valorizo muito ser aceito por um grupo ou comunidade.' },
  { id: 'orf-05', archetype: 'orfao', text: 'Sinto que já fui deixado de lado em momentos importantes.' },
  { id: 'orf-06', archetype: 'orfao', text: 'Costumo desconfiar de promessas de apoio incondicional.' },
  { id: 'orf-07', archetype: 'orfao', text: 'Prefiro me misturar ao grupo a me destacar sozinho.' },
  { id: 'orf-08', archetype: 'orfao', text: 'Tenho dificuldade em pedir ajuda mesmo quando preciso.' },
  { id: 'orf-09', archetype: 'orfao', text: 'Sinto empatia intensa por quem está em desvantagem.' },

  // GUERREIRO
  { id: 'gue-01', archetype: 'guerreiro', text: 'Encaro desafios como oportunidades para provar minha força.' },
  { id: 'gue-02', archetype: 'guerreiro', text: 'Tenho disciplina para persistir mesmo sob grande pressão.' },
  { id: 'gue-03', archetype: 'guerreiro', text: 'Defendo com firmeza aquilo em que acredito, mesmo sozinho.' },
  { id: 'gue-04', archetype: 'guerreiro', text: 'Detesto demonstrar fraqueza diante dos outros.' },
  { id: 'gue-05', archetype: 'guerreiro', text: 'Me sinto vivo quando enfrento um obstáculo difícil.' },
  { id: 'gue-06', archetype: 'guerreiro', text: 'Costumo agir de forma estratégica antes de impulsiva.' },
  { id: 'gue-07', archetype: 'guerreiro', text: 'Sinto necessidade de proteger quem considero vulnerável.' },
  { id: 'gue-08', archetype: 'guerreiro', text: 'Já fui descrito como alguém competitivo ou combativo.' },
  { id: 'gue-09', archetype: 'guerreiro', text: 'Prefiro agir a esperar que o problema se resolva sozinho.' },

  // CUIDADOR
  { id: 'cui-01', archetype: 'cuidador', text: 'Coloco as necessidades dos outros à frente das minhas com frequência.' },
  { id: 'cui-02', archetype: 'cuidador', text: 'Sinto satisfação profunda ao ajudar alguém em dificuldade.' },
  { id: 'cui-03', archetype: 'cuidador', text: 'Tenho dificuldade em dizer não quando alguém pede ajuda.' },
  { id: 'cui-04', archetype: 'cuidador', text: 'Me preocupo com o bem-estar dos outros mais do que com o meu.' },
  { id: 'cui-05', archetype: 'cuidador', text: 'Sinto culpa quando não consigo ajudar alguém.' },
  { id: 'cui-06', archetype: 'cuidador', text: 'Sou frequentemente procurado como o "porto seguro" de outras pessoas.' },
  { id: 'cui-07', archetype: 'cuidador', text: 'Às vezes me sinto explorado por cuidar demais dos outros.' },
  { id: 'cui-08', archetype: 'cuidador', text: 'Tenho facilidade em perceber quando alguém está sofrendo.' },
  { id: 'cui-09', archetype: 'cuidador', text: 'Sacrificaria meu conforto pessoal para poupar alguém querido.' },

  // EXPLORADOR
  { id: 'exp-01', archetype: 'explorador', text: 'Sinto necessidade constante de novidade e mudança.' },
  { id: 'exp-02', archetype: 'explorador', text: 'Rotinas fixas me deixam inquieto ou entediado rapidamente.' },
  { id: 'exp-03', archetype: 'explorador', text: 'Prefiro descobrir as coisas por experiência própria a seguir instruções.' },
  { id: 'exp-04', archetype: 'explorador', text: 'Já abandonei conforto material em busca de liberdade ou experiência.' },
  { id: 'exp-05', archetype: 'explorador', text: 'Tenho dificuldade em me comprometer com compromissos de longo prazo.' },
  { id: 'exp-06', archetype: 'explorador', text: 'Sinto que preciso constantemente redescobrir quem eu sou.' },
  { id: 'exp-07', archetype: 'explorador', text: 'Prefiro caminhos alternativos aos convencionais, mesmo com mais risco.' },
  { id: 'exp-08', archetype: 'explorador', text: 'Sinto claustrofobia emocional em ambientes muito estruturados.' },
  { id: 'exp-09', archetype: 'explorador', text: 'Valorizo mais a jornada do que o destino final.' },

  // SÁBIO
  { id: 'sab-01', archetype: 'sabio', text: 'Prefiro analisar profundamente antes de tomar qualquer decisão.' },
  { id: 'sab-02', archetype: 'sabio', text: 'Busco entender o "porquê" das coisas mais do que apenas o "como".' },
  { id: 'sab-03', archetype: 'sabio', text: 'Sou frequentemente procurado por conselhos ou orientação.' },
  { id: 'sab-04', archetype: 'sabio', text: 'Tenho dificuldade em confiar em algo sem embasamento lógico.' },
  { id: 'sab-05', archetype: 'sabio', text: 'Prefiro observar e refletir a agir impulsivamente.' },
  { id: 'sab-06', archetype: 'sabio', text: 'Sinto mais conforto no mundo das ideias do que no das emoções.' },
  { id: 'sab-07', archetype: 'sabio', text: 'Valorizo profundamente a busca contínua por conhecimento.' },
  { id: 'sab-08', archetype: 'sabio', text: 'Já fui descrito como frio ou distante ao lidar com problemas emocionais.' },
  { id: 'sab-09', archetype: 'sabio', text: 'Costumo questionar a validade das informações antes de aceitá-las.' },

  // REBELDE
  { id: 'reb-01', archetype: 'rebelde', text: 'Questiono regras que me parecem arbitrárias ou injustas.' },
  { id: 'reb-02', archetype: 'rebelde', text: 'Sinto forte resistência a autoridades que exigem obediência cega.' },
  { id: 'reb-03', archetype: 'rebelde', text: 'Já fui visto como alguém difícil de controlar ou convencer.' },
  { id: 'reb-04', archetype: 'rebelde', text: 'Prefiro romper com um sistema disfuncional a tentar reformá-lo aos poucos.' },
  { id: 'reb-05', archetype: 'rebelde', text: 'Sinto satisfação em desafiar expectativas impostas sobre mim.' },
  { id: 'reb-06', archetype: 'rebelde', text: 'Tenho dificuldade em me conformar quando discordo profundamente.' },
  { id: 'reb-07', archetype: 'rebelde', text: 'Já causei conflito por defender uma mudança que julgava necessária.' },
  { id: 'reb-08', archetype: 'rebelde', text: 'Desconfio de estruturas de poder estabelecidas.' },
  { id: 'reb-09', archetype: 'rebelde', text: 'Prefiro ser autêntico a ser aceito pelo grupo.' },

  // MAGO
  { id: 'mag-01', archetype: 'mago', text: 'Acredito que compreender os padrões ocultos muda a realidade.' },
  { id: 'mag-02', archetype: 'mago', text: 'Sinto-me atraído por processos de transformação profunda, minha ou de outros.' },
  { id: 'mag-03', archetype: 'mago', text: 'Gosto de conectar ideias de áreas diferentes para criar algo novo.' },
  { id: 'mag-04', archetype: 'mago', text: 'Sinto que tenho influência real sobre o rumo dos acontecimentos.' },
  { id: 'mag-05', archetype: 'mago', text: 'Busco entender as leis ocultas por trás dos fenômenos visíveis.' },
  { id: 'mag-06', archetype: 'mago', text: 'Já fui procurado como alguém capaz de "virar o jogo" de uma situação.' },
  { id: 'mag-07', archetype: 'mago', text: 'Tenho interesse por simbolismo, ritual ou processos de transformação pessoal.' },
  { id: 'mag-08', archetype: 'mago', text: 'Prefiro atuar nos bastidores, orquestrando resultados, a estar em evidência.' },
  { id: 'mag-09', archetype: 'mago', text: 'Sinto responsabilidade pelas consequências não previstas das minhas ações.' },

  // HERÓI
  { id: 'her-01', archetype: 'heroi', text: 'Sinto necessidade de superar desafios para provar meu valor.' },
  { id: 'her-02', archetype: 'heroi', text: 'Assumo responsabilidade em situações que outros evitam.' },
  { id: 'her-03', archetype: 'heroi', text: 'Tenho dificuldade em aceitar derrotas ou fracassos.' },
  { id: 'her-04', archetype: 'heroi', text: 'Me esforço para ser exemplo de competência para os outros.' },
  { id: 'her-05', archetype: 'heroi', text: 'Sinto que preciso estar sempre me superando.' },
  { id: 'her-06', archetype: 'heroi', text: 'Já me coloquei em risco para resolver um problema importante.' },
  { id: 'her-07', archetype: 'heroi', text: 'Tenho dificuldade em pedir ajuda mesmo quando estou sobrecarregado.' },
  { id: 'her-08', archetype: 'heroi', text: 'Meço meu valor pessoal pelas conquistas que alcanço.' },
  { id: 'her-09', archetype: 'heroi', text: 'Sinto forte desconforto diante da própria vulnerabilidade.' },

  // AMANTE
  { id: 'ama-01', archetype: 'amante', text: 'Priorizo intensamente minhas relações afetivas mais próximas.' },
  { id: 'ama-02', archetype: 'amante', text: 'Sinto as coisas de forma muito intensa, para o bem e para o mal.' },
  { id: 'ama-03', archetype: 'amante', text: 'Tenho dificuldade em estar bem quando não me sinto amado ou desejado.' },
  { id: 'ama-04', archetype: 'amante', text: 'Valorizo experiências sensoriais e estéticas profundamente.' },
  { id: 'ama-05', archetype: 'amante', text: 'Já me perdi um pouco de mim mesmo em um relacionamento intenso.' },
  { id: 'ama-06', archetype: 'amante', text: 'Sinto ciúme com facilidade quando me apego a alguém.' },
  { id: 'ama-07', archetype: 'amante', text: 'Aprecio a beleza e a paixão em praticamente qualquer área da vida.' },
  { id: 'ama-08', archetype: 'amante', text: 'Tenho dificuldade em lidar com o fim de vínculos afetivos importantes.' },
  { id: 'ama-09', archetype: 'amante', text: 'Expresso afeto de forma intensa e explícita.' },

  // BOBO DA CORTE
  { id: 'bob-01', archetype: 'bobo', text: 'Uso o humor para aliviar tensão em momentos difíceis.' },
  { id: 'bob-02', archetype: 'bobo', text: 'Tenho dificuldade em levar minhas próprias emoções a sério.' },
  { id: 'bob-03', archetype: 'bobo', text: 'Prefiro rir de mim mesmo antes que outros o façam.' },
  { id: 'bob-04', archetype: 'bobo', text: 'Vivo intensamente o presente, sem me preocupar tanto com o futuro.' },
  { id: 'bob-05', archetype: 'bobo', text: 'Já usei uma piada para evitar falar sobre algo doloroso.' },
  { id: 'bob-06', archetype: 'bobo', text: 'Sou frequentemente visto como a pessoa "engraçada" do grupo.' },
  { id: 'bob-07', archetype: 'bobo', text: 'Sinto desconforto em ambientes excessivamente sérios ou solenes.' },
  { id: 'bob-08', archetype: 'bobo', text: 'Costumo dizer verdades incômodas disfarçadas de brincadeira.' },
  { id: 'bob-09', archetype: 'bobo', text: 'Tenho dificuldade em expressar tristeza de forma direta.' },

  // CRIADOR
  { id: 'cri-01', archetype: 'criador', text: 'Sinto necessidade constante de dar forma a algo que ainda não existe.' },
  { id: 'cri-02', archetype: 'criador', text: 'Sou extremamente exigente com a qualidade daquilo que produzo.' },
  { id: 'cri-03', archetype: 'criador', text: 'Sinto frustração intensa quando uma criação minha não sai como imaginei.' },
  { id: 'cri-04', archetype: 'criador', text: 'Prefiro passar horas sozinho aperfeiçoando um projeto a socializar.' },
  { id: 'cri-05', archetype: 'criador', text: 'Meça meu valor, em parte, pela qualidade do que produzo.' },
  { id: 'cri-06', archetype: 'criador', text: 'Tenho dificuldade em considerar um trabalho meu como "terminado".' },
  { id: 'cri-07', archetype: 'criador', text: 'Sinto realização profunda ao transformar uma ideia em algo concreto.' },
  { id: 'cri-08', archetype: 'criador', text: 'Já negligenciei relações pessoais em favor de um projeto criativo.' },
  { id: 'cri-09', archetype: 'criador', text: 'Prefiro originalidade a seguir fórmulas já testadas.' },
];
