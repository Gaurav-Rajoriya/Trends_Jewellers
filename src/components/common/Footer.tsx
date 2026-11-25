
import { Link } from 'react-router-dom';
import { footerNav, legalNav } from '../../data/navigation';
import { site } from '../../config/site';

const products = [
  {
    label: 'Green Stone AD Necklace Set',
    to: '/products/green-stone-ad-necklace-set',
  },
  {
    label: 'Pink & Green Stone AD Necklace Set',
    to: '/products/pink-green-stone-ad-necklace-set',
  },
  {
    label: 'Royal Emerald Ruby Necklace Set',
    to: '/products/royal-emerald-ruby-necklace-set',
  },
  {
    label: 'Emerald Queen Bridal Necklace Set',
    to: '/products/emerald-queen-bridal-necklace-set',
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">

        <div className="footer-grid">

          {/* Company Information */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img
                src="https://export4tradeindia.com/vendor/company_logo/company_WhatsApp_Image_2026-11-20_at_3_55_03_PM_6b002131e2cd8.jpeg"
                alt="Trends Jewellers"
              />
            </Link>

            <p className="footer-description">
              Discover timeless beauty and elegance with Trends Jewellers.
              Explore our exclusive collection of beautifully crafted
              jewellery, designed to make every occasion special.
            </p>

            <p className="footer-tag">
              WHERE ELEGANCE MEETS ETERNITY
            </p>
          </div>

          {/* Explore */}
          <nav className="footer-column" aria-label="Footer navigation">
            <h4>Explore</h4>

            {footerNav.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Products */}
          <nav className="footer-column" aria-label="Our products">
            <h4>Our Collections</h4>

            {products.map((product) => (
              <Link key={product.to} to={product.to}>
                {product.label}
              </Link>
            ))}
          </nav>

          {/* Legal */}
          <nav className="footer-column" aria-label="Legal">
            <h4>Quick Links</h4>

            {legalNav.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Media */}
          {site.social.length > 0 && (
            <nav className="footer-column" aria-label="Social media">
              <h4>Follow Us</h4>

              {site.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </nav>
          )}

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">

          <div className="footer-copyright">
            <p>
              © {new Date().getFullYear()} Trends Jewellers.
              All Rights Reserved.
            </p>

            <p>
              All Rights Reserved by{' '}
              <a
                href="https://export4tradeindia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Export 4 Trade India Pvt. Ltd.
              </a>
            </p>
          </div>

          {/* Membership Logo */}
          <div className="footer-member">
            <img
              src="https://ms-export.co.in/wp-content/uploads/2024/01/MEMBER-OF-2.png"
              alt="Member of Export 4 Trade India"
            />
          </div>

        </div>

      </div>
    </footer>
  );
}
