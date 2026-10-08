import { Search, SlidersHorizontal } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, categories, category, setCategory, search, setSearch, wishlist, onLike, onAdd, onView }) {
  return <section id="products" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
    <SectionHeading eyebrow="Shop the collection" title="Find your perfect sound" description="From everyday TWS essentials to immersive noise-cancelling flagships, every pair is selected for sound, comfort and style." />
    <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex gap-2 overflow-x-auto pb-1">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={"whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold transition " + (category === item ? "bg-cyan-400 text-slate-950" : "border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white")}>{item}</button>)}</div>
      <label className="flex h-12 w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 lg:max-w-xs"><Search size={17} className="text-slate-500"/><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name..." className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"/><SlidersHorizontal size={16} className="text-slate-600"/></label>
    </div>
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{products.map((product) => <ProductCard key={product.id} product={product} liked={wishlist.includes(product.id)} onLike={onLike} onAdd={onAdd} onView={onView}/>)}</div>
    {!products.length && <div className="mt-8 rounded-3xl border border-dashed border-white/10 py-20 text-center text-slate-500">No earbuds match your search. Try another category or name.</div>}
  </section>;
}
