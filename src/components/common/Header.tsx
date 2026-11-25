import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";
import MobileNavigation from "./MobileNavigation";
import { isNavActive, mainNav } from "../../data/navigation";
import { useEnquiry } from "../../context/EnquiryContext";
import { setScrollLocked } from "../../animations/smoothScroll";

export default function Header() {
  const { pathname } = useLocation();
  const { openEnquiry } = useEnquiry();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenu(false), [pathname]);
  useEffect(() => {
    setScrollLocked(menu);
    return () => setScrollLocked(false);
  }, [menu]);

  const solid = scrolled || pathname !== "/" || menu;

  return (
    <>
      <header
        className={`site-header ${solid ? "is-solid" : ""} ${scrolled ? "is-scrolled" : ""}`}
      >
        <AnnouncementBar />
        <div className="wrap header-bar">
          <Link to="/" className="logo" aria-label="TRENDS JEWELLERS home">
            <img
              src="https://export4tradeindia.com/vendor/company_logo/company_WhatsApp_Image_2026-11-20_at_3_55_03_PM_6b002131e2cd8.jpeg"
              alt="Trends Jewellers Logo"
              className="header-logo"
            />
          </Link>

          <nav className="desktop-nav" aria-label="Main">
            <ul>
              {mainNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={
                      isNavActive(item.to, pathname) ? "is-active" : ""
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <button
              type="button"
              className="btn btn-small"
              onClick={() => openEnquiry()}
            >
              <span>Enquire</span>
            </button>
            <button
              type="button"
              className={`menu-toggle ${menu ? "is-open" : ""}`}
              aria-expanded={menu}
              aria-controls="mobile-nav"
              aria-label={menu ? "Close menu" : "Open menu"}
              onClick={() => setMenu((m) => !m)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <MobileNavigation
        open={menu}
        pathname={pathname}
        onClose={() => setMenu(false)}
        onEnquire={() => {
          setMenu(false);
          openEnquiry();
        }}
      />
    </>
  );
}
