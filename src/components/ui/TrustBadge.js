export default function TrustBadge({ icon, text }) {
  return (
    <div className="glass-subtle flex items-center gap-2 px-4 py-2 text-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-glow shrink-0" />
      <span className="text-text-secondary">{text}</span>
    </div>
  );
}
