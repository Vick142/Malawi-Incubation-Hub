import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import presentationImage from "@/assets/images/presentation.png";

const directives = [
  {
    title: "Skill Development",
    desc: "Cultivating entrepreneurial business intelligence and practical execution capability.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.25c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.252" />
      </svg>
    ),
  },
  {
    title: "Mentorship Ecosystem",
    desc: "Connecting innovators with industry veterans and localized academic mentors.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a5.97 5.97 0 0 0-.94 3.197M15.75 22.5a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75V21h7.5v1.5ZM7.5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z" />
      </svg>
    ),
  },
  {
    title: "Financial Pathways",
    desc: "Streamlining direct access to startup financing and institutional grants.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Commercialization",
    desc: "Transitioning intellectual innovation into commercial reality for the Malawi market.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
  {
    title: "Economic Impact",
    desc: "Generating active youth employment paths and sustainable local business growth.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.5 4.5L21.75 7.5M2.25 22.5h19.5" />
      </svg>
    ),
  },
];

const stakeholders = [
  "Universities",
  "Government of Malawi",
  "Youth Entrepreneurs",
  "NGOs",
  "Financial Institutions",
  "Investors",
  "Private Sector Partners",
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Project Aim Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1E3A8A] font-bold text-sm mb-6"> Our Vision</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] leading-tight mb-6 sm:mb-8">
                Establishing a Smart, Tech-Driven Startup Ecosystem.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  The Smart Business Incubation Hub is a strategic initiative at Daeyang University
                  to support student-led startups and foster a culture of entrepreneurship.
                </p>
                <div className="p-6 bg-[#1E3A8A] rounded-2xl text-white shadow-xl shadow-navy/20">
                  <p className="font-bold text-xl mb-2">Core Project Aim</p>
                  <p className="text-blue-100 italic">
                    "To create a visible, practical, and sustainable incubation environment where
                    university students can transform ideas into commercially viable ventures."
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 group">
              <Image
                src={presentationImage}
                alt="University workshop and pitch presentation panel"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Directives Grid */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-[#1E3A8A] mb-4">Strategic Directives</h2>
            <div className="w-16 h-1 bg-emerald-500 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {directives.map((dir, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {dir.icon}
                </div>
                <h3 className="font-black text-[#1E3A8A] mb-3 leading-tight">{dir.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{dir.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders Array */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Our Ecosystem Stakeholders</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {stakeholders.map((name, idx) => (
              <div
                key={idx}
                className="px-8 py-4 bg-white border border-slate-200 rounded-xl font-bold text-[#1E3A8A] shadow-sm hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
