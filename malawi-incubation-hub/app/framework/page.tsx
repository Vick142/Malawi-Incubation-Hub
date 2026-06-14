import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import bankImage from "@/assets/images/bank.png";

const roadmap = [
  { phase: "Phase 1", title: "Needs Assessment", detail: "Mapping student, faculty, and innovation gaps across Malawi." },
  { phase: "Phase 2", title: "System Development", detail: "Building the digital platform, support workflows, and content." },
  { phase: "Phase 3", title: "Pilot at University", detail: "Launch with selected founders and partner teams at Daeyang." },
  { phase: "Phase 4", title: "Training & Mentorship", detail: "Structured coaching loops and venture building activities." },
  { phase: "Phase 5", title: "Expansion Nationwide", detail: "Replicating the model to other Malawi universities." },
];

const values = [
  { label: "Increased Startup Creation", value: "3x Impact" },
  { label: "Youth Employment Generation", value: "1,200+ Jobs" },
  { label: "Commercialized Innovation", value: "85% Rate" },
  { label: "University-Industry Alignment", value: "Strategic" },
];

const revenueModel = [
  { icon: "◎", title: "Memberships", desc: "Tiered access for student founders and external associates." },
  { icon: "◈", title: "Strategic Partnerships", desc: "Long-term agreements with financial institutions." },
  { icon: "✧", title: "Ecosystem Sponsorships", desc: "Brand alignment for private sector innovators." },
  { icon: "✦", title: "Specialized Corporate Training", desc: "Custom entrepreneurial intelligence modules." },
  { icon: "⚙", title: "Incubation Service Packages", desc: "Structural support for high-growth venture launches." },
];

export default function FrameworkPage() {
  return (
    <main className="bg-white">
      {/* Chronological Roadmap */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A8A] tracking-tight mb-4">Implementation Roadmap</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Strategic Execution Phases</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2" />

            <div className="space-y-12 relative">
              {roadmap.map((item, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 pl-12 md:pl-0 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 w-full">
                    <div className={`p-4 sm:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left duration-300 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-blue-500 font-black text-xs uppercase tracking-widest mb-2 block">{item.phase}</span>
                      <h3 className="text-xl font-black text-[#1E3A8A] mb-2">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                  <div className="absolute left-6 -translate-x-1/2 md:relative md:left-auto md:translate-x-0 w-10 h-10 bg-[#1E3A8A] border-4 border-white rounded-full flex items-center justify-center text-white font-black text-xs z-10 shadow-lg shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expected Value Callouts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="p-8 bg-[#1E3A8A] rounded-2xl text-center shadow-xl shadow-navy/20 group hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
                <p className="text-emerald-400 font-black text-3xl mb-1 leading-none">{v.value}</p>
                <p className="text-white font-bold text-xs uppercase tracking-tighter leading-tight opacity-80">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Continuity Model */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-tight mb-6 sm:mb-8">Business Continuity Model</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {revenueModel.map((r, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 cursor-default">
                    <span className="text-2xl mb-4 block">{r.icon}</span>
                    <h4 className="font-bold text-[#1E3A8A] mb-2">{r.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 group">
                <Image
                  src={bankImage}
                  alt="Corporate partner handshake and banking cooperation"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="p-8 bg-blue-500 rounded-3xl text-white">
                <h3 className="text-2xl font-black mb-4">Self-Sustaining Operations</h3>
                <p className="opacity-90 leading-relaxed">
                  Our revenue engine is powered by strategic alignments that ensure long-term viability
                  without relying solely on university budgets or grant cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
