// Camada de persistência via localStorage

const STORAGE_KEY = 'jung-arquetipos:respostas:v1';

function saveAnswers(answers) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch (e) {
    // localStorage indisponível (modo privado, etc.) — falha silenciosa
  }
}

function loadAnswers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function clearAnswers() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    // ignora
  }
}
