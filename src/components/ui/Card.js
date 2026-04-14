export default function Card({
  children,
  icon,
  className = '',
  hover = true,
  glow = false,
}) {
  return (
    <div className={`gradient-border-subtle group ${className}`}>
      <div className={`glass rounded-[calc(1rem-1px)] p-6 md:p-8 h-full ${hover ? 'transition-all duration-300 group-hover:shadow-[0_8px_32px_rgba(124,58,237,0.12)] group-hover:scale-[1.01]' : ''} ${glow ? 'glow-purple' : ''}`}>
        {icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple/20 to-cyan/10 text-cyan">
            {icon}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
