import { Heart, Plus } from "lucide-react";

export default function ProductCard({ product, liked, onLike, onAdd, onView }) {
  return <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/25 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-cyan-950/20">
    <div className="relative overflow-hidden bg-slate-900/80">
      <img src={product.image} alt={product.name} className="aspect-[1.05] w-full object-cover transition duration-700 group-hover:scale-105" />
      <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/75 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-cyan-300 backdrop-blur">{product.badge}</span>
      <button onClick={() => onLike(product.id)} aria-label="Add to wishlist" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-slate-950/70 text-white backdrop-blur transition hover:bg-white/15">{liked ? <Heart size={18} fill="currentColor" className="text-pink-400"/> : <Heart size={18}/>}</button>
      <button onClick={() => onView(product)} className="absolute bottom-4 left-4 right-4 translate-y-16 rounded-full bg-white/95 py-3 text-xs font-black text-slate-950 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">Quick view</button>
    </div>
    <div className="p-5"><div className="flex items-start justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{product.category}</p><h3 className="mt-1 text-lg font-black text-white">{product.name}</h3></div><span className="rounded-full bg-amber-400/10 px-2.5 py-1 text-xs font-bold text-amber-300">★ {product.rating}</span></div><div className="mt-4 flex items-end justify-between"><div><span className="text-xl font-black text-white">₹{product.price.toLocaleString("en-IN")}</span><span className="ml-2 text-xs text-slate-600 line-through">₹{product.oldPrice.toLocaleString("en-IN")}</span><p className="mt-1 text-[11px] text-slate-500">{product.reviews} reviews</p></div><button onClick={() => onAdd(product)} className="grid h-11 w-11 place-items-center rounded-full bg-cyan-400 text-slate-950 transition hover:scale-105 hover:bg-cyan-300" aria-label="Add to cart"><Plus size={19}/></button></div></div>
  </article>;
}
