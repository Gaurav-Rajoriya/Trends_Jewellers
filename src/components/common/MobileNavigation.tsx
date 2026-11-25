import { Link } from 'react-router-dom';
import { isNavActive, mainNav } from '../../data/navigation';

interface Props {
  open: boolean;
  pathname: string;
  onClose: () => void;
  onEnquire: () => void;
}

export default function MobileNavigation({ open, pathname, onClose, onEnquire }: Props) {
  return (
    <div id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-hidden={!open} role="dialog" aria-label="Menu">
      <nav>
        <ul>
          {mainNav.map((item, i) => (
            <li key={item.to} style={{ transitionDelay: open ? `${0.12 + i * 0.07}s` : '0s' }}>
              <Link
                to={item.to}
                tabIndex={open ? 0 : -1}
                className={isNavActive(item.to, pathname) ? 'is-active' : ''}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button type="button" className="btn btn-solid" tabIndex={open ? 0 : -1} onClick={onEnquire}>
        <span>Enquire</span>
      </button>
    </div>
  );
}
