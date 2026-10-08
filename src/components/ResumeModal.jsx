import React from 'react';
import { 
  X, 
  Printer, 
  Check, 
  Copy, 
  FileText 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyAsPlainText = () => {
    const text = `NITIN SINGH TANWAR
PYTHON BACKEND DEVELOPER | PYTHON FULL-STACK DEVELOPER
Jaipur, Rajasthan | +91 9216455893 | tanwarsinghnitin@gmail.com
LinkedIn: https://www.linkedin.com/in/nitinvibe | GitHub: https://github.com/NitinVibe

PROFESSIONAL SUMMARY
Computer Science Engineering student and Python Backend Developer with hands-on experience developing web applications and backend systems using Python, FastAPI, PostgreSQL, REST APIs, Pydantic, and JWT authentication. Experienced in database-driven applications, CRUD operations, API development, RSS-based news aggregation, web scraping, and frontend integration using HTML, CSS, and Jinja2. During internship, contributed to real-world projects including wedding event platforms, vendor management systems, and furniture e-commerce projects. Seeking a full-time opportunity as a Python Backend Developer or Python Full-Stack Developer.

PROFESSIONAL EXPERIENCE
Python Backend Developer Intern — ONEPIXEL Soft
2026 – Present | Jaipur, Rajasthan
• Developed and contributed to web applications and backend systems using Python and FastAPI.
• Worked with PostgreSQL for database operations, CRUD functionality, queries, constraints, and data management.
• Developed and integrated REST APIs for application features and business requirements.
• Implemented JWT-based authentication and request validation using Pydantic.
• Integrated Python backend applications with PostgreSQL using psycopg.
• Contributed to real-world websites including wedding event, vendor management, and furniture e-commerce projects.
• Worked on backend functionality, database integration, API development, and frontend-backend integration.
• Developed and maintained an RSS-based news aggregation website using Python, FastAPI, PostgreSQL, and Jinja2.
• Debugged and resolved backend, API, validation, database, and integration issues.

PROJECT
RajPedia — RSS News Aggregation Website
Python | FastAPI | PostgreSQL | RSS | Jinja2 | HTML | CSS
• Developed an RSS-based news aggregation website for collecting and displaying news content.
• Built backend functionality using Python and FastAPI and used PostgreSQL for storing and managing news data.
• Implemented automated news fetching and developed APIs for retrieving and managing news information.
• Integrated backend services with a web interface using Jinja2, HTML, and CSS.

TECHNICAL SKILLS
Programming Languages: Python, SQL, C, C++
Backend Development: FastAPI, REST APIs, CRUD Operations, Pydantic, JWT Authentication
Databases: PostgreSQL, SQL, psycopg
Web Development: HTML, CSS, Jinja2
Web Scraping & Data Extraction: BeautifulSoup
Python Libraries: Pandas, OpenPyXL, Pillow, QRCode
Developer Tools: Git, GitHub, VS Code, Swagger / OpenAPI
Currently Learning: Advanced Python, AWS, Cloud Fundamentals

EDUCATION
Bachelor of Technology — Computer Science & Engineering (Artificial Intelligence)
Shri Balaji College of Engineering & Technology, Jaipur | Rajasthan Technical University | 2025 – 2029

TRAINING
C & C++ Programming Trainee — Shri Balaji College of Engineering & Technology
06/2026 – 07/2026 | Jaipur, Rajasthan
• Completed a 15-day in-house training program in C and C++. Covered OOP, STL, file handling, problem-solving fundamentals, and console-based C++ projects.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Modal Controls Header */}
        <div className="p-3 sm:p-4 sm:px-6 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <FileText className="text-emerald-500 shrink-0" size={18} />
            <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm truncate">Nitin Singh Tanwar — Resume</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={copyAsPlainText}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              title="Copy as plain text"
            >
              {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors ml-1"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-5 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans text-xs sm:text-sm space-y-6 select-text print:p-0">
          
          {/* Resume Header */}
          <div className="text-center space-y-1.5 border-b border-slate-300 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-slate-900 uppercase">
              NITIN SINGH TANWAR
            </h1>
            <p className="text-xs sm:text-sm font-bold tracking-widest text-slate-700 uppercase">
              PYTHON BACKEND DEVELOPER | PYTHON FULL-STACK DEVELOPER
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-slate-600 pt-1">
              <span>Jaipur, Rajasthan</span>
              <span>|</span>
              <span>+91 9216455893</span>
              <span>|</span>
              <a href="mailto:tanwarsinghnitin@gmail.com" className="text-emerald-700 underline">tanwarsinghnitin@gmail.com</a>
              <span>|</span>
              <a href="https://www.linkedin.com/in/nitinvibe" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">LinkedIn</a>
              <span>|</span>
              <a href="https://github.com/NitinVibe" target="_blank" rel="noreferrer" className="text-slate-900 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-0.5">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-slate-700 leading-relaxed text-justify">
              Computer Science Engineering student and Python Backend Developer with hands-on experience developing web applications and backend systems using Python, FastAPI, PostgreSQL, REST APIs, Pydantic, and JWT authentication. Experienced in database-driven applications, CRUD operations, API development, RSS-based news aggregation, web scraping, and frontend integration using HTML, CSS, and Jinja2. During internship, contributed to real-world projects including wedding event platforms, vendor management systems, and furniture e-commerce projects. Seeking a full-time opportunity as a Python Backend Developer or Python Full-Stack Developer.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-2">
            <h2 className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-0.5">
              PROFESSIONAL EXPERIENCE
            </h2>
            
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:justify-between items-baseline font-bold text-slate-900 gap-1">
                <span>Python Backend Developer Intern — ONEPIXEL Soft</span>
                <span className="text-xs font-normal sm:font-bold">2026 – Present | Jaipur, Rajasthan</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700">
                <li>Developed and contributed to web applications and backend systems using <strong>Python</strong> and <strong>FastAPI</strong>.</li>
                <li>Worked with <strong>PostgreSQL</strong> for database operations, CRUD functionality, queries, constraints, and data management.</li>
                <li>Developed and integrated <strong>REST APIs</strong> for application features and business requirements.</li>
                <li>Implemented <strong>JWT-based authentication</strong> and request validation using <strong>Pydantic</strong>.</li>
                <li>Integrated Python backend applications with PostgreSQL using <strong>psycopg</strong>.</li>
                <li>Contributed to real-world websites including <strong>wedding event, vendor management, and furniture e-commerce projects</strong>.</li>
                <li>Worked on backend functionality, database integration, API development, and frontend-backend integration.</li>
                <li>Developed and maintained an <strong>RSS-based news aggregation website</strong> using Python, FastAPI, PostgreSQL, and Jinja2.</li>
                <li>Debugged and resolved backend, API, validation, database, and integration issues.</li>
              </ul>
            </div>
          </div>

          {/* Project */}
          <div className="space-y-2">
            <h2 className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-0.5">
              PROJECT
            </h2>

            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:justify-between items-baseline font-bold text-slate-900 gap-1">
                <span>RajPedia — RSS News Aggregation Website</span>
                <span className="text-xs font-semibold text-slate-600">Python | FastAPI | PostgreSQL | RSS | Jinja2 | HTML | CSS</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700">
                <li>Developed an RSS-based news aggregation website for collecting and displaying news content.</li>
                <li>Built backend functionality using Python and FastAPI and used PostgreSQL for storing and managing news data.</li>
                <li>Implemented automated news fetching and developed APIs for retrieving and managing news information.</li>
                <li>Integrated backend services with a web interface using Jinja2, HTML, and CSS.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-0.5">
              TECHNICAL SKILLS
            </h2>

            <div className="space-y-1 text-slate-700">
              <p><strong>Programming Languages:</strong> Python, SQL, C, C++</p>
              <p><strong>Backend Development:</strong> FastAPI, REST APIs, CRUD Operations, Pydantic, JWT Authentication</p>
              <p><strong>Databases:</strong> PostgreSQL, SQL, psycopg</p>
              <p><strong>Web Development:</strong> HTML, CSS, Jinja2</p>
              <p><strong>Web Scraping & Data Extraction:</strong> BeautifulSoup</p>
              <p><strong>Python Libraries:</strong> Pandas, OpenPyXL, Pillow, QRCode</p>
              <p><strong>Developer Tools:</strong> Git, GitHub, VS Code, Swagger / OpenAPI</p>
              <p><strong>Currently Learning:</strong> Advanced Python, AWS, Cloud Fundamentals</p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-1.5">
            <h2 className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-0.5">
              EDUCATION
            </h2>

            <div className="flex flex-col sm:flex-row sm:justify-between items-baseline font-bold text-slate-900">
              <span>Bachelor of Technology — Computer Science & Engineering (Artificial Intelligence)</span>
              <span className="text-xs">2025 – 2029</span>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm">
              Shri Balaji College of Engineering & Technology, Jaipur | Rajasthan Technical University
            </p>
          </div>

          {/* Training */}
          <div className="space-y-1.5">
            <h2 className="text-xs sm:text-sm font-extrabold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-0.5">
              TRAINING
            </h2>

            <div className="flex flex-col sm:flex-row sm:justify-between items-baseline font-bold text-slate-900">
              <span>C & C++ Programming Trainee — Shri Balaji College of Engineering & Technology</span>
              <span className="text-xs">06/2026 – 07/2026 | Jaipur, Rajasthan</span>
            </div>
            <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700">
              <li>Completed a 15-day in-house training program in C and C++. Covered OOP, STL, file handling, problem-solving fundamentals, and console-based C++ projects.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
