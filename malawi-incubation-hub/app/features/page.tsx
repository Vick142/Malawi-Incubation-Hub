'use client';

import React, { useState } from 'react';

// --- Icons (SVG implementations to avoid dependency issues) ---
const Icons = {
  Home: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  Profile: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  ),
  BusinessPlan: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
  ),
  Training: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  ),
  Mentors: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  Investors: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  ),
  Funding: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  ),
  Analytics: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
  ),
  Events: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
  ),
  ResourceCenter: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
  ),
  Settings: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
  ),
  Logout: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
  Send: () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
  )
};

// --- Components ---

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
      active 
      ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/20' 
      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
    }`}
  >
    <span className={`${active ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}>
      <Icon />
    </span>
    <span className="font-medium text-sm">{label}</span>
  </button>
);

const ActionCard = ({ title, icon: Icon, color, onClick }: { title: string, icon: any, color: string, onClick: () => void }) => (
  <button
    onClick={onClick}
    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center group"
  >
    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
      <Icon />
    </div>
    <h3 className="text-sm font-semibold text-slate-700 leading-tight">{title}</h3>
  </button>
);

const EventItem = ({ title, location, time }: { title: string, location: string, time: string }) => (
  <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-50 bg-white hover:border-slate-200 transition-colors group cursor-pointer">
    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
      <Icons.Events />
    </div>
    <div className="flex-1">
      <h4 className="text-sm font-bold text-slate-800">{title}</h4>
      <div className="flex items-center gap-3 mt-1">
        <span className="flex items-center gap-1 text-[11px] text-slate-400">
          <Icons.Calendar /> {location}
        </span>
        <span className="flex items-center gap-1 text-[11px] text-slate-400">
          <Icons.Clock /> {time}
        </span>
      </div>
    </div>
  </div>
);

