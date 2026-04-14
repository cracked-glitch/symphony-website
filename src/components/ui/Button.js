import Link from 'next/link';

const variants = {
  primary: 'bg-gradient-to-r from-purple to-purple-dark text-white glow-purple hover:shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:scale-[1.02]',
  secondary: 'bg-gradient-to-r from-indigo to-indigo-dark text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:scale-[1.02]',
  ghost: 'bg-transparent text-cyan border border-cyan/30 hover:bg-cyan/5 hover:border-cyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  disabled = false,
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
