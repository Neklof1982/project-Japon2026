/**
 * Líneas que usamos en el viaje. Un único sitio para color, letra y nombre:
 * cualquier componente que diga "coger X" pinta exactamente esto.
 * Colores tomados de la señalética oficial de cada operador.
 */
export type Linea = {
  nombre: string;      // como aparece en los carteles en inglés
  jp: string;          // como aparece en japonés
  letra: string;       // prefijo del código de estación
  color: string;       // color de la línea
  texto: string;       // color del texto sobre el color de la línea
  operador: string;
  colorEs: string;     // cómo lo decimos nosotros
};

export const LINEAS = {
  // ── Tokyo ──────────────────────────────────────────────
  shinkansen:  { nombre: 'Tokaido Shinkansen', jp: '東海道新幹線', letra: '新', color: '#1E50A2', texto: '#fff', operador: 'JR Central', colorEs: 'azul' },
  yamanote:    { nombre: 'JR Yamanote Line', jp: '山手線', letra: 'JY', color: '#80C241', texto: '#13300a', operador: 'JR East', colorEs: 'verde claro' },
  ginza:       { nombre: 'Ginza Line', jp: '銀座線', letra: 'G', color: '#F39700', texto: '#1a1a1a', operador: 'Tokyo Metro', colorEs: 'naranja' },
  marunouchi:  { nombre: 'Marunouchi Line', jp: '丸ノ内線', letra: 'M', color: '#E60012', texto: '#fff', operador: 'Tokyo Metro', colorEs: 'rojo' },
  hibiya:      { nombre: 'Hibiya Line', jp: '日比谷線', letra: 'H', color: '#9CAEB7', texto: '#1a1a1a', operador: 'Tokyo Metro', colorEs: 'gris plata' },
  yurakucho:   { nombre: 'Yurakucho Line', jp: '有楽町線', letra: 'Y', color: '#D7C447', texto: '#1a1a1a', operador: 'Tokyo Metro', colorEs: 'dorado' },
  asakusa:     { nombre: 'Toei Asakusa Line', jp: '都営浅草線', letra: 'A', color: '#E85298', texto: '#fff', operador: 'Toei', colorEs: 'rosa' },
  keikyu:      { nombre: 'Keikyu Airport Line', jp: '京急空港線', letra: 'KK', color: '#00A3E4', texto: '#fff', operador: 'Keikyu', colorEs: 'azul cielo' },
  monorail:    { nombre: 'Tokyo Monorail', jp: '東京モノレール', letra: 'MO', color: '#0067B0', texto: '#fff', operador: 'Tokyo Monorail', colorEs: 'azul' },
  yurikamome:  { nombre: 'Yurikamome', jp: 'ゆりかもめ', letra: 'U', color: '#1C5BA9', texto: '#fff', operador: 'Yurikamome', colorEs: 'azul' },

  // ── Osaka ──────────────────────────────────────────────
  midosuji:    { nombre: 'Midosuji Line', jp: '御堂筋線', letra: 'M', color: '#E5171F', texto: '#fff', operador: 'Osaka Metro', colorEs: 'rojo' },
  chuo:        { nombre: 'Chuo Line', jp: '中央線', letra: 'C', color: '#019A66', texto: '#fff', operador: 'Osaka Metro', colorEs: 'verde' },
  tanimachi:   { nombre: 'Tanimachi Line', jp: '谷町線', letra: 'T', color: '#522886', texto: '#fff', operador: 'Osaka Metro', colorEs: 'morado' },
  yotsubashi:  { nombre: 'Yotsubashi Line', jp: '四つ橋線', letra: 'Y', color: '#0078BA', texto: '#fff', operador: 'Osaka Metro', colorEs: 'azul' },
  kintetsu:    { nombre: 'Kintetsu Nara Line', jp: '近鉄奈良線', letra: 'A', color: '#D7003A', texto: '#fff', operador: 'Kintetsu', colorEs: 'rojo Kintetsu' },
  jrkyoto:     { nombre: 'JR Kyoto Line', jp: 'JR京都線', letra: 'A', color: '#0072BC', texto: '#fff', operador: 'JR West', colorEs: 'azul' },

  // ── Kyoto ──────────────────────────────────────────────
  nara:        { nombre: 'JR Nara Line', jp: '奈良線', letra: 'D', color: '#A86D19', texto: '#fff', operador: 'JR West', colorEs: 'marrón' },
  sagano:      { nombre: 'JR Sagano Line', jp: '嵯峨野線', letra: 'E', color: '#8F3F97', texto: '#fff', operador: 'JR West', colorEs: 'morado' },
} satisfies Record<string, Linea>;

export type LineaId = keyof typeof LINEAS;

/** Código de estación tal y como aparece en el cartel. JR West lo escribe "JR-D03". */
export function codigo(l: LineaId, n: string | number): string {
  const L = LINEAS[l];
  const num = String(n).padStart(2, '0');
  if (L.operador === 'JR West') return `JR-${L.letra}${num}`;
  return `${L.letra}${num}`;
}
