import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education, trainings } = portfolioData;

  return (
    <section id="education" className="py-20 sm:py-24 md:py-32 border-t border-slate-200 dark:border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-500 font-semibold">
            Background / Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA]">
            Education & <br className="hidden sm:inline" />
            <span className="text-slate-500 dark:text-[#8B93A1]">foundations.</span>
          </h2>
        </div>

        {/* 2-Column Minimal Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Formal University Education */}
          <div className="space-y-4 pb-6 md:pb-0 border-b md:border-b-0 border-slate-200 dark:border-white/[0.06]">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Undergraduate Degree</span>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{education[0].duration}</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              {education[0].degree}
            </h3>

            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400/90 font-mono">
              Specialization: {education[0].specialization}
            </p>

            <div className="text-xs sm:text-sm text-slate-600 dark:text-[#8B93A1] space-y-0.5">
              <p className="text-slate-800 dark:text-slate-300 font-semibold">{education[0].institution}</p>
              <p>{education[0].affiliation}</p>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#8B93A1] leading-relaxed pt-1">
              {education[0].description}
            </p>
          </div>

          {/* In-House Technical Training */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Technical Program</span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{trainings[0].duration}</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              {trainings[0].title}
            </h3>

            <div className="text-xs sm:text-sm text-slate-600 dark:text-[#8B93A1] space-y-0.5">
              <p className="text-slate-800 dark:text-slate-300 font-semibold">{trainings[0].organization}</p>
              <p>{trainings[0].location}</p>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#8B93A1] leading-relaxed pt-1">
              {trainings[0].details}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
