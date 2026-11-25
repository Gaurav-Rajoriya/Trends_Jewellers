import NecklaceCard from './NecklaceCard';
import type { Necklace } from '../../data/necklaces';

interface Props {
  items: Necklace[];
  columns?: 3 | 4;
}

export default function NecklaceGrid({ items, columns = 3 }: Props) {
  return (
    <div className={`necklace-grid cols-${columns}`} data-stagger>
      {items.map((n) => (
        <NecklaceCard key={n.slug} necklace={n} sizes={columns === 4 ? '(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw' : undefined} />
      ))}
    </div>
  );
}
