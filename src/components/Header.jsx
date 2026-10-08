import { useState } from "react";
import { Headphones, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";

export default function Header({ cartCount, onCart, onAuth, search, setSearch }) {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Products", "About", "Contact"];
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button onClick={() => go("home")} className="flex items-center gap-3 text-left">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20"><Headphones size={21} /></span>
          <span><span className="block text-lg font-black tracking-tight text-white">VibeWave</span><span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">Audio Store</span></span>
        </button>
        <nav className="hidden items-center gap-8 lg:flex">{links.map((link) => <button key={link} onClick={() => go(link.toLowerCase())} className="text-sm font-semibold text-slate-300 transition hover:text-white">{link}</button>)}</nav>
        <div className="hidden items-center gap-2 md:flex">
          <label className="flex h-11 w-52 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 focus-within:border-cyan-400/50"><Search size={17} className="text-slate-500" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search earbuds" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600" /></label>
          <button onClick={() => onAuth("login")} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-white"><UserRound size={18} /></button>
          <button onClick={onCart} className="relative grid h-11 w-11 place-items-center rounded-full bg-cyan-400 text-slate-950 transition hover:scale-105"><ShoppingBag size={18} />{cartCount > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-white px-1 text-[10px] font-black text-slate-950">{cartCount}</span>}</button>
        </div>
        <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white lg:hidden">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-white/10 bg-slate-950 px-5 py-5 lg:hidden"><div className="flex flex-col gap-4">{links.map((link) => <button key={link} onClick={() => go(link.toLowerCase())} className="text-left text-sm font-semibold text-slate-300">{link}</button>)}<button onClick={() => onAuth("login")} className="flex items-center gap-2 pt-2 text-left text-sm font-semibold text-cyan-300"><UserRound size={17}/> Login / Sign up</button><button onClick={onCart} className="flex items-center gap-2 text-left text-sm font-semibold text-white"><ShoppingBag size={17}/> Cart ({cartCount})</button></div></div>}
    </header>
  );
}
