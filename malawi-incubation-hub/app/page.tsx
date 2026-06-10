import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import PlatformPreview from "@/components/PlatformPreview";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                The Future of Malawi Innovation
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1E3A8A] leading-[1.05] tracking-tight mb-8">
                Empowering Student Entrepreneurs in Malawi
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                A modern incubation platform combining technology, ment
                orship, and funding pathways 
                to turn university ideas into scalable ventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="bg-[#1E3A8A] text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl shadow-navy/30 flex items-center justify-center group transition-all hover:scale-[1.03]"
                >
                  Explore Our Mission
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/features"
                  className="bg-slate-100 text-[#1E3A8A] px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  View Features
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100/50 rounded-[3.5rem] -rotate-2 scale-105" />
              <div className="relative z-10 p-4 bg-white rounded-[2.5rem] shadow-2xl shadow-blue-500/10 border border-slate-100">
                <ImagePlaceholder text="Insert high-quality photography of Daeyang University campus architecture or student founders collaborating" />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-[200px] hidden sm:block">
                <p className="text-3xl font-black text-[#1E3A8A] leading-none mb-1">10+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Startups</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#1E3A8A] tracking-tight mb-4">The Challenge</h2>
            <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a5.97 5.97 0 0 0-.94 3.197M15.75 22.5a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75V21h7.5v1.5ZM7.5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Demographic Gap</h3>
              <p className="text-slate-600 leading-relaxed">
                Malawi faces a rapidly growing youth population with limited access to structural incubation 
                frameworks and capital. Traditional support systems fail to scale with the demand for innovation.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Commercialization Barriers</h3>
              <p className="text-slate-600 leading-relaxed">
                University graduates struggle to transform academic ideas into viable enterprises due to 
                broken mentorship channels, inadequate market access, and high roadblocks to commercial launch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

