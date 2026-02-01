
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if the current page has a light header area
  const isLightPage = ['/projects', '/services', '/contact'].includes(location.pathname);
  
  // Header background logic: Dark if scrolled OR if we're on a page that starts with a light background
  const headerBgClass = (isScrolled || isLightPage) 
    ? 'bg-charcoal-nav py-4 shadow-xl' 
    : 'bg-transparent py-6';

  const links = [{ name: 'Home', path: '/' }, ...NAV_LINKS];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${headerBgClass}`}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <div className="relative w-[36px] h-[40px] border-[4px] border-primary flex items-center justify-center">
              <span className="text-white font-headline text-xl font-extrabold">H</span>
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <h1 className="font-headline text-xl tracking-[0.05em] leading-none font-extrabold text-white uppercase group-hover:text-primary transition-colors">HUNAR</h1>
              <span className="text-[7px] font-bold tracking-[0.25em] text-primary uppercase mt-1">Interiors & Construction</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors relative group/link ${
                  location.pathname === link.path ? 'text-primary' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden lg:flex items-center justify-center px-6 h-10 border border-primary text-primary text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all">
              Request Quote
            </Link>
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-charcoal-nav flex flex-col items-center justify-center gap-8 p-10 md:hidden animate-in fade-in duration-300">
          <button className="absolute top-10 right-10 text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-2xl font-headline font-bold uppercase tracking-widest transition-colors ${
                location.pathname === link.path ? 'text-primary' : 'text-white hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="mt-8 px-10 py-4 border border-primary text-primary text-[12px] font-bold tracking-[0.2em] uppercase"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Inquire Now
          </Link>
        </div>
      )}

      {/* Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-1">
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <span className="text-white font-headline font-bold">H</span>
              </div>
              <div className="ml-3 flex flex-col">
                <span className="text-sm font-black tracking-widest leading-none">HUNAR</span>
                <span className="text-[6px] uppercase tracking-[0.3em] font-medium opacity-60">Interiors & Construction</span>
              </div>
            </div>
            <p className="text-xs text-white/40 leading-relaxed max-w-xs">
              Powered by MBSYS, HUNAR delivers world-class architectural interiors through the synergy of vision and engineering.
            </p>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8">Navigation</h5>
            <ul className="space-y-4 text-xs font-light text-white/60">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              {NAV_LINKS.map(link => (
                <li key={link.path}><Link to={link.path} className="hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8">Services</h5>
            <ul className="space-y-4 text-xs font-light text-white/60">
              <li>Interior Architecture</li>
              <li>Civil Construction</li>
              <li>Project Consultancy</li>
              <li>Structural MEP</li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8">Connect</h5>
            <div className="space-y-4 text-xs font-light text-white/60">
              <p>Ilyasnagar, Bangalore<br/>Karnataka, India</p>
              <p>concierge@hunar.archi</p>
              <p>+91 98863 74122</p>
              <div className="flex gap-4 pt-4">
                <span className="material-symbols-outlined text-sm opacity-40 hover:opacity-100 cursor-pointer">public</span>
                <span className="material-symbols-outlined text-sm opacity-40 hover:opacity-100 cursor-pointer">mail</span>
                <span className="material-symbols-outlined text-sm opacity-40 hover:opacity-100 cursor-pointer">call</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[8px] uppercase tracking-[0.4em] text-white/30">© 2024 HUNAR ARCHITECTURE & CONSTRUCTION. POWERED BY MBSYS.</p>
          <div className="flex gap-8">
            <span className="text-[8px] uppercase tracking-[0.4em] text-white/30 hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-white/30 hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
