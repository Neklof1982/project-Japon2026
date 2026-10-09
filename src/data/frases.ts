export type Frase = { jp: string; romaji?: string; es: string };

/** Frases básicas: van en todas las páginas. */
export const BASICAS: Frase[] = [
  { jp: 'すみません。', romaji: 'Sumimasen.', es: 'Perdón / Disculpe.' },
  { jp: '英語を話せますか？', romaji: 'Eigo o hanasemasu ka?', es: '¿Habla inglés?' },
  { jp: 'これはどこですか？', romaji: 'Kore wa doko desu ka?', es: '¿Dónde está esto? (señalando el móvil)' },
  { jp: 'トイレはどこですか？', romaji: 'Toire wa doko desu ka?', es: '¿Dónde está el baño?' },
  { jp: 'お願いします。', romaji: 'Onegai shimasu.', es: 'Por favor / Esto, por favor.' },
  { jp: 'ありがとうございます。', romaji: 'Arigatō gozaimasu.', es: 'Muchas gracias.' },
  { jp: '写真を撮ってもらえますか？', romaji: 'Shashin o totte moraemasu ka?', es: '¿Puede hacernos una foto?' },
  { jp: '助けてください。', romaji: 'Tasukete kudasai.', es: 'Ayúdenos, por favor.' },
];

/** Frases de estación: van en todas las páginas. */
export const ESTACION: Frase[] = [
  { jp: '駅員さんを呼んでもらえますか？', romaji: 'Ekiin-san o yonde moraemasu ka?', es: '¿Puede llamar a un empleado de la estación?' },
  { jp: '何番線ですか？', romaji: 'Nan-ban-sen desu ka?', es: '¿De qué andén sale?' },
  { jp: 'この電車は〇〇に行きますか？', romaji: 'Kono densha wa ○○ ni ikimasu ka?', es: '¿Este tren va a ○○? (señalar el destino en el móvil)' },
  { jp: '〇〇方面ですか？', romaji: '○○ hōmen desu ka?', es: '¿Es dirección ○○?' },
  { jp: 'この切符で大丈夫ですか？', romaji: 'Kono kippu de daijōbu desu ka?', es: '¿Este billete sirve?' },
  { jp: '乗り過ごしてしまいました。', romaji: 'Norisugoshite shimaimashita.', es: 'Nos hemos pasado de parada.' },
  { jp: 'エレベーターはどこですか？', romaji: 'Erebētā wa doko desu ka?', es: '¿Dónde está el ascensor? (con maletas)' },
  { jp: 'コインロッカーはどこですか？', romaji: 'Koin rokkā wa doko desu ka?', es: '¿Dónde están las taquillas?' },
];

/** Frases de taxi: van en todas las páginas, junto a las tarjetas. */
export const TAXI: Frase[] = [
  { jp: 'ここまでお願いします。', romaji: 'Koko made onegai shimasu.', es: 'Hasta aquí, por favor (enseñando la tarjeta).' },
  { jp: '4人です。荷物があります。', romaji: 'Yonin desu. Nimotsu ga arimasu.', es: 'Somos cuatro y llevamos maletas.' },
  { jp: 'カードで払えますか？', romaji: 'Kādo de haraemasu ka?', es: '¿Se puede pagar con tarjeta?' },
  { jp: 'ここで止めてください。', romaji: 'Koko de tomete kudasai.', es: 'Pare aquí, por favor.' },
];
