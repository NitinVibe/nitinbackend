import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ArrowUpRight,
  FileText
} from 'lucide-react';

export default function Navbar({ darkMode, toggleDarkMode, openResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'api-docs', 'education', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'API Lab', href: '#api-docs' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3.5 bg-white/90 dark:bg-[#07090D]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-none' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Name */}
          <a 
            href="#home" 
            className="group flex items-center gap-2 text-sm font-bold tracking-tight text-slate-900 dark:text-white transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform duration-200"></span>
            <span>Nitin Singh Tanwar</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-150 py-1 ${
                    isActive
                      ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 dark:text-[#8B93A1] dark:hover:text-[#F5F7FA]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Side Actions: Theme, Resume, Let's Talk */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-[#8B93A1] dark:hover:text-[#F5F7FA] hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] transition-colors"
              aria-label="Toggle theme"
              title={darkMode ? "Switch to Light theme" : "Switch to Dark theme"}
            >
              {darkMode ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-slate-700" />}
            </button>

            <button
              onClick={openResumeModal}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-slate-300 dark:border-white/[0.1] transition-all"
            >
              Resume
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white dark:text-slate-950 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/[0.1]"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.1]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-white dark:bg-[#0E131A] border border-slate-200 dark:border-white/[0.1] shadow-2xl space-y-3 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-[#8B93A1] hover:text-emerald-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-white/[0.08] flex items-center gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openResumeModal();
                }}
                className="flex-1 py-2.5 rounded-lg text-xs font-medium text-center text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/[0.1] hover:bg-slate-100 dark:hover:bg-white/[0.04]"
              >
                View Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2.5 rounded-lg text-xs font-semibold text-center text-white dark:text-slate-950 bg-slate-900 dark:bg-white"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
