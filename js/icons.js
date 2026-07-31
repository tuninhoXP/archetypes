// Ícones em line-art estilo xilogravura (woodcut), traço único, sem preenchimento sólido,
// para reforçar a estética de manuscrito/carta medieval. currentColor herda a cor da carta.

const wrap = (inner) =>
  `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

const ICONS = {
  'pomba-e-ramo': wrap(`
    <path d="M50 30 C40 20 25 22 22 35 C20 45 30 52 40 50 C35 58 40 68 50 66 C45 74 52 82 60 78" />
    <circle cx="46" cy="34" r="1.5" fill="currentColor" stroke="none" />
    <path d="M60 78 C68 74 74 66 70 58" />
    <path d="M50 66 L58 58 M55 62 L62 55" />
  `),
  'lanterna-quebrada': wrap(`
    <path d="M40 30 L60 30 L58 55 L42 55 Z" />
    <path d="M45 30 L45 22 L55 22 L55 30" />
    <path d="M42 55 L38 70 M58 55 L64 68" />
    <path d="M47 38 L53 44 M53 38 L47 44" />
    <line x1="50" y1="22" x2="50" y2="14" />
  `),
  'espada-e-escudo': wrap(`
    <path d="M50 15 L50 55" />
    <path d="M40 25 L60 25" />
    <path d="M50 55 L45 65 L55 65 Z" />
    <path d="M30 45 C30 65 40 78 50 82 C60 78 70 65 70 45 C60 48 40 48 30 45 Z" />
  `),
  'calice-e-manto': wrap(`
    <path d="M40 25 C40 35 42 42 50 42 C58 42 60 35 60 25 Z" />
    <line x1="50" y1="42" x2="50" y2="60" />
    <path d="M38 60 L62 60 L58 68 L42 68 Z" />
    <path d="M30 80 C35 65 65 65 70 80" />
  `),
  'bussola-e-trilha': wrap(`
    <circle cx="50" cy="45" r="22" />
    <path d="M50 30 L56 45 L50 60 L44 45 Z" />
    <path d="M25 80 C35 75 45 78 50 72 C55 66 65 68 75 62" stroke-dasharray="4 4" />
  `),
  'livro-e-vela': wrap(`
    <path d="M28 35 L50 30 L50 70 L28 75 Z" />
    <path d="M72 35 L50 30 L50 70 L72 75 Z" />
    <line x1="50" y1="30" x2="50" y2="70" />
    <path d="M50 20 C48 24 46 27 50 30 C54 27 52 24 50 20" />
    <line x1="50" y1="14" x2="50" y2="20" />
  `),
  'corrente-partida': wrap(`
    <ellipse cx="38" cy="35" rx="9" ry="12" transform="rotate(-20 38 35)" />
    <ellipse cx="52" cy="48" rx="9" ry="12" transform="rotate(-20 52 48)" />
    <path d="M65 40 L78 30 M67 48 L82 42" />
    <path d="M40 55 C42 65 40 75 32 80" />
  `),
  'cajado-e-runas': wrap(`
    <line x1="50" y1="18" x2="50" y2="80" />
    <circle cx="50" cy="18" r="7" />
    <path d="M30 60 L34 66 L30 72" />
    <path d="M70 60 L66 66 L70 72" />
    <path d="M42 45 L58 45 M50 40 L50 50" />
  `),
  'espada-erguida': wrap(`
    <line x1="50" y1="12" x2="50" y2="65" />
    <path d="M50 12 L46 20 M50 12 L54 20" />
    <path d="M36 30 L64 30" />
    <path d="M50 65 L44 75 L56 75 Z" />
    <path d="M30 85 C40 88 60 88 70 85" stroke-dasharray="3 3" />
  `),
  'coracao-e-rosa': wrap(`
    <path d="M50 75 C20 55 25 30 42 28 C48 27 50 34 50 34 C50 34 52 27 58 28 C75 30 80 55 50 75 Z" />
    <circle cx="50" cy="42" r="6" />
    <path d="M50 48 L50 60" />
  `),
  'mascara-bufao': wrap(`
    <path d="M30 40 C30 25 70 25 70 40 C70 55 60 60 50 60 C40 60 30 55 30 40 Z" />
    <circle cx="40" cy="38" r="2" fill="currentColor" stroke="none" />
    <circle cx="60" cy="38" r="2" fill="currentColor" stroke="none" />
    <path d="M40 48 C45 53 55 53 60 48" />
    <path d="M50 60 L44 72 M50 60 L56 72" />
    <circle cx="44" cy="74" r="3" />
    <circle cx="56" cy="74" r="3" />
  `),
  'martelo-e-bigorna': wrap(`
    <path d="M30 30 L46 46 L38 54 L22 38 Z" />
    <line x1="38" y1="54" x2="55" y2="71" />
    <path d="M50 78 L80 78 L76 68 L54 68 Z" />
    <line x1="65" y1="68" x2="65" y2="60" />
  `),
};

function getIcon(symbol) {
  return ICONS[symbol] ?? wrap('<circle cx="50" cy="50" r="30" />');
}
