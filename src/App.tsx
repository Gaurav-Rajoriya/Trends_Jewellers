import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import PageTransition from './components/common/PageTransition';
import { EnquiryProvider } from './context/EnquiryContext';
import { initSmoothScroll } from './animations/smoothScroll';
import Home from './pages/Home';
import Collections from './pages/Collections';
import NecklaceDetails from './pages/NecklaceDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export default function App() {
  useEffect(() => initSmoothScroll(), []);
  return (
    <EnquiryProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/diamond-necklaces" element={<Collections />} />
            <Route path="/products/:slug" element={<NecklaceDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </EnquiryProvider>
  );
}
