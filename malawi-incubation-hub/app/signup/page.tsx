"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type AuthMode = "signup" | "signin";

export default function SignupPage() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>("signup");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Dummy auth — route straight to workspace
    setTimeout(() => router.push("/features"), 800);
  };

  return (
    <div className="flex min-h-screen">
      {/* ─── LEFT BRAND PANEL ─── */}
      <div className="hidden lg:flex lg:w-[45%] bg-[#1E3A8A] relative flex-col justify-between overflow-hidden">
        {/* Grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        {/* Radial glow top-right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        {/* Step graphic bottom-left */}
        <div className="absolute left-0 bottom-0 w-64 h-64 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
            <path d="M0 100 H20 V80 H40 V60 H60 V40 H80 V20 H100 V0" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative z-10 p-10 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-white rounded flex items-center justify-center text-[#1E3A8A] font-black text-xl">D</div>
            <p className="text-white font-extrabold text-xl tracking-tighter">
              Daeyang <span className="font-medium opacity-75">Hub</span>
            </p>
          </Link>
        </div>

        <div className="relative z-10 px-10 pb-4 flex flex-col gap-8">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 font-bold text-xs uppercase tracking-widest border border-white/10 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Daeyang University
            </span>
            <h1 className="text-4xl xl:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Smart Business<br />Incubation Hub
            </h1>
            <p className="text-blue-200 text-lg font-medium leading-relaxed max-w-sm">
              Empowering the Next Generation of Malawian Entrepreneurs.
            </p>
          </div>

          {/* Placeholder image slot */}
          <div className="border-2 border-dashed border-white/25 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[220px] hover:border-white/40 transition-colors">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white/50">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </div>
            <p className="text-white/40 text-xs font-semibold leading-relaxed max-w-[220px]">
              Insert a high-quality background photo of student collaboration or digital network graphics here.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-4 pb-10">
            {[
              { value: "50+", label: "Mentors" },
              { value: "MwK 2M+", label: "Funding Pool" },
              { value: "75%", label: "Success Rate" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-black text-cyan-400 leading-none">{s.value}</p>
                <p className="text-[10px] text-blue-300 font-bold uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── RIGHT FORM PANEL ─── */}
      <div className="flex-1 bg-[#F8FAFC] flex flex-col items-center justify-center px-6 py-12 min-h-screen">
        {/* Mobile back link */}
        <div className="w-full max-w-md mb-8 lg:hidden">
          <Link href="/" className="inline-flex items-center gap-2 text-[#1E3A8A] font-bold text-sm hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Card */}
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8 lg:p-10">

          {/* Mode toggle pills */}
          <div className="flex gap-1 bg-slate-100 rounded-xl p-1 mb-8">
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-extrabold tracking-wide transition-all duration-200 ${
                mode === "signup"
                  ? "bg-white text-[#1E3A8A] shadow-sm"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setMode("signin")}
              className={`flex-1 py-2.5 rounded-lg text-sm font-extrabold tracking-wide transition-all duration-200 ${
                mode === "signin"
                  ? "bg-white text-[#1E3A8A] shadow-sm"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              Sign In
            </button>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-black text-[#1E3A8A] tracking-tight leading-tight">
              {mode === "signup" ? "Create Your Account" : "Welcome Back"}
            </h2>
            <p className="text-slate-500 text-sm font-medium mt-2">
              {mode === "signup"
                ? "Join the Daeyang Smart Business Incubation Hub."
                : "Sign in to access your venture workspace."}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === "signup" && (
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chisomo Banda"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                {mode === "signup" ? "Student ID / Academic Email" : "Academic Email"}
              </label>
              <input
                type="email"
                placeholder="you@daeyang.ac.mw"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
              />
            </div>

            {mode === "signup" && (
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white"
                />
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#2563EB] text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg shadow-blue-500/25 hover:bg-[#1D4ED8] active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Connecting…
                </>
              ) : mode === "signup" ? (
                "Register Venture Account"
              ) : (
                "Login to Workspace"
              )}
            </button>
          </form>

          {/* Toggle link */}
          <p className="text-center text-sm text-slate-500 font-medium mt-6">
            {mode === "signup" ? (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setMode("signin")}
                  className="text-[#2563EB] font-extrabold hover:underline underline-offset-2 transition-colors"
                >
                  Sign In here
                </button>
              </>
            ) : (
              <>
                New to the Hub?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-[#2563EB] font-extrabold hover:underline underline-offset-2 transition-colors"
                >
                  Create an account here
                </button>
              </>
            )}
          </p>

          {/* Divider + back to home */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <Link
              href="/"
              className="text-xs text-slate-400 font-semibold hover:text-[#1E3A8A] transition-colors"
            >
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
