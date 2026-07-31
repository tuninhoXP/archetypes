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

  function handleAnswer(questionId, value) {
    answers[questionId] = value;
    saveAnswers(answers);
    const btn = document.querySelector(`.likert-option[data-value="${value}"]`);
    if (btn) btn.classList.add('is-selected');
    setTimeout(() => {
      if (quizIndex < QUESTIONS.length - 1) {
        quizIndex += 1;
        render();
      } else if (isComplete(answers)) {
        screen = 'result';
        render();
      } else {
        render();
      }
    }, 220);
  }

  function handleNext() {
    if (quizIndex < QUESTIONS.length - 1) {
      quizIndex += 1;
      render();
    } else if (isComplete(answers)) {
      screen = 'result';
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
