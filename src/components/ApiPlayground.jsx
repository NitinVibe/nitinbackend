import React, { useState } from 'react';
import { 
  Play, 
  Copy, 
  Check, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ApiPlayground({ triggerConfetti }) {
  const { apiSimulationEndpoints, personal } = portfolioData;
  const [selectedEndpointIndex, setSelectedEndpointIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('body'); // 'body' | 'headers' | 'curl'
  const [copied, setCopied] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);
  const [latency, setLatency] = useState(14.2);
  const [executionTimestamp, setExecutionTimestamp] = useState(new Date().toLocaleTimeString());

  // Form state for POST simulation
  const [senderName, setSenderName] = useState('Tech Recruiter');
  const [companyName, setCompanyName] = useState('Innovative Engineering Team');
  const [roleType, setRoleType] = useState('Python Backend Engineer');
  const [message, setMessage] = useState('Hi Nitin, we are impressed by your FastAPI and PostgreSQL projects and would love to chat.');
  const [postDispatchedSuccess, setPostDispatchedSuccess] = useState(false);

  const currentEndpoint = apiSimulationEndpoints[selectedEndpointIndex];

  const handleEndpointSelect = (idx) => {
    setSelectedEndpointIndex(idx);
    setPostDispatchedSuccess(false);
  };

  const handleExecute = () => {
    setIsLoading(true);
    setPostDispatchedSuccess(false);
    
    const randomLatency = (Math.random() * 8 + 11).toFixed(1);
    setLatency(parseFloat(randomLatency));

    setTimeout(() => {
      setIsLoading(false);
      setExecutionTimestamp(new Date().toLocaleTimeString());

      // Trigger high z-index celebration confetti effect
      if (triggerConfetti) {
        triggerConfetti();
      }

      if (currentEndpoint.method === 'POST') {
        setPostDispatchedSuccess(true);
      }
    }, 280);
  };

  const getActiveResponse = () => {
    if (currentEndpoint.method === 'POST') {
      return {
        status: "201 Created",
        simulation: true,
        recorded_payload: {
          sender_name: senderName,
          company: companyName,
          role: roleType,
          note: message
        },
        notice: "Demo sandbox active. Direct correspondence reaches Nitin at tanwarsinghnitin@gmail.com.",
        execution_time_ms: latency
      };
    }
    return {
      ...currentEndpoint.response,
      meta: {
        runtime: "FastAPI / Python (Simulated)",
        status_code: 200,
        content_type: "application/json",
        process_time_ms: latency
      }
    };
  };

  const getHeaders = () => {
    return {
      "content-type": "application/json; charset=utf-8",
      "server": "uvicorn / fastapi 0.111.0",
      "x-process-time": `${(latency / 1000).toFixed(4)}s`,
      "x-schema-validation": "pydantic-v2.7",
      "access-control-allow-origin": "*",
      "date": new Date().toUTCString()
    };
  };

  const getCurlCommand = () => {
    const url = `https://api.nitinsingh.dev${currentEndpoint.endpoint}`;
    if (currentEndpoint.method === 'POST') {
      const payload = JSON.stringify({
        sender_name: senderName,
        company: companyName,
        role: roleType,
        note: message
      }, null, 2);
      return `curl -X POST "${url}" \\\n  -H "Content-Type: application/json" \\\n  -d '${payload}'`;
    }
    return `curl -X GET "${url}" \\\n  -H "Accept: application/json"`;
  };

  const copyResponseJson = () => {
    navigator.clipboard.writeText(JSON.stringify(getActiveResponse(), null, 2));
    setCopied(true);
    if (triggerConfetti) triggerConfetti();
    setTimeout(() => setCopied(false), 2000);
  };

  const copyCurl = () => {
    navigator.clipboard.writeText(getCurlCommand());
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  return (
    <section id="api-docs" className="py-20 sm:py-24 md:py-32 border-t border-slate-200 dark:border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
          <div className="space-y-2 sm:space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-300 dark:border-white/[0.08] text-[11px] font-mono text-slate-700 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>INTERACTIVE BACKEND LAB & SIMULATION</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA]">
              Backend <br className="hidden sm:inline" />
              <span className="text-slate-500 dark:text-[#8B93A1]">API Lab.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-[#8B93A1] max-w-xs font-mono">
            Test live simulated REST endpoints and inspect real-time responses.
          </p>
        </div>

        {/* API Lab Workbench */}
        <div className="rounded-2xl bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-white/[0.08] overflow-hidden shadow-xl dark:shadow-2xl">
          
          {/* Top Bar / Endpoint Selector */}
          <div className="p-3.5 sm:p-5 bg-slate-50 dark:bg-[#07090D] border-b border-slate-200 dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
            
            {/* Endpoints scrollable on mobile */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
              {apiSimulationEndpoints.map((ep, idx) => {
                const isActive = selectedEndpointIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleEndpointSelect(idx)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-slate-900 dark:bg-white/[0.08] text-white font-semibold shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/[0.03]'
                    }`}
                  >
                    <span className={`text-[10px] font-bold px-1 py-0.2 rounded ${
                      ep.method === 'GET' 
                        ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' 
                        : 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                    }`}>
                      {ep.method}
                    </span>
                    <span>{ep.endpoint}</span>
                  </button>
                );
              })}
            </div>

            {/* Simulated Tag */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>FastAPI Schema</span>
            </div>

          </div>

          {/* Action Row & Endpoint Description */}
          <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-100/50 dark:bg-[#090D14]">
            <div>
              <div className="flex items-center gap-2.5">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  currentEndpoint.method === 'GET' 
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' 
                    : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                }`}>
                  {currentEndpoint.method}
                </span>
                <span className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
                  {currentEndpoint.endpoint}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                {currentEndpoint.description}
              </p>
            </div>

            {/* SEND REQUEST BUTTON */}
            <button
              onClick={handleExecute}
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all duration-150 disabled:opacity-50 shadow-md shadow-emerald-500/20 shrink-0 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                  <span>Executing Call...</span>
                </>
              ) : (
                <>
                  <Play size={13} className="fill-slate-950" />
                  <span>Send Request</span>
                </>
              )}
            </button>
          </div>

          {/* POST Request Editable Payload Form */}
          {currentEndpoint.method === 'POST' && (
            <div className="p-4 sm:p-6 bg-slate-50 dark:bg-[#080B11] border-b border-slate-200 dark:border-white/[0.06] space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-400 pb-1 border-b border-slate-200 dark:border-white/[0.04]">
                <span className="font-semibold text-slate-900 dark:text-white">Customize Request Payload (Pydantic Schema)</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400">application/json</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-500 text-[10px] mb-1">sender_name</label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#0D121B] border border-slate-300 dark:border-white/[0.08] text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 text-[10px] mb-1">company</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#0D121B] border border-slate-300 dark:border-white/[0.08] text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 text-[10px] mb-1">role_type</label>
                  <input
                    type="text"
                    value={roleType}
                    onChange={(e) => setRoleType(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#0D121B] border border-slate-300 dark:border-white/[0.08] text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-500 text-[10px] mb-1">message</label>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#0D121B] border border-slate-300 dark:border-white/[0.08] text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              {postDispatchedSuccess && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span className="font-semibold text-xs">Simulated Dispatch Successful!</span>
                  </div>
                  <a
                    href={`mailto:${personal.email}?subject=${encodeURIComponent(
                      `Inquiry from ${senderName} (${companyName})`
                    )}&body=${encodeURIComponent(
                      `Hi Nitin,\n\n${message}\n\nFrom: ${senderName} (${companyName})\nRole: ${roleType}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <span>Email this directly to Nitin</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Response Inspector Workbench */}
          <div className="p-4 sm:p-6 bg-slate-900 dark:bg-[#07090D] space-y-4 font-mono text-slate-100">
            
            {/* Inspector Tab Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 dark:border-white/[0.06] pb-3 text-xs">
              
              {/* Left Tabs */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('body')}
                  className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                    activeTab === 'body'
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Response JSON
                </button>
                <button
                  onClick={() => setActiveTab('headers')}
                  className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                    activeTab === 'headers'
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Headers
                </button>
                <button
                  onClick={() => setActiveTab('curl')}
                  className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                    activeTab === 'curl'
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  cURL
                </button>
              </div>

              {/* Status & Latency Badge */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{currentEndpoint.method === 'POST' ? '201 Created' : '200 OK'}</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <Clock size={12} className="text-emerald-400" />
                  <span>{latency}ms</span>
                </div>

                <button
                  onClick={activeTab === 'curl' ? copyCurl : copyResponseJson}
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white p-1 rounded transition-colors"
                  title="Copy"
                >
                  {(activeTab === 'curl' ? copiedCurl : copied) ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Active Tab Panel */}
            {isLoading ? (
              <div className="p-8 rounded-xl bg-slate-950 dark:bg-[#0A0E17] border border-slate-800 dark:border-white/[0.06] flex flex-col items-center justify-center space-y-3 min-h-[200px]">
                <div className="w-6 h-6 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-xs text-slate-400">Executing route & validating with Pydantic...</span>
              </div>
            ) : (
              <>
                {activeTab === 'body' && (
                  <div className="p-4 rounded-xl bg-slate-950 dark:bg-[#0A0E17] border border-slate-800 dark:border-white/[0.06] overflow-x-auto max-h-[340px] animate-in fade-in duration-200">
                    <pre className="text-xs text-slate-200 leading-relaxed font-mono">
                      {JSON.stringify(getActiveResponse(), null, 2)}
                    </pre>
                  </div>
                )}

                {activeTab === 'headers' && (
                  <div className="p-4 rounded-xl bg-slate-950 dark:bg-[#0A0E17] border border-slate-800 dark:border-white/[0.06] overflow-x-auto max-h-[340px] space-y-1.5 text-xs font-mono animate-in fade-in duration-200">
                    {Object.entries(getHeaders()).map(([k, v]) => (
                      <div key={k} className="flex gap-3">
                        <span className="text-slate-400 font-semibold">{k}:</span>
                        <span className="text-emerald-400">{v}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'curl' && (
                  <div className="p-4 rounded-xl bg-slate-950 dark:bg-[#0A0E17] border border-slate-800 dark:border-white/[0.06] overflow-x-auto max-h-[340px] text-xs font-mono animate-in fade-in duration-200">
                    <pre className="text-emerald-400 leading-relaxed">
                      {getCurlCommand()}
                    </pre>
                  </div>
                )}
              </>
            )}

            {/* Execution Footer Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400/90">
                <Check size={12} />
                <span>FastAPI route handler executed at {executionTimestamp}</span>
              </span>
              <span>FastAPI v0.111.0 · Pydantic v2.7</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
