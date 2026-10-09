/**
 * Datos fijos del viaje: fases, hoteles y relevos entre páginas.
 * Si cambia una hora o un hotel, se cambia aquí y se actualizan todas las páginas.
 */

export type FaseId = 'tokyo-llegada' | 'osaka' | 'kyoto' | 'tokyo';

export const FASES: Record<FaseId, {
  n: number; ruta: string; corto: string; titulo: string; fechas: string; resumen: string; foto: string; hotel: HotelId;
}> = {
  'tokyo-llegada': {
    n: 1, ruta: 'tokyo-llegada/', corto: 'Llegada', titulo: 'Tokyo → Osaka', fechas: '21 OCT',
    resumen: 'Aterrizaje nocturno en Haneda, unas horas de descanso en Tokyo y Shinkansen Nozomi a Osaka.',
    foto: 'shinkansen-platform', hotel: 'tokyo',
  },
  osaka: {
    n: 2, ruta: 'osaka/', corto: 'Osaka', titulo: 'Osaka + Nara', fechas: '21–25 OCT',
    resumen: 'Base en Hommachi y cuatro planes intercambiables: Castillo, Tennoji, Minami y Nara.',
    foto: 'dotonbori', hotel: 'osaka',
  },
  kyoto: {
    n: 3, ruta: 'kyoto/', corto: 'Kyoto', titulo: 'Kyoto', fechas: '25–28 OCT',
    resumen: 'Templos, bambú y torii: Kiyomizu-dera, Arashiyama, Kinkaku-ji, Ryoan-ji y Fushimi Inari.',
    foto: 'senbon-torii', hotel: 'kyoto',
  },
  tokyo: {
    n: 4, ruta: 'tokyo/', corto: 'Tokyo', titulo: 'Tokyo · vuelta', fechas: '28 OCT – 2 NOV',
    resumen: 'Tokyo por zonas: Ginza, Tsukiji, Meiji, Shibuya, Odaiba, Asakusa, Akihabara, Shinjuku y Haneda.',
    foto: 'shibuya-cruce', hotel: 'tokyo',
  },
};

export const ORDEN: FaseId[] = ['tokyo-llegada', 'osaka', 'kyoto', 'tokyo'];

export type HotelId = 'tokyo' | 'osaka' | 'kyoto';

export const HOTELES: Record<HotelId, {
  nombre: string; jp: string; direccion: string; direccionJp: string; acceso: string; maps: string;
}> = {
  tokyo: {
    nombre: 'APA Hotel Hatchobori Shintomicho',
    jp: 'アパホテル〈八丁堀 新富町〉',
    direccion: '1-17-8 Shintomi, Chuo-ku, Tokyo',
    direccionJp: '東京都中央区新富1-17-8',
    acceso: 'Shintomicho Y20 · salida 5 (2 min) · Hatchobori H12 · salida A3 (5 min)',
    maps: 'APA Hotel Hatchobori Shintomicho',
  },
  osaka: {
    nombre: 'Far East Village Hotel Osaka Honmachi',
    jp: 'ファーイーストビレッジホテル大阪本町',
    direccion: '3-3-6 Kyutaromachi, Chuo-ku, Osaka',
    direccionJp: '大阪府大阪市中央区久太郎町3-3-6',
    acceso: 'Hommachi M18 · Exit 12 (4–5 min) · Exit 7 con maletas',
    maps: 'Far East Village Hotel Osaka Honmachi',
  },
  kyoto: {
    nombre: 'Hotel Hokke Club Kyoto',
    jp: 'ホテル法華クラブ京都',
    direccion: 'Frente a Kyoto Station (salida Karasuma / norte)',
    direccionJp: '京都駅 烏丸口の前',
    acceso: 'Kyoto Station · salida Karasuma (norte) · junto a Kyoto Tower',
    maps: 'Hotel Hokke Club Kyoto',
  },
};

/** Relevos: dónde termina una página y empieza la siguiente. */
export const CONEXIONES: { desde: FaseId; hacia: FaseId; cuando: string; donde: string; texto: string; ancla: string }[] = [
  {
    desde: 'tokyo-llegada', hacia: 'osaka', cuando: '21 OCT · ~14:20', donde: 'Shin-Osaka',
    texto: 'Bajamos del Nozomi en Shin-Osaka. A partir de aquí manda la guía de Osaka: Midosuji M13 → M18 Hommachi → hotel.',
    ancla: 'llegada',
  },
  {
    desde: 'osaka', hacia: 'kyoto', cuando: '25 OCT · ~12:00', donde: 'Shin-Osaka → Kyoto Station',
    texto: 'Salimos del hotel con las maletas, Midosuji hasta Shin-Osaka y tren a Kyoto. La guía de Kyoto empieza al bajar en Kyoto Station.',
    ancla: 'dia25',
  },
  {
    desde: 'kyoto', hacia: 'tokyo', cuando: '28 OCT · después de Fushimi Inari', donde: 'Shinkansen Kyoto → Tokyo Station',
    texto: 'Llegamos a Tokyo Station por los andenes 14–19 del Shinkansen. La guía de Tokyo empieza ahí: salida Yaesu y taxi al hotel.',
    ancla: 'd28',
  },
];

export const VUELO_IDA = { llegada: '21 OCT · 00:20', aeropuerto: 'Haneda T3', origen: 'Doha' };
export const VUELO_VUELTA = { salida: '2 NOV · 00:20', aeropuerto: 'Haneda T3' };
