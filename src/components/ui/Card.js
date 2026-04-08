export default function Card({
  children,
  icon,
  className = '',
  hover = true,
}) {
  return (
    <div className={`rounded-xl border border-border bg-bg-secondary p-6 md:p-8 ${hover ? 'transition-all duration-300 hover:border-border-light hover:shadow-lg hover:shadow-purple/5 hover:-translate-y-1' : ''} ${className}`}>
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
          {icon}
        </div>
      )}
      {children}
    </div>
  );
}
