import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ openResumeModal }) {
  const { personal } = portfolioData;

  const focusAreas = [
    {
      title: "FastAPI & Async Backends",
      desc: "Architecting non-blocking REST APIs with typed request/response models and dependency injection."
    },
    {
      title: "Relational Database Design",
      desc: "Structuring clean PostgreSQL schemas, writing optimized queries with psycopg, and enforcing constraints."
    },
    {
      title: "Type Safety & Security",
      desc: "Strict runtime payload validation using Pydantic, route guards, and stateless JWT token authentication."
    },
    {
      title: "Data Pipelines & Templating",
      desc: "Building automated RSS ingestion systems, web scraping crawlers, and server-rendered Jinja2 interfaces."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 border-t border-slate-200 dark:border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-500 font-semibold">
            About / Engineering Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA]">
            Building systems that <br className="hidden sm:inline" />
            <span className="text-slate-500 dark:text-[#8B93A1]">actually work.</span>
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-[#8B93A1] text-base sm:text-lg leading-relaxed">
            <p>
              I am a Computer Science Engineering student specializing in <strong className="text-slate-900 dark:text-white font-semibold">Artificial Intelligence</strong> (2025–2029) and an active <strong className="text-slate-900 dark:text-white font-semibold">Python Backend Developer Intern at ONEPIXEL Soft</strong> in Jaipur, Rajasthan.
            </p>

            <p>
              My focus is on designing robust backend infrastructures: writing predictable REST endpoints, organizing relational data in PostgreSQL, enforcing zero-trust data validation with Pydantic, and building automated data harvesting systems like RSS parsers and scrapers.
            </p>

            <p className="text-sm sm:text-base text-slate-500 dark:text-[#64748B]">
              Whether collaborating on a wedding planning directory, vendor workflows, e-commerce ordering pipelines, or standalone news aggregators, I prioritize maintainable architectures and clear data contracts.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <button
                onClick={openResumeModal}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 link-underline"
              >
                <span>Read detailed curriculum vitae</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Technical Focus Grid */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-[#64748B] pb-2 border-b border-slate-200 dark:border-white/[0.08]">
              Primary Technical Focus
            </h3>

            <div className="space-y-5">
              {focusAreas.map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-[#F5F7FA]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-[#8B93A1] pl-3.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
