import { createElement } from 'react';

interface AnimatedHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

/** Heading split into words for a staggered reveal. Screen readers get the full text. */
export function AnimatedHeading({ text, as = 'h2', className }: AnimatedHeadingProps) {
  return createElement(
    as,
    { className, 'data-words': '', 'aria-label': text },
    text.split(' ').map((w, i) => (
      <span key={i} aria-hidden="true">
        <span className="word">
          <span className="word-inner">{w}</span>
        </span>{' '}
      </span>
    )),
  );
}

interface Props {
  eyebrow?: string;
  title: string;
  text?: string;
  as?: 'h1' | 'h2';
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, text, as = 'h2', align = 'left' }: Props) {
  return (
    <div className={`section-heading align-${align}`}>
      {eyebrow && (
        <p className="eyebrow" data-reveal>
          {eyebrow}
        </p>
      )}
      <AnimatedHeading as={as} text={title} />
      {text && (
        <p className="lead" data-reveal>
          {text}
        </p>
      )}
    </div>
  );
}
