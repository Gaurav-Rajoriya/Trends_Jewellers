import SectionHeading from '../common/SectionHeading';

const blocks = [
  { n: '01', title: 'Timeless Designs', text: 'Necklaces made to be worn for years, not seasons.' },
  { n: '02', title: 'Diamond-Focused Collections', text: 'Our attention is on diamond necklaces and nothing else.' },
  { n: '03', title: 'Elegant Craftsmanship', text: 'Considered detail in every line, setting and finish.' },
  { n: '04', title: 'Personalised Assistance', text: 'Our team helps you find the right necklace for the moment.' },
];

export default function WhySection() {
  return (
    <section className="section" aria-label="Why TRENDS JEWELLERS">
      <div className="wrap">
        <SectionHeading eyebrow="Why TRENDS JEWELLERS" title="A Focused Approach to Fine Jewellery" />
        <div className="why-grid" data-stagger>
          {blocks.map((b) => (
            <div key={b.n} className="why-block">
              <span className="why-num">{b.n}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
