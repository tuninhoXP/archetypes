const LIKERT_LABELS = [
  'Discordo Totalmente',
  'Discordo',
  'Neutro',
  'Concordo',
  'Concordo Totalmente',
];

function renderQuiz(index, answers) {
  const q = QUESTIONS[index];
  const { answered, total } = progressOf(answers);
  const pct = Math.round((index / total) * 100);
  const current = answers[q.id];

  return `
    <section class="scene scene-quiz">
      <div class="quiz-progress-track" aria-hidden="true">
        <div class="quiz-progress-fill" style="width:${pct}%"></div>
      </div>
      <p class="quiz-counter">Página ${index + 1} de ${total} &middot; ${answered} respondidas</p>

      <div class="card-parchment card-question">
        <div class="card-corner card-corner-tl" aria-hidden="true"></div>
        <div class="card-corner card-corner-tr" aria-hidden="true"></div>
        <div class="card-corner card-corner-bl" aria-hidden="true"></div>
        <div class="card-corner card-corner-br" aria-hidden="true"></div>

        <p class="question-text">${q.text}</p>

        <div class="likert-row" role="radiogroup" aria-label="${q.text}">
          ${LIKERT_LABELS.map(
            (label, i) => `
            <button
              class="likert-option ${current === i + 1 ? 'is-selected' : ''}"
              data-value="${i + 1}"
              role="radio"
              aria-checked="${current === i + 1}"
            >
              <span class="likert-rune">${'●'.repeat(i + 1)}</span>
              <span class="likert-label">${label}</span>
            </button>
          `
          ).join('')}
        </div>
      </div>

      <div class="quiz-nav">
        <button class="btn-parchment btn-ghost" id="btn-prev" ${index === 0 ? 'disabled' : ''}>&larr; Anterior</button>
        <button class="btn-parchment btn-primary" id="btn-next" ${current === undefined ? 'disabled' : ''}>
          ${index === total - 1 ? 'Revelar o Resultado' : 'Próxima →'}
        </button>
      </div>
    </section>
  `;
}

function attachQuizHandlers(index, onAnswer, onNext, onPrev) {
  const q = QUESTIONS[index];
  document.querySelectorAll('.likert-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      onAnswer(q.id, Number(btn.dataset.value));
    });
  });
  document.getElementById('btn-next')?.addEventListener('click', onNext);
  document.getElementById('btn-prev')?.addEventListener('click', onPrev);
}
