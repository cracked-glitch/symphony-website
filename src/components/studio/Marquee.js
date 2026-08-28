// Venue-marquee ticker. The track holds the item list twice so the CSS
// translateX(-50%) loop reads as continuous.
export default function Marquee({ items, reverse = false }) {
  const doubled = [...items, ...items];

  return (
    <div className="st-marquee" aria-hidden="true">
      <div
        className="st-marquee-track"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
