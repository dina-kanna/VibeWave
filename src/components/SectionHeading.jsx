export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={"max-w-2xl " + (align === "center" ? "mx-auto text-center" : "")}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-400">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>}
    </div>
  );
}
