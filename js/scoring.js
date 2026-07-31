// Motor de pontuação: calcula scores por arquétipo e determina dominante/secundário

// Pares de arquétipos que tradicionalmente se colocam em tensão (eixo de sombra)
// quando aparecem como dominante + secundário próximos.
const SHADOW_PAIRS = [
  ['inocente', 'orfao'],
  ['guerreiro', 'cuidador'],
  ['explorador', 'cuidador'],
  ['sabio', 'bobo'],
  ['rebelde', 'sabio'],
  ['mago', 'inocente'],
  ['heroi', 'orfao'],
  ['amante', 'guerreiro'],
  ['criador', 'bobo'],
  ['rebelde', 'cuidador'],
];

function isShadowPair(a, b) {
  return SHADOW_PAIRS.some(
    ([x, y]) => (x === a && y === b) || (x === b && y === a)
  );
}

function computeScores(answers) {
  const sums = {};
  const counts = {};

  for (const q of QUESTIONS) {
    const val = answers[q.id];
    if (val === undefined) continue;
    const effective = q.reverse ? 6 - val : val;
    sums[q.archetype] = (sums[q.archetype] ?? 0) + effective;
    counts[q.archetype] = (counts[q.archetype] ?? 0) + 1;
  }

  const scores = ARCHETYPE_ORDER.map((id) => {
    const raw = sums[id] ?? 0;
    const n = counts[id] ?? 1;
    const max = n * 5;
    return { id, raw, max, percent: max > 0 ? Math.round((raw / max) * 100) : 0 };
  }).sort((a, b) => b.percent - a.percent);

  const dominant = scores[0];
  const secondary = scores[1];
  const relation = isShadowPair(dominant.id, secondary.id) ? 'sombra' : 'apoio';

  return { scores, dominant, secondary, relation };
}

function isComplete(answers) {
  return QUESTIONS.every((q) => answers[q.id] !== undefined);
}

function progressOf(answers) {
  return {
    answered: QUESTIONS.filter((q) => answers[q.id] !== undefined).length,
    total: QUESTIONS.length,
  };
}
