"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/logo.png";

// --- Custom SVGs for premium look & feel (No external dependencies) ---
const Icons = {
  Dashboard: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
  ),
  Profile: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
  ),
  BusinessPlan: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
  ),
  Training: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
  ),
  Mentors: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 15v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="7" r="4" /></svg>
  ),
  Investors: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
  ),
  Funding: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
  ),
  Analytics: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
  ),
  Events: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
  ),
  Resources: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
  ),
  Settings: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
  ),
  Logout: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
  ),
  Send: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
  )
};

type WorkspaceTab =
  | "dashboard"
  | "profile"
  | "business-plan"
  | "training"
  | "mentors"
  | "investors"
  | "funding"
  | "analytics"
  | "events"
  | "resources"
  | "settings";

interface SidebarItemProps {
  label: string;
  icon: () => React.JSX.Element;
  active: boolean;
  onClick: () => void;
}

const SidebarItem = ({ icon: Icon, label, active, onClick }: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden group ${active
      ? "bg-[#2563EB] text-white shadow-[inset_0_0_8px_rgba(255,255,255,0.2)] shadow-lg shadow-blue-600/30 font-bold"
      : "text-slate-400 hover:bg-slate-800/40 hover:text-slate-100 font-medium"
      }`}
  >
    <span className={`transition-colors duration-300 ${active ? "text-white" : "text-slate-500 group-hover:text-slate-300"}`}>
      <Icon />
    </span>
    <span className="text-sm tracking-wide">{label}</span>
    {active && (
      <span className="absolute right-0 top-0 bottom-0 w-1 bg-sky-300 rounded-l" />
    )}
  </button>
);

export default function FeaturesPage() {
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<WorkspaceTab>("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // --- Dynamic App States ---
  // Modal messages
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // AI assistant states
  const [aiInput, setAiInput] = useState("");
  const [aiResponses, setAiResponses] = useState<Array<{ sender: "user" | "bot"; text: string }>>([
    { sender: "bot", text: "Hello! I am your Daeyang Hub Advisor. Ask me anything about your startup model, pitch strategies, or incubation milestones." }
  ]);
  const [isAiTyping, setIsAiTyping] = useState(false);

  // Business plan config step (1-7)
  const [planStep, setPlanStep] = useState(1);
  const [planForm, setPlanForm] = useState({
    businessName: "",
    sector: "Agribusiness",
    description: "",
    customers: "",
    stage: "Idea"
  });

  // Educational center states
  const [trainingFilter, setTrainingFilter] = useState("All");
  const [courses, setCourses] = useState([
    { id: 1, title: "Business Planning Basics", category: "Business Planning", progress: 80, duration: "4 hours" },
    { id: 2, title: "Financial Management & Forecasting", category: "Finance", progress: 75, duration: "6 hours" },
    { id: 3, title: "Marketing & Scalability Strategies", category: "Marketing", progress: 65, duration: "5 hours" },
    { id: 4, title: "Startup Leadership & Strategy", category: "Leadership", progress: 0, duration: "3 hours" },
    { id: 5, title: "Pitching to Venture Capitalists", category: "Finance", progress: 10, duration: "4 hours" },
    { id: 6, title: "Customer Discovery & Agility", category: "Business Planning", progress: 95, duration: "3 hours" },
  ]);

  // Mentor Booking states
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null);
  const [bookingDate, setBookingDate] = useState("2026-06-12");
  const [bookingTime, setBookingTime] = useState("10:00 AM");

  // Investor match pipeline states
  const [investorStatuses, setInvestorStatuses] = useState<Record<number, string>>({
    1: "Connect Startup",
    2: "Request Grant Review",
    3: "Connect Startup",
    4: "Connect Startup"
  });

  // Trigger brief floating notifications
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleAiAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiInput.trim()) return;

    const query = aiInput;
    setAiResponses(prev => [...prev, { sender: "user", text: query }]);
    setAiInput("");
    setIsAiTyping(true);

    setTimeout(() => {
      let botText = "That's an interesting direction! For the Malawian market, focus on digital solutions that work well with lower internet data requirements and support mobile payments like Airtel Money/TNM Mpamba.";
      if (query.toLowerCase().includes("fund") || query.toLowerCase().includes("money") || query.toLowerCase().includes("capital")) {
        botText = "Daeyang Hub provides pathways to early seed grants. Prepare your Business Plan fully in the wizard, and apply for the Malawi Youth Enterprise Fund direct review in the Investors pipeline.";
      } else if (query.toLowerCase().includes("mentor") || query.toLowerCase().includes("coach")) {
        botText = "You can link with local experts like John Banda or Mary Phiri. Go to the Mentors tab to book a 1-on-1 development session.";
      } else if (query.toLowerCase().includes("agri") || query.toLowerCase().includes("farm")) {
        botText = "Agricultural technology has high venture success rates in Malawi. Look into supply-chain optimization matching smallholder farms to Lilongwe and Blantyre markets.";
      }

      setAiResponses(prev => [...prev, { sender: "bot", text: botText }]);
      setIsAiTyping(false);
    }, 1200);
  };

  const handleNextStep = () => {
    if (planStep < 7) {
      setPlanStep(prev => prev + 1);
      triggerToast(`Progress saved. Moved to Step ${planStep + 1}`);
    } else {
      triggerToast("Success! Your venture documentation has been submitted for Academic Board Review.");
      setPlanStep(1);
      setActiveWorkspaceTab("dashboard");
    }
  };

  const handleMentorBookingConfirm = () => {
    triggerToast(`Booking request submitted for ${selectedMentor} on ${bookingDate} at ${bookingTime}. Check inbox for confirm link.`);
    setSelectedMentor(null);
  };

  const handleInvestorAction = (id: number, name: string) => {
    const current = investorStatuses[id];
    let nextState = current;
    let message = "";

    if (current === "Connect Startup") {
      nextState = "Venture Pipeline Reviewing";
      message = `Pitch deck shared with ${name}. Status: Under Review.`;
    } else if (current === "Request Grant Review") {
      nextState = "Grant Application Filed";
      message = `Venture data packaged and forwarded to ${name} Grant Committee.`;
    } else {
      nextState = id === 2 ? "Request Grant Review" : "Connect Startup";
      message = `Connection request retracted from ${name}.`;
    }

    setInvestorStatuses(prev => ({ ...prev, [id]: nextState }));
    triggerToast(message);
  };

  const sidebarLinks = [
    { label: "Dashboard", icon: Icons.Dashboard, value: "dashboard" as const },
    { label: "My Profile", icon: Icons.Profile, value: "profile" as const },
    { label: "Business Plan", icon: Icons.BusinessPlan, value: "business-plan" as const },
    { label: "Training Center", icon: Icons.Training, value: "training" as const },
    { label: "Mentors", icon: Icons.Mentors, value: "mentors" as const },
    { label: "Investors", icon: Icons.Investors, value: "investors" as const },
    { label: "Funding Portal", icon: Icons.Funding, value: "funding" as const },
    { label: "Analytics Panel", icon: Icons.Analytics, value: "analytics" as const },
    { label: "Events Schedule", icon: Icons.Events, value: "events" as const },
    { label: "Resource Center", icon: Icons.Resources, value: "resources" as const },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* 1. LEFT SIDEBAR PANEL (Sticky on desktop, Collapsible slide drawer on mobile) */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 w-72 bg-[#0F172A] text-white flex flex-col p-6 h-screen overflow-y-auto transform transition-transform duration-300 ease-in-out border-r border-slate-800 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
      >
        {/* Brand/Platform Header */}
        <div className="flex items-center justify-between mb-10 px-0 shrink-0">
          <Link href="/" className="flex items-center group">
            <Image
              src={logo}
              alt="Smart Incubation Hub Logo"
              className="h-30 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Mobile Close Button */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Workspace Directory Lists */}
        <nav className="flex-1 space-y-1">
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-4 mb-3">Main Navigation</div>
          {sidebarLinks.map((item) => (
            <SidebarItem
              key={item.value}
              label={item.label}
              icon={item.icon}
              active={activeWorkspaceTab === item.value}
              onClick={() => {
                setActiveWorkspaceTab(item.value);
                setIsSidebarOpen(false); // Auto-close drawer on mobile selection
              }}
            />
          ))}
        </nav>

        {/* Footer Section Links */}
        <div className="pt-6 mt-6 border-t border-slate-800 space-y-1 shrink-0">
          <SidebarItem
            label="Workspace Settings"
            icon={Icons.Settings}
            active={activeWorkspaceTab === "settings"}
            onClick={() => {
              setActiveWorkspaceTab("settings");
              setIsSidebarOpen(false);
            }}
          />
          <button
            onClick={() => triggerToast("Session logged out. (Prototype Redirect to Login)")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-400 hover:bg-rose-500/10 font-semibold tracking-wide transition-all duration-300"
          >
            <Icons.Logout />
            <span className="text-sm">Log Out Workspace</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar backdrop */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden transition-opacity duration-300"
        />
      )}

      {/* 2. WORKSPACE CANVAS CONTAINER (Unified global scrolling) */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Workspace Canvas Header */}
        <header className="sticky top-0 z-30 h-20 bg-white/85 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-4">
            {/* Hamburger Trigger for Mobile */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none"
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Dynamic Page Indicator */}
            <div className="flex items-center gap-3">
              {/* Logo on mobile/tablet view only (hidden on desktop) */}
              <div className="lg:hidden block bg-[#0F172A] p-1.5 rounded-lg border border-white/10 shadow-sm shrink-0">
                <Image
                  src={logo}
                  alt="Daeyang Hub Logo"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Student Hub Console</span>
                <span className="text-lg sm:text-xl font-extrabold text-slate-800 tracking-tight capitalize block -mt-1">
                  {activeWorkspaceTab.replace("-", " ")} Workspace
                </span>
              </div>
            </div>
          </div>

          {/* User Profile Micro Indicator */}
          <div className="flex items-center gap-3">
            <span className="text-right hidden sm:block">
              <span className="text-xs font-black text-slate-700 block">Chisomo Banda</span>
              <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider block">Founder (Cohort 2026)</span>
            </span>
            <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 text-[#2563EB] font-black text-sm flex items-center justify-center">
              CB
            </div>
          </div>
        </header>

        {/* Dynamic Workspace Canvas View (Bounded in a balanced container) */}
        <main className="flex-grow p-6 lg:p-8">
          <div className="max-w-[1400px] mx-auto w-full space-y-8 animate-in fade-in duration-300">

            {/* ─── TAB VIEW: DASHBOARD ─── */}
            {activeWorkspaceTab === "dashboard" && (
              <div className="space-y-8">

                {/* Hero Panel Welcome text */}
                <div>
                  <h1 className="text-3xl font-black text-slate-900 tracking-tight">Workspace Dashboard</h1>
                  <p className="text-slate-500 font-medium mt-1">Welcome back, Entrepreneur. Let's grow your business today.</p>
                </div>

                {/* Metric Sub-cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  {/* Widget 1: Progress Circular Bar */}
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Cohort Progress</span>
                      <h3 className="text-lg font-black text-slate-800 leading-tight">Venture Formulation Stage</h3>
                      <p className="text-xs text-slate-400 font-bold mt-1">Completion of Core Incubation Blocks</p>
                    </div>
                    <div className="relative flex items-center justify-center shrink-0">
                      <svg className="w-20 h-20 transform -rotate-90">
                        <circle cx="40" cy="40" r="32" stroke="#F1F5F9" strokeWidth="6" fill="transparent" />
                        <circle cx="40" cy="40" r="32" stroke="#10B981" strokeWidth="6" fill="transparent"
                          strokeDasharray={201} strokeDashoffset={201 * (1 - 0.75)} strokeLinecap="round" />
                      </svg>
                      <div className="absolute text-sm font-black text-slate-800">75%</div>
                    </div>
                  </div>

                  {/* Widget 2: Funding target bar */}
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Funding Status</span>
                        <span className="text-[10px] bg-emerald-50 text-emerald-600 font-black px-2 py-0.5 rounded-full uppercase tracking-wider">Active</span>
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight">MwK 500,000</h3>
                      <p className="text-xs text-slate-400 font-bold mt-1">Early-stage Seed Target Pipeline</p>
                    </div>
                    <div className="mt-4">
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-1.5">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: "25%" }} />
                      </div>
                      <div className="flex justify-between text-[10px] font-bold text-slate-400">
                        <span>25% Complete</span>
                        <span>Goal of MwK 2,000,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Widget 3: Next Mentor calendar block */}
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50 flex items-center gap-6">
                    <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex flex-col items-center justify-center shrink-0">
                      <span className="text-[10px] font-black uppercase leading-none">MAY</span>
                      <span className="text-2xl font-black leading-none mt-1">24</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Next Mentor Session</span>
                      <h4 className="text-base font-black text-slate-800 tracking-tight leading-snug">Review with Advisory Panel</h4>
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 font-black text-[9px] uppercase tracking-wider mt-2">
                        <Icons.Calendar /> May 24, 2026 at 10:00 AM
                      </div>
                    </div>
                  </div>

                </div>

                {/* Core Quick Action Grid (Switches Tabs on Click with hover properties) */}
                <div>
                  <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 ml-1">Venture Launch Accelerator</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

                    {/* Item 1 */}
                    <button
                      onClick={() => setActiveWorkspaceTab("business-plan")}
                      className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/40 hover:-translate-y-1 hover:shadow-lg hover:border-purple-200 hover:shadow-purple-100/30 transition-all duration-300 flex flex-col items-center text-center group"
                    >
                      <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                        <Icons.BusinessPlan />
                      </div>
                      <h3 className="text-sm font-black text-slate-700 leading-tight">Submit Business Plan</h3>
                      <p className="text-[10px] text-slate-400 font-bold mt-1.5 block">Launch Wizard (0/7)</p>
                    </button>

                    {/* Item 2 */}
                    <button
                      onClick={() => setActiveWorkspaceTab("mentors")}
                      className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/40 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 hover:shadow-blue-100/30 transition-all duration-300 flex flex-col items-center text-center group"
                    >
                      <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                        <Icons.Mentors />
                      </div>
                      <h3 className="text-sm font-black text-slate-700 leading-tight">Book a Mentor</h3>
                      <p className="text-[10px] text-slate-400 font-bold mt-1.5 block">Book 1-on-1 Sessions</p>
                    </button>

                    {/* Item 3 */}
                    <button
                      onClick={() => setActiveWorkspaceTab("training")}
                      className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/40 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-200 hover:shadow-emerald-100/30 transition-all duration-300 flex flex-col items-center text-center group"
                    >
                      <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                        <Icons.Training />
                      </div>
                      <h3 className="text-sm font-black text-slate-700 leading-tight">Join Training</h3>
                      <p className="text-[10px] text-slate-400 font-bold mt-1.5 block">Access Courses Curriculum</p>
                    </button>

                    {/* Item 4 */}
                    <button
                      onClick={() => setActiveWorkspaceTab("investors")}
                      className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/40 hover:-translate-y-1 hover:shadow-lg hover:border-orange-200 hover:shadow-orange-100/30 transition-all duration-300 flex flex-col items-center text-center group"
                    >
                      <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                        <Icons.Investors />
                      </div>
                      <h3 className="text-sm font-black text-slate-700 leading-tight">Find Investors</h3>
                      <p className="text-[10px] text-slate-400 font-bold mt-1.5 block">Venture Grants Pipeline</p>
                    </button>

                    {/* Item 5 */}
                    <button
                      onClick={() => setActiveWorkspaceTab("analytics")}
                      className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/40 hover:-translate-y-1 hover:shadow-lg hover:border-cyan-200 hover:shadow-cyan-100/30 transition-all duration-300 flex flex-col items-center text-center group"
                    >
                      <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                        <Icons.Analytics />
                      </div>
                      <h3 className="text-sm font-black text-slate-700 leading-tight">View Analytics</h3>
                      <p className="text-[10px] text-slate-400 font-bold mt-1.5 block">Market Growth Variables</p>
                    </button>

                  </div>
                </div>

                {/* Split Row Layout: Events + AI Box */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                  {/* Left Column Upcoming Events */}
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/40 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-black text-slate-800 tracking-tight">Upcoming Incubation Events</h3>
                        <button
                          onClick={() => setActiveWorkspaceTab("events")}
                          className="text-xs font-black text-blue-600 hover:text-blue-700 hover:underline transition-all"
                        >
                          View Full Schedule
                        </button>
                      </div>

                      {/* Event items list */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-50 bg-slate-50/50 hover:border-slate-150 hover:bg-slate-50 transition-colors duration-300 cursor-pointer group">
                          <div className="w-12 h-12 bg-white text-slate-500 rounded-xl flex items-center justify-center border border-slate-150 shrink-0 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors duration-300">
                            <Icons.Events />
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-slate-800 tracking-tight">Venture Capital Pitch Day</h4>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed mt-0.5">Present concepts directly to Malawi Angel Investment partners.</p>
                            <div className="flex flex-wrap items-center gap-3 mt-2 text-[10px] font-bold text-slate-400">
                              <span className="flex items-center gap-1"><Icons.Calendar /> June 18, 2026</span>
                              <span className="flex items-center gap-1"><Icons.Clock /> 10:00 AM • Main Seminar Hall</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-50 bg-slate-50/50 hover:border-slate-150 hover:bg-slate-50 transition-colors duration-300 cursor-pointer group">
                          <div className="w-12 h-12 bg-white text-slate-500 rounded-xl flex items-center justify-center border border-slate-150 shrink-0 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors duration-300">
                            <Icons.Events />
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-slate-800 tracking-tight">Malawi Tech Expo 2026</h4>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed mt-0.5">Showcasing student-led digital models in central Malawi district.</p>
                            <div className="flex flex-wrap items-center gap-3 mt-2 text-[10px] font-bold text-slate-400">
                              <span className="flex items-center gap-1"><Icons.Calendar /> July 14, 2026</span>
                              <span className="flex items-center gap-1"><Icons.Clock /> 02:30 PM • Digital Hub Pavilion</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column AI Box */}
                  <div className="bg-[#A855F7] p-6 sm:p-8 rounded-[2rem] shadow-xl shadow-purple-200/50 relative overflow-hidden flex flex-col justify-between min-h-[340px]">
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transition-transform duration-700">
                      <svg width="150" height="150" viewBox="0 0 100 100" fill="white">
                        <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M50 20 L20 70 L80 70 Z" stroke="white" strokeWidth="2" fill="none" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/10 text-white font-bold text-xs uppercase tracking-wider">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          AI Hub Advisor Live
                        </div>
                      </div>
                      <h3 className="text-2xl font-black text-white tracking-tight mb-2">Daeyang Smart AI Assistant</h3>
                      <p className="text-purple-100 text-sm leading-relaxed max-w-md font-medium">
                        Get instant customized answers regarding agribusiness expansion, legal structures, intellectual property, or capital requirements.
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 space-y-4">
                      {/* Short response window */}
                      <div className="max-h-24 overflow-y-auto bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-xs text-white scrollbar-thin">
                        {aiResponses[aiResponses.length - 1]?.text}
                        {isAiTyping && (
                          <div className="flex items-center gap-1 mt-1 text-purple-200">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-100" />
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-200" />
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-300" />
                          </div>
                        )}
                      </div>

                      {/* Interactive Ask Form */}
                      <form onSubmit={handleAiAsk} className="flex items-center gap-2 bg-white rounded-full p-2 shadow-xl">
                        <input
                          type="text"
                          placeholder="Ask about agribusiness, funding, sector stats..."
                          value={aiInput}
                          onChange={(e) => setAiInput(e.target.value)}
                          className="flex-1 bg-transparent border-none outline-none text-slate-800 text-sm font-semibold pl-4 placeholder:text-slate-400"
                        />
                        <button
                          type="submit"
                          className="w-10 h-10 bg-[#0F172A] hover:bg-slate-800 text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                        >
                          <Icons.Send />
                        </button>
                      </form>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* ─── TAB VIEW: MY PROFILE ─── */}
            {activeWorkspaceTab === "profile" && (
              <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-sm max-w-4xl">
                <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-100 mb-8">
                  <div className="w-20 h-20 bg-blue-600 text-white font-black text-2xl rounded-2xl flex items-center justify-center">
                    CB
                  </div>
                  <div className="text-center sm:text-left">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Chisomo Banda</h2>
                    <p className="text-slate-500 font-medium">Daeyang University Student Entrepreneur</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs mt-2">
                      Venture Track A: Agribusiness Innovation
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Student Directory details</h3>
                    <div>
                      <span className="text-xs text-slate-400 font-bold block">Academic Registry Email</span>
                      <span className="text-sm font-semibold text-slate-700">c.banda@daeyang.ac.mw</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-bold block">Enrollment ID Number</span>
                      <span className="text-sm font-semibold text-slate-700">DYU-ENT-2025-084</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-bold block">Academic Advisor</span>
                      <span className="text-sm font-semibold text-slate-700">Dr. Chimwemwe Mwale (Computer Science)</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Current Venture Profile</h3>
                    <div>
                      <span className="text-xs text-slate-400 font-bold block">Proposed Startup Name</span>
                      <span className="text-sm font-semibold text-slate-700">EcoAgro Digital Solutions</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-bold block">Sector Focus</span>
                      <span className="text-sm font-semibold text-slate-700">Agribusiness / Digital Marketplaces</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-bold block">Incubation Milestone</span>
                      <span className="text-sm font-semibold text-emerald-600">Venture Formulation Stage (75% Complete)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─── TAB VIEW: BUSINESS PLAN (The Submission Engine) ─── */}
            {activeWorkspaceTab === "business-plan" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Step list block (Column 4) */}
                <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50">
                  <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider mb-6">Wizard Progress Steps</h3>
                  <div className="space-y-6 relative pl-3">
                    <div className="absolute left-4 top-1 bottom-1 w-0.5 bg-slate-100" />

                    {[
                      { step: 1, label: "Business Information" },
                      { step: 2, label: "Problem & Solution" },
                      { step: 3, label: "Market Analysis" },
                      { step: 4, label: "Marketing & Sales" },
                      { step: 5, label: "Financial Plan" },
                      { step: 6, label: "Upload Documents" },
                      { step: 7, label: "Review & Submit" }
                    ].map((s) => {
                      const isCompleted = planStep > s.step;
                      const isActive = planStep === s.step;
                      return (
                        <div key={s.step} className="flex items-center gap-4 relative z-10 group cursor-pointer" onClick={() => setPlanStep(s.step)}>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs border transition-all duration-300 ${isCompleted
                              ? "bg-emerald-500 border-emerald-500 text-white"
                              : isActive
                                ? "bg-[#2563EB] border-[#2563EB] text-white shadow-md shadow-blue-500/20"
                                : "bg-white border-slate-200 text-slate-400 group-hover:border-slate-300"
                              }`}
                          >
                            {isCompleted ? "✓" : s.step}
                          </div>
                          <span
                            className={`text-sm tracking-tight transition-colors duration-300 ${isActive ? "text-slate-800 font-bold" : "text-slate-400 group-hover:text-slate-600 font-medium"
                              }`}
                          >
                            {s.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Form content canvas (Column 8) */}
                <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50">
                  <div className="mb-6 pb-4 border-b border-slate-100">
                    <span className="text-[10px] text-blue-600 font-black uppercase tracking-wider">Step {planStep} of 7</span>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">Configure Business Documentation</h2>
                  </div>

                  <div className="space-y-6">
                    {planStep === 1 && (
                      <div className="space-y-5 animate-in fade-in duration-300">
                        <div>
                          <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Proposed Venture Name</label>
                          <input
                            type="text"
                            placeholder="Enter business name (e.g. EcoAgro Solutions)"
                            value={planForm.businessName}
                            onChange={(e) => setPlanForm({ ...planForm, businessName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-blue-500 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Industry Sector</label>
                          <select
                            value={planForm.sector}
                            onChange={(e) => setPlanForm({ ...planForm, sector: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-blue-500 transition-colors"
                          >
                            <option>Agribusiness</option>
                            <option>FinTech</option>
                            <option>EdTech</option>
                            <option>E-Commerce</option>
                            <option>Healthcare</option>
                            <option>Clean Energy</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Initial Stage</label>
                          <select
                            value={planForm.stage}
                            onChange={(e) => setPlanForm({ ...planForm, stage: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-blue-500 transition-colors"
                          >
                            <option>Idea</option>
                            <option>MVP Development</option>
                            <option>Early Traction</option>
                            <option>Scaling</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {planStep > 1 && planStep < 6 && (
                      <div className="space-y-5 animate-in fade-in duration-300">
                        <div>
                          <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Describe Problem & Core Value Proposition</label>
                          <textarea
                            rows={4}
                            placeholder="Detail market gap and how your startup resolves it..."
                            value={planForm.description}
                            onChange={(e) => setPlanForm({ ...planForm, description: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-blue-500 transition-colors resize-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Target Customers & Reach strategy</label>
                          <input
                            type="text"
                            placeholder="Detail core demographic segmentations..."
                            value={planForm.customers}
                            onChange={(e) => setPlanForm({ ...planForm, customers: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold outline-none focus:bg-white focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>
                    )}

                    {planStep === 6 && (
                      <div className="space-y-4 animate-in fade-in duration-300">
                        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-blue-400 transition-colors duration-300 cursor-pointer bg-slate-50/50">
                          <span className="text-3xl mb-3">📁</span>
                          <p className="text-sm font-black text-slate-700">Upload Supporting Documentation</p>
                          <p className="text-xs text-slate-400 font-bold mt-1">Upload Financial forecasts Excel or Pitch decks PDF (Max 15MB)</p>
                        </div>
                      </div>
                    )}

                    {planStep === 7 && (
                      <div className="space-y-6 animate-in fade-in duration-300 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider mb-3">Venture Overview Summary</h4>
                        <div className="grid grid-cols-2 gap-4 text-xs font-bold">
                          <div>
                            <span className="text-slate-400 uppercase">Venture Name:</span>
                            <p className="text-slate-700 mt-1">{planForm.businessName || "(Unnamed Venture)"}</p>
                          </div>
                          <div>
                            <span className="text-slate-400 uppercase">Sector Focus:</span>
                            <p className="text-slate-700 mt-1">{planForm.sector}</p>
                          </div>
                          <div>
                            <span className="text-slate-400 uppercase">Incubation Track:</span>
                            <p className="text-slate-700 mt-1">Venture Formation</p>
                          </div>
                          <div>
                            <span className="text-slate-400 uppercase">Operational Stage:</span>
                            <p className="text-slate-700 mt-1">{planForm.stage}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between pt-6 border-t border-slate-100 mt-8">
                      <button
                        onClick={() => planStep > 1 && setPlanStep(prev => prev - 1)}
                        disabled={planStep === 1}
                        className="px-6 py-3 border border-slate-200 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-500 hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleNextStep}
                        className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all"
                      >
                        {planStep === 7 ? "Submit Application" : "Save & Progress"}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* ─── TAB VIEW: TRAINING CENTER (Educational Academy) ─── */}
            {activeWorkspaceTab === "training" && (
              <div className="space-y-8">

                {/* Header info */}
                <div>
                  <h1 className="text-3xl font-black text-slate-900 tracking-tight">Online Entrepreneurship Academy</h1>
                  <p className="text-slate-500 font-medium mt-1">Build professional skills with modular curriculum tracks matching your venture type.</p>
                </div>

                {/* Filter categories bar */}
                <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
                  {["All", "Business Planning", "Marketing", "Finance", "Leadership"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setTrainingFilter(cat)}
                      className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-b-2 transition-all ${(trainingFilter === cat)
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-slate-400 hover:text-slate-600"
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Course grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses
                    .filter(c => trainingFilter === "All" || c.category === trainingFilter)
                    .map((course) => {
                      const isComplete = course.progress === 100;
                      const hasStarted = course.progress > 0;
                      return (
                        <div key={course.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                          <div>
                            <div className="flex justify-between items-start mb-3">
                              <span className="text-[9px] bg-slate-100 text-slate-500 font-black px-2 py-0.5 rounded-full uppercase tracking-wider">{course.category}</span>
                              <span className="text-[10px] text-slate-400 font-bold">{course.duration}</span>
                            </div>
                            <h3 className="text-base font-black text-slate-800 leading-snug tracking-tight mb-4">{course.title}</h3>
                          </div>

                          <div className="mt-4 pt-4 border-t border-slate-50 space-y-4">
                            <div>
                              <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                                <span>Progress</span>
                                <span>{course.progress}%</span>
                              </div>
                              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-blue-600 h-full rounded-full" style={{ width: `${course.progress}%` }} />
                              </div>
                            </div>

                            <button
                              onClick={() => {
                                triggerToast(`Loading Lecture Modules for: ${course.title}`);
                                const updated = courses.map(c => c.id === course.id ? { ...c, progress: Math.min(100, c.progress + 10) } : c);
                                setCourses(updated);
                              }}
                              className={`w-full py-2.5 rounded-xl text-center font-bold text-xs uppercase tracking-wider transition-all duration-300 ${isComplete
                                ? "bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-default"
                                : hasStarted
                                  ? "bg-blue-550 border border-blue-500 text-[#2563EB] hover:bg-[#2563EB] hover:text-white"
                                  : "bg-slate-900 text-white hover:bg-slate-800"
                                }`}
                            >
                              {isComplete ? "Completed ✓" : hasStarted ? "Resume Course" : "Start Course"}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>

              </div>
            )}

            {/* ─── TAB VIEW: MENTORS (Advisory Matching) ─── */}
            {activeWorkspaceTab === "mentors" && (
              <div className="space-y-8">

                {/* Header info */}
                <div>
                  <h1 className="text-3xl font-black text-slate-900 tracking-tight">Elite Mentorship Matchmaking</h1>
                  <p className="text-slate-500 font-medium mt-1">Connect directly with Malawian industry leaders and academic subject experts for advisory support.</p>
                </div>

                {/* Directory advisors cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                  {/* Advisor 1 */}
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center font-black text-purple-700">JB</div>
                        <div>
                          <h3 className="font-black text-slate-800 tracking-tight leading-tight">John Banda</h3>
                          <span className="text-[10px] text-slate-400 font-bold block">Business Development Partner</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Focus areas: Market-fit validation, commercialization roadmaps, corporate alignments in Malawi. 10+ years experience guiding early ventures.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-[9px] bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Business planning</span>
                        <span className="text-[9px] bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">MVP Launch</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedMentor("John Banda")}
                      className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all mt-6"
                    >
                      Book Advisory Session
                    </button>
                  </div>

                  {/* Advisor 2 */}
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center font-black text-emerald-700">MP</div>
                        <div>
                          <h3 className="font-black text-slate-800 tracking-tight leading-tight">Mary Phiri</h3>
                          <span className="text-[10px] text-slate-400 font-bold block">Financial Consultant & Architect</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Focus areas: Financial planning, startup cash runway, grant formulation, and seed investments forecasting. Formerly worked with major advisory banks.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-[9px] bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Finance forecasting</span>
                        <span className="text-[9px] bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Grants</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedMentor("Mary Phiri")}
                      className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all mt-6"
                    >
                      Book Advisory Session
                    </button>
                  </div>

                  {/* Advisor 3 */}
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center font-black text-orange-700">CM</div>
                        <div>
                          <h3 className="font-black text-slate-800 tracking-tight leading-tight">Dr. Chimwemwe Mwale</h3>
                          <span className="text-[10px] text-slate-400 font-bold block">Academic Technology Advisor</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Focus areas: Agribusiness systems, mobile integrations, local server systems engineering. Helps bridge university innovations with market needs.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-[9px] bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">AgriTech Systems</span>
                        <span className="text-[9px] bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Tech Roadmap</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedMentor("Dr. Chimwemwe Mwale")}
                      className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all mt-6"
                    >
                      Book Advisory Session
                    </button>
                  </div>

                </div>

                {/* Booking interactive modal */}
                {selectedMentor && (
                  <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xl max-w-md w-full animate-in zoom-in-95 duration-200">
                      <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">Book Advisory Session</h3>
                      <p className="text-xs text-slate-400 font-bold mb-6">Scheduling with mentor: <span className="text-slate-800">{selectedMentor}</span></p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <label className="block text-[10px] font-black text-slate-400 uppercase mb-1.5">Pick date</label>
                          <input
                            type="date"
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-55 text-sm font-semibold outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-slate-400 uppercase mb-1.5">Pick session time slot</label>
                          <select
                            value={bookingTime}
                            onChange={(e) => setBookingTime(e.target.value)}
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-55 text-sm font-semibold outline-none focus:border-blue-500"
                          >
                            <option>09:00 AM</option>
                            <option>10:00 AM</option>
                            <option>11:30 AM</option>
                            <option>02:00 PM</option>
                            <option>03:30 PM</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={() => setSelectedMentor(null)}
                          className="flex-1 py-3 border border-slate-200 text-slate-500 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleMentorBookingConfirm}
                          className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 transition-all"
                        >
                          Confirm Session
                        </button>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* ─── TAB VIEW: INVESTORS (Seed & Capital access) ─── */}
            {activeWorkspaceTab === "investors" && (
              <div className="space-y-8">

                {/* Header info */}
                <div>
                  <h1 className="text-3xl font-black text-slate-900 tracking-tight">Venture Capital & Seed Access Pipeline</h1>
                  <p className="text-slate-500 font-medium mt-1">Connect directly with regional angel funds, national innovation grants, and industry sponsorships.</p>
                </div>

                {/* Directory mapping */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <span className="text-xs font-black text-slate-800 uppercase tracking-wider">Fund Alternative Profile</span>
                    <span className="text-xs font-black text-slate-800 uppercase tracking-wider">Platform Pipeline State</span>
                  </div>

                  <div className="divide-y divide-slate-100">

                    {/* Item 1 */}
                    <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-base font-black text-slate-800 tracking-tight">Angel Investors Malawi</h3>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">Focus: Early-Stage Innovation (AgriTech/FinTech)</p>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xl mt-1.5">Regional coalition providing early validation capital and incubation mentorship linkages.</p>
                      </div>
                      <button
                        onClick={() => handleInvestorAction(1, "Angel Investors Malawi")}
                        className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 ${investorStatuses[1] === "Connect Startup"
                          ? "bg-slate-900 text-white hover:bg-slate-800"
                          : "bg-blue-50 text-[#2563EB] border border-blue-200 cursor-default"
                          }`}
                      >
                        {investorStatuses[1]}
                      </button>
                    </div>

                    {/* Item 2 */}
                    <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-base font-black text-slate-800 tracking-tight">National Youth Enterprise Fund</h3>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">Focus: Youth Employment Generation (Malawi Government)</p>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xl mt-1.5">Strategic micro-grant allocation committee dedicated to expanding local student ventures.</p>
                      </div>
                      <button
                        onClick={() => handleInvestorAction(2, "National Youth Enterprise Fund")}
                        className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 ${investorStatuses[2] === "Request Grant Review"
                          ? "bg-emerald-600 text-white hover:bg-emerald-700"
                          : "bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-default"
                          }`}
                      >
                        {investorStatuses[2]}
                      </button>
                    </div>

                    {/* Item 3 */}
                    <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-base font-black text-slate-800 tracking-tight">Lilongwe Tech Angels</h3>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">Focus: Digital MVP Software & App Systems</p>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xl mt-1.5">Niche tech-focused seed fund supporting software startups in the central region.</p>
                      </div>
                      <button
                        onClick={() => handleInvestorAction(3, "Lilongwe Tech Angels")}
                        className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 ${investorStatuses[3] === "Connect Startup"
                          ? "bg-slate-900 text-white hover:bg-slate-800"
                          : "bg-blue-50 text-[#2563EB] border border-blue-200 cursor-default"
                          }`}
                      >
                        {investorStatuses[3]}
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            )}

            {/* ─── TAB VIEW: FUNDING PORTAL ─── */}
            {activeWorkspaceTab === "funding" && (
              <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-sm max-w-4xl space-y-6">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight">Venture Funding History</h1>
                  <p className="text-slate-500 font-medium mt-1">Track allocated hub micro-seed resources and applied grant allocations.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <span className="text-xs text-slate-400 font-bold uppercase">Allocated Hub Grant</span>
                    <h3 className="text-2xl font-black text-slate-800 mt-1">MwK 500,000</h3>
                    <p className="text-xs text-slate-400 font-semibold mt-2">Disbursed on: Jan 15, 2026</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <span className="text-xs text-slate-400 font-bold uppercase">Venture Capital Matches</span>
                    <h3 className="text-2xl font-black text-slate-800 mt-1">MwK 0</h3>
                    <p className="text-xs text-slate-400 font-semibold mt-2">Active pipeline matches: 2 partners</p>
                  </div>
                </div>
              </div>
            )}

            {/* ─── TAB VIEW: ANALYTICS PANEL ─── */}
            {activeWorkspaceTab === "analytics" && (
              <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-sm max-w-4xl space-y-6">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight">Market Analytics Variables</h1>
                  <p className="text-slate-500 font-medium mt-1">Mock analytics metrics tracking startup validation variables.</p>
                </div>

                <div className="space-y-6 pt-4">
                  {/* Metric 1 */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                      <span>Market Validation Validation (Lilongwe Tech Hub)</span>
                      <span>85% Traction</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-blue-600 rounded-full" />
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                      <span>Weekly Active Customer Discovery Loops</span>
                      <span>45% Active</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[45%] h-full bg-purple-500 rounded-full" />
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                      <span>Venture Runway Capital (Weeks)</span>
                      <span>16 Weeks Remaining</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[60%] h-full bg-emerald-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ─── TAB VIEW: EVENTS SCHEDULE ─── */}
            {activeWorkspaceTab === "events" && (
              <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-sm max-w-4xl space-y-6">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight">Venture Incubation Calendar</h1>
                  <p className="text-slate-500 font-medium mt-1">Academic accelerator events, guest seminars, and seed financing presentations.</p>
                </div>
                <div className="divide-y divide-slate-100 pt-4">
                  <div className="py-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-slate-800">Legal Compliance Workshop</h3>
                      <p className="text-xs text-slate-400 font-medium">Virtual Class • June 22, 2026 at 09:00 AM</p>
                    </div>
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase font-bold tracking-wider">Virtual Session</span>
                  </div>
                  <div className="py-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-slate-800">Venture Capital Pitch Day</h3>
                      <p className="text-xs text-slate-400 font-medium">Main Conference Hall • June 18, 2026 at 10:00 AM</p>
                    </div>
                    <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase font-bold tracking-wider">In-Person</span>
                  </div>
                  <div className="py-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-slate-800">Malawi Tech Expo 2026</h3>
                      <p className="text-xs text-slate-400 font-medium">Digital Hub Center • July 14, 2026 at 02:30 PM</p>
                    </div>
                    <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase font-bold tracking-wider">In-Person</span>
                  </div>
                </div>
              </div>
            )}

            {/* ─── TAB VIEW: RESOURCE CENTER ─── */}
            {activeWorkspaceTab === "resources" && (
              <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-sm max-w-4xl space-y-6">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight">Resource Libraries</h1>
                  <p className="text-slate-500 font-medium mt-1">Download official document drafts, pitch structures, and legal compliance guides.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 border border-slate-200 rounded-2xl flex items-center justify-between hover:border-blue-400 cursor-pointer transition-colors duration-300">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">Venture Pitch Deck Template</h4>
                      <p className="text-[10px] text-slate-400 font-bold">PDF Format • 3.2MB</p>
                    </div>
                    <span className="text-lg">📥</span>
                  </div>
                  <div className="p-4 border border-slate-200 rounded-2xl flex items-center justify-between hover:border-blue-400 cursor-pointer transition-colors duration-300">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">Malawian Startup Tax Guide</h4>
                      <p className="text-[10px] text-slate-400 font-bold">PDF Format • 1.8MB</p>
                    </div>
                    <span className="text-lg">📥</span>
                  </div>
                </div>
              </div>
            )}

            {/* ─── TAB VIEW: SETTINGS ─── */}
            {activeWorkspaceTab === "settings" && (
              <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-100 shadow-sm max-w-4xl space-y-6">
                <div>
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight">Account Settings</h1>
                  <p className="text-slate-500 font-medium mt-1">Configure your incubation account notifications and profile configurations.</p>
                </div>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">Email Notifications</h4>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">Receive alert updates on mentor bookings and review states.</p>
                    </div>
                    <div className="w-10 h-6 bg-blue-600 rounded-full flex items-center px-1 cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full translate-x-4 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">Agribusiness Cohort Updates</h4>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">Allow partners to share business proposal summaries.</p>
                    </div>
                    <div className="w-10 h-6 bg-slate-200 rounded-full flex items-center px-1 cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>

      {/* Floating interactive toast notifications */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0F172A] text-white px-5 py-3 rounded-2xl border border-slate-800 shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs font-semibold leading-relaxed tracking-wide">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
