export default function Testimonial({ quote, name, title, company }) {
  return (
    <div className="rounded-xl border-t-2 border-t-cyan border border-border bg-bg-secondary p-6 md:p-8">
      <blockquote className="text-text-secondary italic leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-purple/20 flex items-center justify-center text-purple font-bold text-sm">
          {name?.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-text-primary">{name}</p>
          <p className="text-xs text-text-tertiary">{title}, {company}</p>
        </div>
      </div>
    </div>
  );
}
