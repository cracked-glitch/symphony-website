export default function TrustBadge({ icon, text }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm">
      <span className="text-cyan">{icon}</span>
      <span className="text-text-secondary">{text}</span>
    </div>
  );
}
