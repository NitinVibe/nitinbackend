import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Check, 
  X, 
  Layers, 
  Database, 
  Server, 
  Radio, 
  Code2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects, personal } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState(null);

  const flagshipProject = projects.find(p => p.id === 'rajpedia') || projects[0];
  const secondaryProjects = projects.filter(p => p.id !== 'rajpedia');

  return (
    <section id="projects" className="py-20 sm:py-24 md:py-32 border-t border-slate-200 dark:border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="space-y-2 sm:space-y-3 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-500 font-semibold">
              Featured Work / Systems
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA]">
              Selected engineering <br className="hidden sm:inline" />
              <span className="text-slate-500 dark:text-[#8B93A1]">projects.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-[#8B93A1] max-w-xs font-mono">
            Production backends, automated ingestion systems, and relational databases.
          </p>
        </div>

        {/* 1. LARGE HERO FLAGSHIP PROJECT: RajPedia */}
        <div className="mb-10 sm:mb-14 rounded-2xl bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-white/[0.08] overflow-hidden group hover:border-emerald-500/40 transition-all duration-300 shadow-md dark:shadow-none">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Blueprint / Visual Area */}
            <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 bg-slate-50 dark:bg-[#07090D] border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/[0.06] flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    FEATURED FLAGSHIP 01
                  </span>
                  <span>FastAPI + PostgreSQL</span>
                </div>

                {/* Architecture Ingestion Diagram Box */}
                <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#0D121B] border border-slate-200 dark:border-white/[0.08] space-y-3 sm:space-y-4 font-mono text-xs text-slate-700 dark:text-slate-300 shadow-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/[0.06] text-slate-500 dark:text-slate-400 text-[11px]">
                    <span>RSS Ingestion Pipeline</span>
                    <span className="text-emerald-600 dark:text-emerald-400">Auto-Scheduled</span>
                  </div>

                  {/* Visual pipeline steps */}
                  <div className="space-y-2 text-[11px]">
                    <div className="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/[0.04]">
                      <Radio size={13} className="text-amber-500 dark:text-amber-400 shrink-0" />
                      <span className="text-slate-800 dark:text-slate-300 truncate">1. Parse Multi-Channel RSS Feeds (XML / DOM)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/[0.04]">
                      <Server size={13} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span className="text-slate-800 dark:text-slate-300 truncate">2. FastAPI Data Cleansing & Pydantic Schema</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/[0.04]">
                      <Database size={13} className="text-blue-500 dark:text-blue-400 shrink-0" />
                      <span className="text-slate-800 dark:text-slate-300 truncate">3. PostgreSQL Relational Storage & Indexing</span>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-500 pt-1 flex justify-between">
                    <span>Query: FastAPI REST</span>
                    <span>Rendering: Jinja2 Templates</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature List */}
              <div className="pt-6 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Core Highlights</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Check size={13} className="text-emerald-500 shrink-0" />
                    <span>Automated feed harvesting</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check size={13} className="text-emerald-500 shrink-0" />
                    <span>PostgreSQL category indices</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check size={13} className="text-emerald-500 shrink-0" />
                    <span>Server-side Jinja2 delivery</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check size={13} className="text-emerald-500 shrink-0" />
                    <span>REST search & filter APIs</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Project Details Area */}
            <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {flagshipProject.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{flagshipProject.category}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {flagshipProject.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-[#8B93A1] leading-relaxed">
                  {flagshipProject.longDescription}
                </p>

                {/* Tech Stack List */}
                <div className="pt-2">
                  <span className="text-[11px] font-mono text-slate-500 block mb-2">Technologies Used</span>
                  <div className="flex flex-wrap gap-1.5">
                    {flagshipProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-200 dark:border-white/[0.06] flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setActiveModalProject(flagshipProject)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 link-underline"
                >
                  <span>View Project Specs</span>
                  <ArrowUpRight size={14} />
                </button>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  <GithubIcon size={14} />
                  <span>GitHub Repository</span>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* 2. ASYMMETRIC SECONDARY PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {secondaryProjects.slice(0, 2).map((project, idx) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all group shadow-sm dark:shadow-none"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>PROJECT 0{idx + 2}</span>
                  <span className="text-slate-600 dark:text-slate-400">{project.badge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#8B93A1] leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 inline-flex items-center gap-1"
                >
                  <span>Architecture Details</span>
                  <ArrowUpRight size={13} />
                </button>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  title="GitHub"
                >
                  <GithubIcon size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 3. WIDE SECONDARY CARDS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryProjects.slice(2).map((project, idx) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-white/[0.08] p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all group shadow-sm dark:shadow-none"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>SYSTEM 0{idx + 4}</span>
                  <span className="text-[10px] uppercase">{project.category}</span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h4>

                <p className="text-xs text-slate-600 dark:text-[#8B93A1] leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">
                  {project.techStack.slice(0, 3).join(' · ')}
                </span>
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs text-slate-500 hover:text-emerald-500 p-1"
                  title="View details"
                >
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Architectural Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-2xl bg-white dark:bg-[#0D121B] text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-white/[0.1] p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6">
            
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-white/[0.04]"
            >
              <X size={18} />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                {activeModalProject.badge} · {activeModalProject.category}
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                {activeModalProject.title}
              </h3>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeModalProject.longDescription}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Architectural Deliverables
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {activeModalProject.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/[0.08]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-slate-100 dark:bg-white/[0.06] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-emerald-500"
              >
                <GithubIcon size={14} />
                <span>Visit GitHub Profile</span>
              </a>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-lg text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.1]"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
