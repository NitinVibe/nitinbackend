import React from 'react';
import { MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 sm:py-24 md:py-32 border-t border-slate-200 dark:border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-500 font-semibold">
            Work History / Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA]">
            Professional <br className="hidden sm:inline" />
            <span className="text-slate-500 dark:text-[#8B93A1]">experience.</span>
          </h2>
        </div>

        {/* Clean Timeline */}
        <div className="max-w-4xl space-y-10 sm:space-y-12">
          {experience.map((item) => (
            <div 
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 pb-10 sm:pb-12 border-b border-slate-200 dark:border-white/[0.06] last:border-b-0"
            >
              
              {/* Left Column: Period, Company, Location */}
              <div className="md:col-span-4 space-y-1.5 sm:space-y-2">
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold block">
                  {item.period}
                </span>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {item.role}
                </h3>

                <div className="text-sm font-medium text-slate-600 dark:text-[#8B93A1] space-y-0.5">
                  <p className="text-slate-800 dark:text-slate-300 font-semibold">{item.company}</p>
                  <p className="text-xs flex items-center gap-1 text-slate-500">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>

              {/* Right Column: Key Deliverables & Tech */}
              <div className="md:col-span-8 space-y-5">
                <ul className="space-y-2.5 sm:space-y-3 text-sm text-slate-600 dark:text-[#8B93A1] leading-relaxed">
                  {item.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
