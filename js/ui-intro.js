const DIVIDER_SVG = `<svg viewBox="0 0 200 20" class="divider-svg"><path d="M0 10 H80 M120 10 H200" stroke="currentColor" stroke-width="1"/><circle cx="100" cy="10" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M92 10 L100 4 L108 10 L100 16 Z" fill="currentColor"/></svg>`;

function renderIntro(hasProgress) {
  return `
    <section class="scene scene-intro">
      <div class="illumination"></div>
      <h1 class="title-main">Os Doze Arquétipos</h1>
      <p class="subtitle">Um exame psicanalítico das figuras arquetípicas de Carl Jung</p>
      <div class="divider-orn" aria-hidden="true">${DIVIDER_SVG}</div>
      <p class="lede">
        Responda a um conjunto de <strong>108 afirmações</strong> sobre como você pensa, sente e age.
        Ao final, seu perfil revelará o arquétipo <strong>dominante</strong> e o <strong>secundário</strong>
        que estruturam sua psique — acompanhados de uma leitura técnica sobre mecanismos de defesa
        e dinâmicas inconscientes envolvidas.
      </p>
      <p class="privacy-note">Suas respostas permanecem apenas neste dispositivo (armazenamento local do navegador). Nada é enviado a servidores.</p>
      <div class="actions">
        <button class="btn-parchment btn-primary" id="btn-start">Iniciar o Ritual</button>
        ${hasProgress ? '<button class="btn-parchment btn-ghost" id="btn-resume">Retomar Jornada</button>' : ''}
      </div>
    </section>
  `;
}

function attachIntroHandlers(onStart, onResume) {
  document.getElementById('btn-start')?.addEventListener('click', onStart);
  document.getElementById('btn-resume')?.addEventListener('click', onResume);
}
