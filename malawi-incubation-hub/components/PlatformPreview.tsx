"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", icon: "🏠" },
  { label: "My Profile", icon: "👤" },
  { label: "Business Plan", icon: "📝" },
  { label: "Training Center", icon: "🎓" },
  { label: "Mentors", icon: "👥" },
  { label: "Investors", icon: "💰" },
  { label: "Funding", icon: "📊" },
  { label: "Analytics", icon: "📈" },
  { label: "Events", icon: "📅" },
  { label: "Resource Center", icon: "📚" },
];

export default function PlatformPreview() {
  const [activeMessage, setActiveMessage] = useState<string | null>(null);

  const handleAction = (feature: string) => {
    setActiveMessage(`Simulating: Starting ${feature} flow...`);
    setTimeout(() => setActiveMessage(null), 3000);
  };

  return (
    <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-700 aspect-video flex">
      {/* A. Sidebar Navigation */}
      <aside className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col p-4">
        <div className="mb-8 px-4">
          <div className="w-8 h-8 bg-blue-500 rounded-lg" />
        </div>
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleAction(item.label)}
              className="w-full flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-xl transition-all text-sm font-medium"
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mt-auto space-y-1 border-t border-slate-700 pt-4">
          <button onClick={() => handleAction("Settings")} className="w-full flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-white rounded-xl text-sm font-medium">
            <span>⚙️</span> Settings
          </button>
          <button onClick={() => handleAction("Logout")} className="w-full flex items-center gap-3 px-4 py-2 text-rose-400 hover:bg-rose-500/10 rounded-xl text-sm font-medium">
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-slate-50 flex flex-col overflow-hidden">
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8">
          <h2 className="text-lg font-bold text-slate-800">Workspace Dashboard</h2>
          <button 
            onClick={() => handleAction("Save")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors"
          >
            Save & Continue
          </button>
        </header>

        <div className="flex-1 p-8 overflow-y-auto space-y-8">
          {/* B. Center Quick Actions */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <button onClick={() => handleAction("Business Plan")} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">📝</div>
              <span className="text-xs font-bold text-slate-700">Submit Business Plan</span>
            </button>
            <button onClick={() => handleAction("Mentor Booking")} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">👥</div>
              <span className="text-xs font-bold text-slate-700">Book a Mentor</span>
            </button>
            <button onClick={() => handleAction("Academy")} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">🎓</div>
              <span className="text-xs font-bold text-slate-700">Join Training</span>
            </button>
            <button onClick={() => handleAction("Investor Match")} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">💰</div>
              <span className="text-xs font-bold text-slate-700">Find Investors</span>
            </button>
            <button onClick={() => handleAction("Analytics")} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">📈</div>
              <span className="text-xs font-bold text-slate-700">View Analytics</span>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* C. Contextual Utility Buttons (Events) */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-800">Upcoming Events</h3>
                <button 
                  onClick={() => handleAction("All Events")}
                  className="text-blue-600 text-xs font-bold hover:underline"
                >
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex flex-col items-center justify-center">
                      <span className="text-[10px] font-black leading-none">JUN</span>
                      <span className="text-sm font-black leading-none">{10 + i}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 tracking-tight">Venture Capital Pitch Day</p>
                      <p className="text-[10px] text-slate-400">Main Conference Hall • 10:00 AM</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Assistant Card */}
            <div className="bg-purple-600 p-6 rounded-3xl text-white shadow-xl shadow-purple-600/20 relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-2">AI Business Assistant</h3>
                <p className="text-purple-100 text-sm leading-relaxed mb-6 max-w-[200px]">
                  Get instant smart guidance for your startup roadmap and business plan.
                </p>
              </div>
              <button 
                onClick={() => handleAction("AI Assistant")}
                className="w-full py-3 bg-white text-purple-600 rounded-2xl font-bold text-sm shadow-lg hover:bg-purple-50 transition-colors relative z-10"
              >
                Ask Something...
              </button>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Modal Overlay Simulation */}
        {activeMessage && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 text-center">
             <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">⚡</div>
                <h4 className="text-xl font-black text-slate-800 mb-2">Interactive Prototype</h4>
                <p className="text-slate-500 font-medium leading-relaxed max-w-xs mx-auto">
                   {activeMessage}
                </p>
             </div>
          </div>
        )}
      </main>
    </div>
  );
}
