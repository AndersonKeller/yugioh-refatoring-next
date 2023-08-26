import { z } from "zod";
const cardSetSchema = z.object({
  set_name: z.string(),
  set_code: z.string(),
  set_rarity: z.string(),
  set_rarity_code: z.string(),
  set_price: z.string(),
});
const cardImageSchema = z.object({
  id: z.number(),
  image_url: z.string(),
  image_url_small: z.string(),
  image_url_cropped: z.string(),
});
const cardPricesSchema = z.object({
  cardmarket_price: z.string(),
  tcgplayer_price: z.string(),
  ebay_price: z.string(),
  amazon_price: z.string(),
  coolstuffinc_price: z.string(),
});
const cardSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  frameType: z.string(),
  desc: z.string(),
  race: z.string(),
  atk: z.number().optional(),
  def: z.number().optional(),
  level: z.number().optional(),
  archetype: z.string(),
  attribute: z.string().optional(),
  card_sets: cardSetSchema.array(),
  card_images: cardImageSchema.array(),
  card_prices: cardPricesSchema.array(),
});

export type Cards = z.infer<typeof cardSchema>;
// {
//   id: 44256816,
//   name: '1st Movement Solo',
//   type: 'Spell Card',
//   frameType: 'spell',
//   desc: 'If you control no monsters: Special Summon 1 Level 4 or lower "Melodious" monster from your hand or Deck. You can only activate 1 "1st Movement Solo" per turn. You cannot Special Summon monsters during the turn you activate this card, except "Melodious" monsters.',
//   race: 'Normal',
//   archetype: 'Melodious',
//   card_sets: [Array],
//   card_images: [Array],
//   card_prices: [Array]
// }
// "card_sets": [
//   {
//     "set_name": "Gold Series",
//     "set_code": "GLD1-EN001",
//     "set_rarity": "Common",
//     "set_rarity_code": "(C)",
//     "set_price": "0.74"
//   },
