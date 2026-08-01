(function () {
  let screen = 'intro';
  let answers = loadAnswers();
  let quizIndex = 0;

  const app = document.getElementById('app');

  function render() {
    if (screen === 'intro') {
      const { answered } = progressOf(answers);
      app.innerHTML = renderIntro(answered > 0 && answered < QUESTIONS.length);
      attachIntroHandlers(goToQuiz, resumeQuiz);
    } else if (screen === 'quiz') {
      app.innerHTML = renderQuiz(quizIndex, answers);
      const container = app.querySelector('.scene-quiz');
      if (container) container.setAttribute('data-index', String(quizIndex));
      attachQuizHandlers(quizIndex, handleAnswer, handleNext, handlePrev);
    } else if (screen === 'result') {
      const result = computeScores(answers);
      app.innerHTML = renderResult(result);
      attachResultHandlers(handleRestart);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function goToQuiz() {
    quizIndex = 0;
    screen = 'quiz';
    render();
  }

  function resumeQuiz() {
    const firstUnanswered = QUESTIONS.findIndex((q) => answers[q.id] === undefined);
    quizIndex = firstUnanswered === -1 ? 0 : firstUnanswered;
    screen = 'quiz';
    render();
  }

  // Selecionar uma opção Likert apenas registra a resposta e re-renderiza a
  // MESMA pergunta com a opção marcada (habilitando o botão "Próxima").
  // O avanço de fato só acontece com uma ação explícita do usuário
  // (clique em "Próxima" / "Revelar o Resultado"), evitando qualquer
  // condição de corrida entre avanço automático e clique manual.
  function handleAnswer(questionId, value) {
    answers[questionId] = value;
    saveAnswers(answers);
    render();
  }

  function handleNext() {
    if (quizIndex >= QUESTIONS.length - 1) {
      goToResultOrPending();
    } else {
      quizIndex += 1;
      render();
    }
  }

  function goToResultOrPending() {
    if (isComplete(answers)) {
      screen = 'result';
      render();
    } else {
      // Segurança extra: se por algum motivo faltar alguma resposta
      // anterior, leva o usuário direto até ela em vez de travar silenciosamente.
      const firstUnanswered = QUESTIONS.findIndex((q) => answers[q.id] === undefined);
      quizIndex = firstUnanswered === -1 ? 0 : firstUnanswered;
      render();
    }
  }

  function handlePrev() {
    if (quizIndex > 0) {
      quizIndex -= 1;
      render();
    }
  }

  function handleRestart() {
    answers = {};
    clearAnswers();
    quizIndex = 0;
    screen = 'intro';
    render();
  }

  render();
})();
