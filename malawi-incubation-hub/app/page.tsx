import Link from "next/link";
import Image from "next/image";
import PlatformPreview from "@/components/PlatformPreview";
import heroFounderImage from "@/assets/images/MAIN_HERO_FOUNDER_IMAGE.png";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#1E3A8A] py-20 lg:py-28 overflow-hidden relative">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Geometric steps bottom right */}
        <div className="absolute right-0 bottom-0 w-80 h-80 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100 H20 V80 H40 V60 H60 V40 H80 V20 H100 V0" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:items-center">
            {/* Left 50% Column */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 font-bold text-xs uppercase tracking-widest mb-6 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                WELCOME TO DAEYANG SMART HUB
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
                Empowering Student Entrepreneurs in Malawi
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-xl font-medium">
                A modern incubation platform combining technology, mentorship, and funding pathways
                to turn university ideas into scalable ventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="bg-white px-8 py-4 rounded-none text-lg font-black uppercase tracking-wider shadow-2xl flex items-center justify-center group transition-all hover:bg-slate-100 hover:scale-[1.02]"
                  style={{ color: '#1E3A8A' }}
                >
                  GET STARTED
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/features"
                  className="border border-white/30 text-white px-8 py-4 rounded-none text-lg font-black uppercase tracking-wider flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  View Features
                </Link>
              </div>
            </div>

            {/* Right 50% Column */}
            <div className="lg:col-span-6 relative mt-20 lg:mt-0">
              <div className="relative mt-4">
                <Image
                  src={heroFounderImage}
                  alt="Student Founders Collaborating at Daeyang University Malawi"
                  className="w-full h-auto rounded-[2rem] object-cover shadow-2xl block"
                  priority
                />
              </div>

              {/* Floating Stat Circle 1 (Top Left) */}
              <div className="absolute -top-28 -left-12 z-20 bg-white p-4 rounded-full w-36 h-36 shadow-2xl border border-slate-100 flex flex-col items-center justify-center text-center">
                <p className="text-xl font-black text-[#1E3A8A] leading-none mb-1">MwK 2M+</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight leading-tight">Funding Pool Available</p>
              </div>

              {/* Floating Stat Circle 2 (Bottom Center-Left) */}
              <div className="absolute -bottom-16 left-6 z-20 bg-cyan-500 p-4 rounded-full w-36 h-36 shadow-2xl flex flex-col items-center justify-center text-center text-white border-4 border-white">
                <p className="text-3xl font-black leading-none mb-1">75%</p>
                <p className="text-[10px] font-bold uppercase tracking-tight leading-tight opacity-90">Venture Success Rate</p>
              </div>

              {/* Floating Stat Circle 3 (Top Right) */}
              <div className="absolute top-0 -right-12 z-20 bg-white p-4 rounded-full w-36 h-36 shadow-2xl border border-slate-100 flex flex-col items-center justify-center text-center">
                <p className="text-2xl font-black text-[#1E3A8A] leading-none mb-1">50+</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight leading-tight">Expert Mentors Connected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections below the fold */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section 1: The Background */}
          <div className="bg-white p-10 rounded-3xl border border-slate-200/60 shadow-sm max-w-4xl mx-auto mb-20 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-black text-[#1E3A8A] mb-3">Origin & Institutional Background</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Daeyang University established the Smart Business Incubation Hub to address a critical structural disconnect:
                Malawi’s university campuses are teeming with brilliant minds and innovative concepts, yet they lack the supportive
                pathways to commercialize their projects. The Hub functions as an educational accelerator, aligning academic research
                directly with market demand.
              </p>
            </div>
          </div>

          {/* Section 2: The Problem Statement */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-tight mb-2">The Structural Challenge</h2>
              <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full mb-3" />
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Addressing Malawi's Entrepreneurial Hurdles</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              <div className="bg-white p-10 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a5.97 5.97 0 0 0-.94 3.197M15.75 22.5a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75V21h7.5v1.5ZM7.5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-[#1E3A8A] mb-4">Demographic Gap</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Malawi faces a rapidly growing youth population with limited access to structural incubation
                  frameworks and capital. Traditional support systems fail to scale with the demand for innovation.
                </p>
              </div>

              <div className="bg-white p-10 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-[#1E3A8A] mb-4">Commercialization Barriers</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  University graduates struggle to transform academic ideas into viable enterprises due to
                  broken mentorship channels, inadequate market access, and high roadblocks to commercial launch.
                </p>
              </div>
            </div>

            {/* THE_CHALLENGE_CAMPUS_GRAPHIC (Visual representation underneath) */}
            <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-[#1E3A8A] to-[#1D4ED8] p-8 lg:p-12 text-white relative shadow-2xl">
              {/* Background elements */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <span className="text-cyan-400 font-extrabold text-xs uppercase tracking-widest mb-2 block">Visualizing the Gap</span>
                  <h4 className="text-2xl lg:text-3xl font-black tracking-tight mb-4">
                    The Innovation Leaking Pipeline
                  </h4>
                  <p className="text-sm text-blue-100 leading-relaxed font-medium mb-6">
                    Over 90% of student innovations in Malawian universities terminate as academic final year projects. The Hub solves this by converting academic credit into equity.
                  </p>
                  <div className="flex gap-4 items-center">
                    <div className="flex -space-x-2">
                      <span className="w-8 h-8 rounded-full bg-cyan-500 border-2 border-blue-900 flex items-center justify-center font-bold text-[10px]">90%</span>
                      <span className="w-8 h-8 rounded-full bg-white text-[#1E3A8A] border-2 border-blue-900 flex items-center justify-center font-bold text-[10px]">10%</span>
                    </div>
                    <p className="text-xs text-blue-200 font-bold uppercase tracking-wider">Project Survival Rate Gap</p>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-6">Current Campus Conversion Rates</p>
                  <div className="space-y-6">
                    {/* Row 1 */}
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span>Standard Academic Output (Unstructured)</span>
                        <span className="text-red-400">8% Commercialized</span>
                      </div>
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[8%] h-full bg-red-500 rounded-full" />
                      </div>
                    </div>
                    {/* Row 2 */}
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span>Incubated Output (Via Daeyang Hub)</span>
                        <span className="text-emerald-400">75% Venture Success Rate</span>
                      </div>
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[75%] h-full bg-emerald-400 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10 text-center">
                    <div>
                      <p className="text-xl lg:text-2xl font-black text-cyan-400 leading-none">MwK 0</p>
                      <p className="text-[10px] text-blue-200 font-bold uppercase mt-1">Typical Capital</p>
                    </div>
                    <div>
                      <p className="text-xl lg:text-2xl font-black text-emerald-400 leading-none">MwK 2M+</p>
                      <p className="text-[10px] text-blue-200 font-bold uppercase mt-1">Hub Funded</p>
                    </div>
                    <div>
                      <p className="text-xl lg:text-2xl font-black text-white leading-none">1,200+</p>
                      <p className="text-[10px] text-blue-200 font-bold uppercase mt-1">Target Jobs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

