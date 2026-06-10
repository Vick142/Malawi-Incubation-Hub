import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PlatformPreview from "@/components/PlatformPreview";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Layout: The "Digimark" Framework */}
      <section className="relative bg-[#1E3A8A] pt-16 pb-32 overflow-hidden">
        {/* Geometric Overlay Accents */}
        <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4 scale-150">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-16 h-16 border border-white" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
            {/* Left Column: 60% Width */}
            <div className="space-y-10">
              <div>
                <p className="text-brand-cyan font-extrabold uppercase tracking-[0.3em] text-[11px] mb-6">
                  Welcome to Daeyang Smart Hub
                </p>
                <h1 className="text-white text-6xl lg:text-[5rem] font-black leading-[0.92] tracking-tighter max-w-2xl">
                  Empowering Student Entrepreneurs in Malawi
                </h1>
              </div>
              
              <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-xl font-medium">
                Turning university innovation into scalable business reality. Access advanced technology, 
                professional mentorship, and a direct pipeline to institutional funding.
              </p>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="bg-white text-[#1E3A8A] px-10 py-5 rounded-none font-black text-sm uppercase tracking-widest shadow-2xl transition-all transform hover:-translate-y-1 hover:bg-brand-cyan hover:text-white"
                >
                  Explore Our Mission
                </Link>
              </div>
            </div>

            {/* Right Column: 40% Width - The Image Complex */}
            <div className="relative pt-12 lg:pt-0">
               <div className="relative w-full aspect-square max-w-[480px] mx-auto">
                  {/* cutout container placeholder */}
                  <div className="absolute inset-0 bg-white/5 rounded-full animate-pulse border-4 border-white/10" />
                  <div className="relative h-full w-full rounded-[3rem] overflow-hidden bg-white/10 border border-white/20 backdrop-blur-sm shadow-inner group">
                     <ImagePlaceholder 
                        text="[MAIN_HERO_FOUNDER_IMAGE] - Photo of an active student entrepreneur or team using a laptop" 
                        className="h-full bg-transparent border-0 opacity-70 group-hover:opacity-100 transition-opacity"
                     />
                  </div>

                  {/* Layered Stat Circle 1 (Top Left) */}
                  <div className="absolute -top-6 -left-10 bg-white p-6 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center text-center w-36 h-36 animate-bounce transition-all [animation-duration:3s]">
                    <strong className="text-[#1E3A8A] text-xl font-black">MWK 2M+</strong>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tight leading-none mt-1">Funding Pool Available</span>
                  </div>

                  {/* Layered Stat Circle 2 (Bottom) */}
                  <div className="absolute -bottom-10 right-10 bg-brand-cyan p-6 rounded-full shadow-[0_20px_50px_rgba(56,189,248,0.3)] flex flex-col items-center justify-center text-center w-40 h-40">
                    <strong className="text-white text-4xl font-black tracking-tighter">75%</strong>
                    <span className="text-[11px] uppercase font-bold text-white tracking-widest leading-tight mt-1">Venture Success Rate</span>
                  </div>

                  {/* Layered Stat Circle 3 (Top Right) */}
                  <div className="absolute top-1/4 -right-12 bg-white p-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center w-32 h-32">
                    <strong className="text-[#1E3A8A] text-3xl font-black">50+</strong>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tight leading-none mt-1 text-nowrap">Expert Mentors Connected</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Context Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Section 1: The Background */}
              <div className="p-12 bg-slate-50 border border-slate-100 rounded-[3rem] group hover:bg-white hover:shadow-2xl transition-all hover:border-blue-100">
                 <div className="w-16 h-16 bg-[#1E3A8A] text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18" />
                    </svg>
                 </div>
                 <h2 className="text-3xl font-black text-[#1E3A8A] mb-6 tracking-tight">The Background</h2>
                 <p className="text-slate-500 font-medium leading-relaxed">
                   Founded on the vision of self-reliance, we represent a major leap in Malawi academic-industry 
                   collaboration. Our hub acts as the engine for grassroots economic growth through structured 
                   innovation.
                 </p>
              </div>

              {/* Section 2: The Problem Statement */}
              <div className="p-12 bg-slate-50 border border-slate-100 rounded-[3rem] group hover:bg-white hover:shadow-2xl transition-all hover:border-blue-100">
                 <div className="w-16 h-16 bg-brand-cyan text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                 </div>
                 <h2 className="text-3xl font-black text-[#1E3A8A] mb-6 tracking-tight">Problem Statement</h2>
                 <p className="text-slate-500 font-medium leading-relaxed">
                   University graduates face broken mentorship channels and zero capital access. We address the 
                   critical gap where intellectual potential fails to meet market infrastructure.
                 </p>
              </div>
           </div>

           {/* Challenge Graphic Anchor */}
           <div className="rounded-[4rem] overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <ImagePlaceholder 
                 text="[THE_CHALLENGE_CAMPUS_GRAPHIC] - Wide, clean, borderless screenshot placeholder positioned to anchor the challenge statement elegantly" 
                 landscape
                 className="min-h-[440px] border-0 bg-slate-900 shadow-inner"
              />
           </div>
        </div>
      </section>
    </main>
  );
}
