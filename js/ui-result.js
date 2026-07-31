function archetypeCard(id, percent, role) {
  const a = ARCHETYPES[id];
  return `
    <div class="card-parchment card-archetype card-${role}">
      <div class="card-corner card-corner-tl" aria-hidden="true"></div>
      <div class="card-corner card-corner-tr" aria-hidden="true"></div>
      <div class="card-corner card-corner-bl" aria-hidden="true"></div>
      <div class="card-corner card-corner-br" aria-hidden="true"></div>

      <p class="card-role">${role === 'dominant' ? 'Arquétipo Dominante' : 'Arquétipo Secundário'}</p>
      <div class="card-icon">${getIcon(a.symbol)}</div>
      <h2 class="card-name">${a.name}</h2>
      <p class="card-epithet">${a.epithet}</p>
      <div class="card-meter" aria-hidden="true">
        <div class="card-meter-fill" style="width:${percent}%"></div>
      </div>
      <p class="card-percent">${percent}% de afinidade</p>

      <dl class="card-facts">
        <dt>Desejo nuclear</dt>
        <dd>${a.desire}</dd>
        <dt>Medo nuclear</dt>
        <dd>${a.fear}</dd>
      </dl>
    </div>
  `;
}

function renderResult(result) {
  const { dominant, secondary, relation, scores } = result;
  const domA = ARCHETYPES[dominant.id];
  const secA = ARCHETYPES[secondary.id];

  return `
    <section class="scene scene-result">
      <h1 class="title-main title-result">O Selo de Tua Psique</h1>
      <div class="divider-orn" aria-hidden="true">${DIVIDER_SVG}</div>

      <div class="cards-duo">
        ${archetypeCard(dominant.id, dominant.percent, 'dominant')}
        <div class="relation-badge relation-${relation}">
          <span class="relation-label">${relation === 'sombra' ? 'Eixo de Sombra' : 'Eixo de Apoio'}</span>
        </div>
        ${archetypeCard(secondary.id, secondary.percent, 'secondary')}
      </div>

      <div class="analysis-block">
        <h3>Leitura Técnica</h3>
        <p>
          O arquétipo <strong>${domA.name}</strong> organiza sua estrutura psíquica dominante,
          enquanto <strong>${secA.name}</strong> emerge como
          ${relation === 'sombra'
            ? 'força em <em>tensão</em> — um contraponto que frequentemente atua como sombra compensatória, emergindo sob estresse ou em conflitos não resolvidos'
            : 'força de <em>apoio</em> — reforçando e complementando as tendências do arquétipo dominante em vez de tensioná-las'}.
        </p>
        <div class="clinical-notes">
          <div class="clinical-note-item">
            <h4>${domA.name} — Nota Clínica</h4>
            <p>${domA.clinicalNote}</p>
            <p class="defense-line"><strong>Mecanismos de defesa associados:</strong> ${domA.defenseMechanisms}</p>
            <p class="shadow-line"><strong>Manifestação sombria (desequilíbrio):</strong> ${domA.shadow}</p>
          </div>
          <div class="clinical-note-item">
            <h4>${secA.name} — Nota Clínica</h4>
            <p>${secA.clinicalNote}</p>
            <p class="defense-line"><strong>Mecanismos de defesa associados:</strong> ${secA.defenseMechanisms}</p>
            <p class="shadow-line"><strong>Manifestação sombria (desequilíbrio):</strong> ${secA.shadow}</p>
          </div>
        </div>
      </div>

      <div class="full-spectrum">
        <h3>O Mapa Completo</h3>
        <ul class="spectrum-list">
          ${scores
            .map(
              (s) => `
            <li class="spectrum-row">
              <span class="spectrum-icon">${getIcon(ARCHETYPES[s.id].symbol)}</span>
              <span class="spectrum-name">${ARCHETYPES[s.id].name}</span>
              <span class="spectrum-track"><span class="spectrum-fill" style="width:${s.percent}%"></span></span>
              <span class="spectrum-value">${s.percent}%</span>
            </li>
          `
            )
            .join('')}
        </ul>
      </div>

      <p class="disclaimer">
        Este exame é uma ferramenta de autorreflexão baseada em tipologia junguiana e não constitui
        diagnóstico psiquiátrico ou psicológico. Para avaliação clínica, consulte um profissional habilitado.
      </p>

      <div class="actions">
        <button class="btn-parchment btn-ghost" id="btn-restart">Refazer o Ritual</button>
      </div>
    </section>
  `;
}

function attachResultHandlers(onRestart) {
  document.getElementById('btn-restart')?.addEventListener('click', onRestart);
}
