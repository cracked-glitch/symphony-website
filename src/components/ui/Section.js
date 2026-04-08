export default function Section({
  children,
  className = '',
  bg = '',
  accent = false,
  id,
}) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bg} ${className}`}
    >
      <div className={`mx-auto max-w-[1280px] px-6 ${accent ? 'border-l-2 border-cyan pl-8' : ''}`}>
        {children}
      </div>
    </section>
  );
}
