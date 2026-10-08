import { useMemo, useState } from "react";
import { CheckCircle2, ShieldCheck, Truck, Zap, Star } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./components/ProductDetails";
import CartDrawer from "./components/CartDrawer";
import AuthModal from "./components/AuthModal";
import Footer from "./components/Footer";
import SectionHeading from "./components/SectionHeading";
import { categories, products, reviews } from "./data/products";

export default function App() {
  const [category, setCategory] = useState("All"), [search, setSearch] = useState(""), [wishlist, setWishlist] = useState([]), [cart, setCart] = useState([]), [selected, setSelected] = useState(null), [cartOpen, setCartOpen] = useState(false), [auth, setAuth] = useState(null), [toast, setToast] = useState("");
  const filtered = useMemo(() => products.filter(p => (category === "All" || p.category === category) && p.name.toLowerCase().includes(search.toLowerCase())), [category, search]);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const addToCart = (product, qty = 1) => { setCart(prev => { const found = prev.find(item => item.product.id === product.id); return found ? prev.map(item => item.product.id === product.id ? {...item, qty: item.qty + qty} : item) : [...prev, {product, qty}]; }); setToast(product.name + " added to cart"); setCartOpen(true); setTimeout(() => setToast(""), 2200); };
  const updateQty = (id, qty) => setCart(prev => prev.map(item => item.product.id === id ? {...item, qty} : item));
  const remove = (id) => setCart(prev => prev.filter(item => item.product.id !== id));
  const scrollProducts = () => document.getElementById("products")?.scrollIntoView({behavior:"smooth"});

  return <div className="min-h-screen bg-slate-950 text-white">
    <Header cartCount={cartCount} onCart={() => setCartOpen(true)} onAuth={setAuth} search={search} setSearch={setSearch}/>
    <main>
      <Hero onShop={scrollProducts}/>
      <section className="border-y border-white/5 bg-white/[0.02]"><div className="mx-auto grid max-w-7xl gap-px px-5 sm:grid-cols-3 sm:px-8"><div className="flex items-center gap-4 py-7 sm:py-9"><Truck className="text-cyan-400"/><div><p className="font-bold text-white">Free delivery</p><p className="text-xs text-slate-500">On orders above ₹999</p></div></div><div className="flex items-center gap-4 border-white/5 py-7 sm:border-x sm:px-8 sm:py-9"><ShieldCheck className="text-cyan-400"/><div><p className="font-bold text-white">1-year warranty</p><p className="text-xs text-slate-500">Peace of mind with every purchase</p></div></div><div className="flex items-center gap-4 py-7 sm:pl-8 sm:py-9"><Zap className="text-cyan-400"/><div><p className="font-bold text-white">Fast support</p><p className="text-xs text-slate-500">Real humans, real help</p></div></div></div></section>
      <ProductGrid products={filtered} categories={categories} category={category} setCategory={setCategory} search={search} setSearch={setSearch} wishlist={wishlist} onLike={(id)=>setWishlist(prev=>prev.includes(id)?prev.filter(x=>x!==id):[...prev,id])} onAdd={addToCart} onView={setSelected}/>
      <section id="about" className="scroll-mt-24 border-y border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2"><div className="overflow-hidden rounded-[2.5rem] border border-white/10"><img src="https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&w=1200&q=85" alt="Wireless earbuds lifestyle" className="aspect-[4/3] w-full object-cover"/></div><div><SectionHeading eyebrow="Why VibeWave" title="Better sound. Less compromise." description="We believe great audio should feel effortless. That's why our collection balances immersive sound, reliable battery life and thoughtful comfort at prices that make sense."/><div className="mt-8 grid gap-4 sm:grid-cols-2">{["Curated audio lineup","Transparent pricing","Secure checkout","Easy 7-day returns"].map(item=><div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm font-semibold text-slate-300"><CheckCircle2 size={18} className="text-cyan-400"/>{item}</div>)}</div></div></div></section>
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8"><SectionHeading eyebrow="Customer love" title="Loved by listeners" description="Real feedback from customers who made the switch to wireless." align="center"/><div className="mt-10 grid gap-5 md:grid-cols-3">{reviews.map(review=><article key={review.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"><div className="flex gap-1 text-amber-300">{Array.from({length:review.rating}).map((_,i)=><Star key={i} size={15} fill="currentColor"/>)}</div><p className="mt-5 text-sm leading-7 text-slate-300">“{review.text}”</p><div className="mt-7"><p className="text-sm font-bold text-white">{review.name}</p><p className="mt-1 text-xs text-slate-600">{review.role}</p></div></article>)}</div></section>
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8"><div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/15 via-sky-500/10 to-violet-500/15 p-8 sm:p-12"><div className="relative z-10 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Member offers</p><h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Get ₹500 off your first order.</h2><p className="mt-4 text-sm leading-7 text-slate-400">Join the VibeWave list for early access to drops, limited offers and audio guides.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><input placeholder="Your email address" className="h-12 flex-1 rounded-full border border-white/10 bg-slate-950/60 px-5 text-sm text-white outline-none placeholder:text-slate-600"/><button onClick={()=>setToast("Welcome to the VibeWave list")} className="rounded-full bg-white px-7 py-3 text-sm font-black text-slate-950 hover:bg-cyan-300">Subscribe</button></div></div></div></section>
    </main>
    <Footer/>
    {selected && <ProductDetails product={selected} onClose={()=>setSelected(null)} onAdd={addToCart}/>}
    {cartOpen && <CartDrawer items={cart} onClose={()=>setCartOpen(false)} onQty={updateQty} onRemove={remove} onCheckout={()=>setToast("Checkout UI ready — connect your payment provider to go live.")}/>}
    <AuthModal mode={auth} setMode={setAuth} onClose={()=>setAuth(null)}/>
    {toast && <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-cyan-400/20 bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-2xl">{toast}</div>}
  </div>;
}
