import React, { useState, useEffect } from 'react';
import { triggerCelebration } from './utils/confetti';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ApiPlayground from './components/ApiPlayground';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    // Check saved theme or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme !== 'light';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const nextMode = !prev;
      if (nextMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return nextMode;
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#07090D] text-slate-900 dark:text-[#F5F7FA] transition-colors duration-200 relative selection:bg-emerald-500/20 selection:text-emerald-500">
      
      {/* 1. Navbar */}
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        openResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="overflow-x-hidden">
        {/* 2. Hero */}
        <Hero 
          openResumeModal={() => setIsResumeModalOpen(true)}
        />
        
        {/* 3. About */}
        <About 
          openResumeModal={() => setIsResumeModalOpen(true)}
        />
        
        {/* 4. Featured Projects */}
        <Projects />
        
        {/* 5. Experience */}
        <Experience />
        
        {/* 6. Skills */}
        <Skills />
        
        {/* 7. API Lab */}
        <ApiPlayground 
          triggerConfetti={triggerCelebration}
        />
        
        {/* 8. Education */}
        <Education />
        
        {/* 9. Contact */}
        <Contact 
          triggerConfetti={triggerCelebration}
          openResumeModal={() => setIsResumeModalOpen(true)}
        />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Printable & Downloadable Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </div>
  );
}
