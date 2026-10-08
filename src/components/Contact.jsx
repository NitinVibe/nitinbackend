import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  FileText,
  Send
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ triggerConfetti, openResumeModal }) {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    if (triggerConfetti) triggerConfetti();
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    if (triggerConfetti) triggerConfetti();
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setFormSubmitted(true);
    if (triggerConfetti) triggerConfetti();

    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-36 border-t border-slate-200 dark:border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial CTA */}
        <div className="max-w-2xl space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-500 font-semibold">
            Contact / Opportunities
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA]">
            Have a project in mind? <br />
            <span className="text-slate-500 dark:text-[#8B93A1]">Let's build something useful.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#8B93A1] pt-1">
            I am currently open to full-time Python backend, full-stack, and engineering opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Direct Outreach */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-5 sm:space-y-6">
              
              {/* Email */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">Email</span>
                <div className="flex items-center gap-3">
                  <a 
                    href={`mailto:${personal.email}`} 
                    className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors link-underline truncate"
                  >
                    {personal.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">Phone & WhatsApp</span>
                <div className="flex items-center gap-3">
                  <a 
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`} 
                    className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {personal.phone}
                  </a>
                  <button
                    onClick={copyPhone}
                    className="p-1.5 rounded text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">Location</span>
                <p className="text-sm font-medium text-slate-700 dark:text-[#8B93A1]">
                  {personal.location}
                </p>
              </div>

              {/* Social Links with Real Custom Links */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center gap-4 text-xs font-mono">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors font-semibold"
                >
                  <LinkedinIcon size={14} />
                  <span>LinkedIn (nitinvibe)</span>
                  <ArrowUpRight size={12} />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-semibold"
                >
                  <GithubIcon size={14} />
                  <span>GitHub (NitinVibe)</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            {formSubmitted ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <Check size={18} />
                  <span className="font-semibold text-sm">Message Prepared</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Your mail client has been opened with your inquiry pre-filled for <strong>{personal.email}</strong>. Nitin will reply promptly!
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline pt-2 font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 dark:text-slate-400 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Nitin"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-white/[0.03] border border-slate-300 dark:border-white/[0.1] text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 dark:text-slate-400 mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. nitin@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-white/[0.03] border border-slate-300 dark:border-white/[0.1] text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-600 dark:text-slate-400 mb-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Python Backend Engineer role"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-white/[0.03] border border-slate-300 dark:border-white/[0.1] text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-600 dark:text-slate-400 mb-1">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Nitin, we'd like to talk about..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white dark:bg-white/[0.03] border border-slate-300 dark:border-white/[0.1] text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500 resize-none"
                  ></textarea>
                </div>

                <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white dark:text-slate-950 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm"
                  >
                    <Send size={13} />
                    <span>Send Message</span>
                  </button>

                  {openResumeModal && (
                    <button
                      type="button"
                      onClick={openResumeModal}
                      className="text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-1"
                    >
                      <FileText size={13} />
                      <span>Download CV</span>
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
