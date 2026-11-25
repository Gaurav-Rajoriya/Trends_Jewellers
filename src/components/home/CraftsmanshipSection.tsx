import Img from '../common/Img';
import SectionHeading from '../common/SectionHeading';

const points = [
  { title: 'The Cut', text: 'A diamond is judged by how it handles light. Every facet exists to catch it and return it to the eye.' },
  { title: 'The Setting', text: 'A good setting holds a stone securely and then steps back, so the diamond is what you notice.' },
  { title: 'The Design', text: 'A necklace must work with the neckline, the movement of the wearer and the moment it is worn for.' },
];

export default function CraftsmanshipSection() {
  return (
    <section className="section section-dark" aria-label="Diamond craftsmanship">
      <div className="wrap split">
        <div className="split-media" data-clip data-parallax>
          <Img name="macroOne" alt="Close-up of faceted diamonds catching light" sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div>
          <SectionHeading eyebrow="Diamond Craftsmanship" title="The Craft of Brilliance" text="Behind every elegant diamond necklace is a quiet understanding of light, proportion and restraint." />
          <ul className="points" data-stagger>
            {points.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
