import { ArrowRight, Play, ShieldCheck, Sparkles, Star } from "lucide-react";

export default function Hero({ onShop }) {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300"><Sparkles size={14}/> New generation audio</div>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">Hear every detail.<br/><span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">Feel every beat.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">Premium wireless earbuds engineered for rich sound, effortless comfort and all-day freedom. Find your next favorite pair.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><button onClick={onShop} className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-300">Shop earbuds <ArrowRight size={17} className="transition group-hover:translate-x-1"/></button><button onClick={onShop} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-black text-white transition hover:bg-white/10"><Play size={16} fill="currentColor"/> Explore collection</button></div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-400"><span className="flex items-center gap-2"><ShieldCheck size={17} className="text-cyan-400"/> 1-year warranty</span><span>Free delivery over ₹999</span><span className="flex items-center gap-1"><Star size={15} fill="currentColor" className="text-amber-300"/> 4.8/5 average</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-xl"><div className="absolute inset-10 rounded-full bg-cyan-400/20 blur-3xl" /><div className="relative rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur"><div className="overflow-hidden rounded-[2.4rem] bg-slate-900"><img src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1100&q=90" alt="Premium wireless earbuds" className="aspect-square w-full object-cover transition duration-700 hover:scale-105"/></div><div className="absolute -bottom-5 left-7 right-7 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/90 px-5 py-4 shadow-2xl backdrop-blur-xl"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">Featured</p><p className="mt-1 font-black text-white">AeroPods Pro X</p></div><div className="text-right"><p className="text-lg font-black text-white">₹6,999</p><p className="text-xs text-slate-500">was ₹8,999</p></div></div></div></div>
      </div>
    </section>
  );
}
