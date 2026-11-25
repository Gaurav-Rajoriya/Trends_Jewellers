
import hero from '../assets/images/hero.png';

import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';
import banner3 from '../assets/images/banner3.png';
import banner4 from '../assets/images/banner4.png';

import model1 from '../assets/images/model1.png';
import model2 from '../assets/images/model2.png';
import model3 from '../assets/images/model3.png';
import model4 from '../assets/images/model4.png';

import greenStoneAD from '../assets/images/p1.png';
import pinkEmeraldAD from '../assets/images/p2.png';
import royalEmeraldRuby from '../assets/images/p3.png';
import emeraldQueenBridal from '../assets/images/p4.png';

export const IMAGE_IDS = {
  hero,

  editorial: banner1,
  rectangularPendant: banner2,
  tennis: banner3,
  crown: banner4,

  statementSet: model1,
  droplet: model2,
  choker: model3,
  presentation: model4,

  macroOne: greenStoneAD,
  macroTwo: pinkEmeraldAD,
  macroThree: royalEmeraldRuby,

  greenStoneAD,
  pinkEmeraldAD,
  royalEmeraldRuby,
  emeraldQueenBridal,
} as const;

export type ImageKey = keyof typeof IMAGE_IDS;

export const imageUrl = (key: ImageKey): string => IMAGE_IDS[key];
