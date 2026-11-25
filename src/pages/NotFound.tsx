import { Link } from 'react-router-dom';
import { useSeo } from '../hooks/useSeo';

export default function NotFound() {
  useSeo({ title: 'Page not found | TRENDS JEWELLERS', description: 'The page you are looking for could not be found.', path: '/404', noindex: true });
  return (
    <header className="page-head not-found">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>This page could not be found</h1>
        <p className="lead">The page may have moved. Explore our diamond necklaces instead.</p>
        <Link to="/collections/diamond-necklaces" className="btn btn-solid">
          <span>View Collection</span>
        </Link>
      </div>
    </header>
  );
}
