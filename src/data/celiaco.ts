import type { Frase } from './frases';

/** Tarjeta para enseñar en restaurantes. Va en todas las páginas. */
export const TARJETA = {
  jp: '私はセリアック病です。小麦・大麦・ライ麦を食べることができません。醤油、味噌、調味料などに小麦が入っていないか確認してください。少量でも食べられません。',
  es: 'Tengo enfermedad celíaca. No puedo comer trigo, cebada ni centeno. Por favor, comprueben que no haya trigo en la salsa de soja, el miso, los condimentos, etc. No puedo consumir ni pequeñas cantidades.',
};

export const FRASES_COMIDA: Frase[] = [
  { jp: 'グルテンフリーですか？', romaji: 'Guruten furī desu ka?', es: '¿Es sin gluten?' },
  { jp: '小麦が入っていますか？', romaji: 'Komugi ga haitte imasu ka?', es: '¿Lleva trigo?' },
  { jp: '小麦アレルギーがあります。', romaji: 'Komugi arerugī ga arimasu.', es: 'Tengo alergia al trigo.' },
  { jp: '醤油に小麦が入っていますか？', romaji: 'Shōyu ni komugi ga haitte imasu ka?', es: '¿La salsa de soja lleva trigo?' },
  { jp: '醤油なしでお願いします。', romaji: 'Shōyu nashi de onegai shimasu.', es: 'Sin salsa de soja, por favor.' },
  { jp: '原材料を見せてもらえますか？', romaji: 'Genzairyō o misete moraemasu ka?', es: '¿Puede enseñarme los ingredientes?' },
  { jp: '同じ油で揚げ物をしていますか？', romaji: 'Onaji abura de agemono o shite imasu ka?', es: '¿Fríen en el mismo aceite que los rebozados?' },
  { jp: '麦茶ではなく、水をお願いします。', romaji: 'Mugicha de wa naku, mizu o onegai shimasu.', es: 'Agua en lugar de té de cebada, por favor.' },
];

/** Reglas comunes a todo el viaje. */
export const REGLAS: string[] = [
  '<strong>Llevar la tarjeta en japonés</strong> y enseñarla siempre. Pedir <em>shoyu nashi</em> (sin salsa de soja) no basta: hay que decir <strong>sin trigo</strong>.',
  '<strong>Base más segura</strong> (confirmando siempre): arroz blanco, sashimi, yakitori con sal (<em>shio</em>), tofu solo, huevo, fruta, edamame sin salsa.',
  '<strong>Peligros ocultos</strong>: ramen (caldo con shoyu/miso), tempura y rebozados (harina), gyudon (salsa con trigo), curry japonés (roux con harina), soba (casi siempre lleva trigo).',
  '<strong>Etiquetas</strong>: en Japón es obligatorio declarar <strong>小麦</strong> (trigo) en la lista de alérgenos. La <strong>cebada (大麦)</strong> no es obligatoria: ojo con el <strong>麦茶</strong> (té de cebada) que sirven gratis en muchos restaurantes.',
  '<strong>Konbini</strong> (Lawson, 7-Eleven, FamilyMart): útiles para el plan B. Leer siempre la etiqueta antes de comprar.',
  '<strong>Apps</strong>: Find Me Gluten Free para buscar sitios ya revisados por otros celíacos. Comprobar cada local antes de ir.',
  '<strong>Si no pueden confirmarlo, no se come.</strong> Siempre llevar algo seguro preparado en la mochila.',
];