// --- Main Page ---

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('Home');
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [aiInput, setAiInput] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  const sidebarLinks = [
    { label: 'Home', icon: Icons.Home },
    { label: 'My Profile', icon: Icons.Profile },
    { label: 'Business Plan', icon: Icons.BusinessPlan },
    { label: 'Training Center', icon: Icons.Training },
    { label: 'Mentors', icon: Icons.Mentors },
    { label: 'Investors', icon: Icons.Investors },
    { label: 'Funding', icon: Icons.Funding },
    { label: 'Analytics', icon: Icons.Analytics },
    { label: 'Events', icon: Icons.Events },
    { label: 'Resource Center', icon: Icons.ResourceCenter },
  ];

  const handleActionClick = (title: string) => {
    setModalContent(`Launching: ${title}`);
    setTimeout(() => setModalContent(null), 2000);
  };

  const handleAiAsk = () => {
    if (!aiInput.trim()) return;
    setAiResponse("Analyzing your startup query... Our AI Advisor suggests focusing on market validation in the Lilongwe tech hub region.");
    setAiInput('');
    setTimeout(() => setAiResponse(null), 5000);
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-[#F8FAFC]">
      {/* 1. Left-Hand Sidebar Navigation Panel */}
      <aside className="w-72 bg-[#111827] flex flex-col p-6 sticky top-0 h-[calc(100vh-64px)] overflow-y-auto">
        {/* Top Brand Accent */}
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45"></div>
          </div>
          <span className="text-white font-extrabold text-lg tracking-tight">Hub Workspace</span>
        </div>

        {/* Primary Directory Lists */}
        <nav className="flex-1 space-y-2">
          {sidebarLinks.map((link) => (
            <SidebarItem 
              key={link.label} 
              icon={link.icon} 
              label={link.label} 
              active={activeTab === link.label}
              onClick={() => setActiveTab(link.label)}
            />
          ))}
        </nav>

        {/* Footer Section Links */}
        <div className="pt-6 mt-6 border-t border-slate-800 space-y-2">
          <SidebarItem icon={Icons.Settings} label="Settings" active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors">
            <Icons.Logout />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Workspace Dashboard Canvas */}
      <main className="flex-1 flex flex-col">
        {/* Header Section */}
        <header className="px-8 py-6 flex items-center justify-between border-b border-slate-100 bg-white sticky top-0 z-10">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Workspace Dashboard</h1>
            <p className="text-sm text-slate-500 font-medium mt-1">Welcome back, Entrepreneur. Here is your current progress.</p>
          </div>
          <button className="bg-[#2563EB] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20">
            Save & Continue
          </button>
        </header>

        {/* Scrollable Area */}
        <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
          
          {/* Quick Action Grid (5 High-Volatility Cards) */}
          <section>
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ml-1">Core Modules</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <ActionCard 
                title="Submit Business Plan" 
                icon={() => <span className="text-purple-600"><Icons.BusinessPlan /></span>} 
                color="bg-purple-50" 
                onClick={() => handleActionClick("Business Plan Portal")}
              />
              <ActionCard 
                title="Book a Mentor" 
                icon={() => <span className="text-indigo-600"><Icons.Mentors /></span>} 
                color="bg-indigo-50" 
                onClick={() => handleActionClick("Mentor Matchmaker")}
              />
              <ActionCard 
                title="Join Training" 
                icon={() => <span className="text-teal-600"><Icons.Training /></span>} 
                color="bg-teal-50" 
                onClick={() => handleActionClick("Incubation Curriculum")}
              />
              <ActionCard 
                title="Find Investors" 
                icon={() => <span className="text-orange-600"><Icons.Investors /></span>} 
                color="bg-orange-50" 
                onClick={() => handleActionClick("Venture Pipeline")}
              />
              <ActionCard 
                title="View Analytics" 
                icon={() => <span className="text-blue-600"><Icons.Analytics /></span>} 
                color="bg-blue-50" 
                onClick={() => handleActionClick("Market Insights")}
              />
            </div>
          </section>

          {/* Bottom Split Interactive Elements */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left Column: Upcoming Events */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-800">Upcoming Events</h3>
                <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">View All</button>
              </div>
              <div className="space-y-4">
                <EventItem 
                  title="Venture Capital Pitch Day" 
                  location="Main Conference Hall" 
                  time="10:00 AM" 
                />
                <EventItem 
                  title="Malawi Tech Expo 2026" 
                  location="Digital Hub Center" 
                  time="02:30 PM" 
                />
                <EventItem 
                  title="Legal Compliance Workshop" 
                  location="Virtual Meeting" 
                  time="09:00 AM" 
                />
              </div>
            </div>

            {/* Right Column: AI Business Assistant */}
            <div className="bg-[#A855F7] p-8 rounded-[2rem] shadow-xl shadow-purple-200 relative overflow-hidden flex flex-col justify-between group">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:rotate-12 transition-transform duration-700">
                <svg width="150" height="150" viewBox="0 0 100 100" fill="white">
                  <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M50 20 L20 70 L80 70 Z" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 border-b-2 border-r-2 border-white rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">AI Business Assistant</h3>
                <p className="text-purple-100 text-sm leading-relaxed mb-8 max-w-sm">
                  Get instant smart guidance for your startup roadmap and business plan development.
                </p>
              </div>

              <div className="relative z-10">
                {aiResponse && (
                  <div className="mb-4 p-4 bg-white/10 backdrop-blur-md rounded-xl text-xs text-white border border-white/20 animate-in fade-in slide-in-from-bottom-2">
                    {aiResponse}
                  </div>
                )}
                <div className="flex items-center gap-2 bg-white rounded-full p-2 pl-6 shadow-2xl">
                  <input 
                    type="text" 
                    placeholder="Ask Something..." 
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAiAsk()}
                    className="flex-1 bg-transparent border-none outline-none text-slate-800 text-sm font-medium"
                  />
                  <button 
                    onClick={handleAiAsk}
                    className="w-10 h-10 bg-[#111827] text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                  >
                    <Icons.Send />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Floating Action Modal (Mock) */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-slate-100 text-center animate-in zoom-in-95">
            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">{modalContent}</h4>
            <p className="text-sm text-slate-500">Connecting to the hub records...</p>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoom-in-95 { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes slide-in-from-bottom-2 { from { transform: translateY(8px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-in { animation: 0.3s ease-out forwards; }
        .fade-in { animation-name: fade-in; }
        .zoom-in-95 { animation-name: zoom-in-95; }
        .slide-in-from-bottom-2 { animation-name: slide-in-from-bottom-2; }
      `}</style>
    </div>
  );
}

