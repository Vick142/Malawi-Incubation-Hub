export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#1E3A8A] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 font-bold text-xs uppercase tracking-widest mb-6 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
            Have a question about the Daeyang Smart Business Incubation Hub? We&apos;re here to help.
            Reach out and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — Contact Form */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 lg:p-10">
              <h2 className="text-2xl font-black text-[#1E3A8A] tracking-tight mb-2">Send Us a Message</h2>
              <p className="text-slate-500 font-medium text-sm mb-8 leading-relaxed">
                Fill in the form below and a member of the Incubation Hub team will respond within 24 hours.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Chisomo Banda"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Applying to the Incubation Program"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Role / Affiliation</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 outline-none transition-all hover:border-blue-300 focus:border-blue-500">
                    <option>Student Entrepreneur</option>
                    <option>Academic Faculty</option>
                    <option>Industry Mentor</option>
                    <option>Investor / Sponsor</option>
                    <option>Government / NGO Partner</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Your Message</label>
                  <textarea
                    rows={5}
                    placeholder="Describe your query, idea, or partnership interest..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2563EB] hover:bg-blue-700 text-white py-4 font-extrabold text-xs uppercase tracking-widest shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all duration-200 rounded-xl mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right — Info Cards */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-black text-[#1E3A8A] tracking-tight mb-4">Hub Contact Details</h2>
                <p className="text-slate-600 font-medium leading-relaxed">
                  We are located on the Daeyang University campus. The Incubation Hub team is available Monday to Friday during academic hours.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Campus Location</p>
                    <p className="text-sm font-bold text-slate-800">Daeyang University, Lilongwe, Malawi</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Smart Business Incubation Hub — Administration Block</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
                    <p className="text-sm font-bold text-slate-800">hub@daeyang.ac.mw</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Responses within 24 working hours</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Office Hours</p>
                    <p className="text-sm font-bold text-slate-800">Monday – Friday, 8:00 AM – 5:00 PM</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Central Africa Time (CAT, UTC+2)</p>
                  </div>
                </div>
              </div>

              {/* CTA block */}
              <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1D4ED8] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-cyan-300 font-bold text-xs uppercase tracking-widest mb-3">Ready to Join the Hub?</p>
                  <h3 className="text-xl font-black leading-snug mb-4">Apply for the 2026 Incubation Cohort</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-6 font-medium">
                    Open applications are being reviewed for the next student entrepreneur cohort cycle at Daeyang University.
                  </p>
                  <a
                    href="/signup"
                    className="inline-block bg-white text-[#1E3A8A] font-extrabold text-xs uppercase tracking-widest px-6 py-3 hover:bg-slate-100 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Register Your Venture →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
