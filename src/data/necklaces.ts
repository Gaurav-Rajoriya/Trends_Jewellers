
import type { ImageKey } from './images';

export interface NecklaceImage {
  key: ImageKey;
  alt: string;
}

export interface Necklace {
  slug: string;
  name: string;
  collection: string;
  shortDescription: string;
  description: string;
  inspiration: string;
  styling: string[];
  specs: { label: string; value: string }[];
  images: NecklaceImage[];
  metaDescription: string;
}

const detailNote = {
  label: 'Design, stone and size details',
  value: 'Shared on enquiry',
};

export const necklaces: Necklace[] = [
  {
    slug: 'green-stone-ad-necklace-set',
    name: 'Green Stone AD Necklace Set',
    collection: 'Green Stone Necklace Sets',
    shortDescription:
      'An elegant green stone AD necklace set designed to bring colour and sophistication to special occasions.',
    description:
      'Discover the Green Stone AD Necklace Set by TRENDS JEWELLERS, featuring an elegant combination of green stones and attractive detailing. Its rich colour and graceful design make it a beautiful choice for celebrations, traditional gatherings and special occasions.',
    inspiration:
      'Inspired by the rich beauty of green gemstones and timeless traditional jewellery craftsmanship.',
    styling: [
      'Pair with traditional outfits for weddings and festive celebrations.',
      'Style with complementary earrings for a coordinated jewellery look.',
      'Choose solid-coloured outfits to let the green stones stand out.',
    ],
    specs: [
      { label: 'Product type', value: 'AD Necklace Set' },
      { label: 'Stone colour', value: 'Green' },
      { label: 'Collection', value: 'Green Stone Jewellery' },
      detailNote,
    ],
    images: [
      {
        key: 'greenStoneAD',
        alt: 'Green Stone AD Necklace Set product photograph',
      },
      {
        key: 'statementSet',
        alt: 'Model wearing Green Stone AD Necklace Set',
      },
    ],
    metaDescription:
      'Explore the Green Stone AD Necklace Set by TRENDS JEWELLERS. Discover elegant green stone jewellery for weddings, celebrations and special occasions.',
  },

  {
    slug: 'pink-green-stone-ad-necklace-set',
    name: 'Pink & Green Stone AD Necklace Set',
    collection: 'Multicolour Stone Necklace Sets',
    shortDescription:
      'A beautiful AD necklace set combining pink and green stone colours for an elegant, colourful look.',
    description:
      'The Pink & Green Stone AD Necklace Set by TRENDS JEWELLERS brings together two attractive stone colours in one graceful jewellery design. The combination of pink and green creates a distinctive appearance, making this necklace set suitable for festive events, family functions and celebrations.',
    inspiration:
      'Inspired by the harmonious combination of vibrant pink and refreshing green stone colours.',
    styling: [
      'Pair with ethnic outfits featuring pink, green or complementary shades.',
      'Wear for weddings, festive occasions and family celebrations.',
      'Coordinate with matching accessories for a complete traditional look.',
    ],
    specs: [
      { label: 'Product type', value: 'AD Necklace Set' },
      { label: 'Stone colours', value: 'Pink and Green' },
      { label: 'Collection', value: 'Multicolour Stone Jewellery' },
      detailNote,
    ],
    images: [
      {
        key: 'pinkEmeraldAD',
        alt: 'Pink and Green Stone AD Necklace Set product photograph',
      },
      {
        key: 'droplet',
        alt: 'Model wearing Pink and Green Stone AD Necklace Set',
      },
    ],
    metaDescription:
      'Shop the Pink & Green Stone AD Necklace Set from TRENDS JEWELLERS. Explore colourful traditional jewellery for weddings and festive occasions.',
  },

  {
    slug: 'royal-emerald-ruby-necklace-set',
    name: 'Royal Emerald Ruby Necklace Set',
    collection: 'Emerald Ruby Necklace Sets',
    shortDescription:
      'A royal-inspired emerald and ruby necklace set featuring a rich combination of gemstone colours.',
    description:
      'Experience the distinctive appeal of the Royal Emerald Ruby Necklace Set by TRENDS JEWELLERS. Combining the rich appearance of emerald and ruby colours, this jewellery design creates an elegant statement for traditional celebrations, weddings and memorable occasions.',
    inspiration:
      'Inspired by the regal appeal of emerald green and ruby red, two timeless colours in traditional jewellery.',
    styling: [
      'Style with traditional sarees and elegant ethnic outfits.',
      'Choose complementary colours to highlight the emerald and ruby combination.',
      'Wear for weddings, receptions and grand festive celebrations.',
    ],
    specs: [
      { label: 'Product type', value: 'Emerald Ruby Necklace Set' },
      { label: 'Stone colours', value: 'Emerald Green and Ruby Red' },
      { label: 'Collection', value: 'Royal Stone Jewellery' },
      detailNote,
    ],
    images: [
      {
        key: 'royalEmeraldRuby',
        alt: 'Royal Emerald Ruby Necklace Set product photograph',
      },
      {
        key: 'choker',
        alt: 'Model wearing Royal Emerald Ruby Necklace Set',
      },
    ],
    metaDescription:
      'Discover the Royal Emerald Ruby Necklace Set by TRENDS JEWELLERS. Elegant emerald and ruby colour jewellery for weddings and special occasions.',
  },

  {
    slug: 'emerald-queen-bridal-necklace-set',
    name: 'Emerald Queen Bridal Necklace Set',
    collection: 'Bridal Necklace Sets',
    shortDescription:
      'An elegant bridal necklace set featuring an emerald-inspired design for memorable wedding celebrations.',
    description:
      'The Emerald Queen Bridal Necklace Set by TRENDS JEWELLERS is designed for those special moments when jewellery completes the entire bridal look. Featuring an emerald-inspired appearance, this necklace set brings a graceful and statement-making touch to wedding ceremonies, receptions and traditional celebrations.',
    inspiration:
      'Inspired by royal bridal elegance and the timeless charm of emerald-inspired jewellery.',
    styling: [
      'Pair with bridal lehengas, sarees and traditional wedding outfits.',
      'Coordinate with complementary earrings and bridal accessories.',
      'Choose matching outfit colours to create a balanced bridal appearance.',
    ],
    specs: [
      { label: 'Product type', value: 'Bridal Necklace Set' },
      { label: 'Design theme', value: 'Emerald-inspired' },
      { label: 'Collection', value: 'Bridal Jewellery' },
      detailNote,
    ],
    images: [
      {
        key: 'emeraldQueenBridal',
        alt: 'Emerald Queen Bridal Necklace Set product photograph',
      },
      {
        key: 'presentation',
        alt: 'Model wearing Emerald Queen Bridal Necklace Set',
      },
    ],
    metaDescription:
      'Explore the Emerald Queen Bridal Necklace Set by TRENDS JEWELLERS. Discover elegant bridal jewellery for weddings and special celebrations.',
  },
];

export const getNecklace = (
  slug: string | undefined
): Necklace | undefined =>
  necklaces.find((n) => n.slug === slug);

export const featuredSlugs = [
  'green-stone-ad-necklace-set',
  'pink-green-stone-ad-necklace-set',
  'royal-emerald-ruby-necklace-set',
  'emerald-queen-bridal-necklace-set',
];

export const signatureSlugs = [
  'emerald-queen-bridal-necklace-set',
  'royal-emerald-ruby-necklace-set',
  'green-stone-ad-necklace-set',
];

export const relatedNecklaces = (
  slug: string,
  count = 3
): Necklace[] => {
  const i = necklaces.findIndex((n) => n.slug === slug);

  if (i === -1) return necklaces.slice(0, count);

  return Array.from(
    { length: Math.min(count, necklaces.length - 1) },
    (_, k) => necklaces[(i + 1 + k) % necklaces.length]
  );
};
