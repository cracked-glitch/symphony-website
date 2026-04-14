export default function NodeGraphBg({ className = '', density = 'normal' }) {
  const nodes = density === 'sparse' ? sparseNodes : density === 'dense' ? denseNodes : normalNodes;
  const connections = density === 'sparse' ? sparseConnections : density === 'dense' ? denseConnections : normalConnections;

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines */}
        {connections.map((conn, i) => (
          <line
            key={`conn-${i}`}
            x1={nodes[conn[0]].x}
            y1={nodes[conn[0]].y}
            x2={nodes[conn[1]].x}
            y2={nodes[conn[1]].y}
            stroke={conn[2] || '#7C3AED'}
            strokeWidth="0.5"
            opacity="0.08"
          />
        ))}
        {/* Nodes */}
        {nodes.map((node, i) => (
          <circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.color}
            opacity={node.opacity}
            className={node.pulse ? 'animate-pulse-glow' : ''}
          />
        ))}
      </svg>
    </div>
  );
}

const sparseNodes = [
  { x: 150, y: 120, r: 2.5, color: '#7C3AED', opacity: 0.2, pulse: true },
  { x: 350, y: 250, r: 2, color: '#06B6D4', opacity: 0.15 },
  { x: 550, y: 100, r: 3, color: '#6366F1', opacity: 0.18, pulse: true },
  { x: 750, y: 300, r: 2, color: '#7C3AED', opacity: 0.12 },
  { x: 950, y: 150, r: 2.5, color: '#06B6D4', opacity: 0.16 },
  { x: 250, y: 450, r: 1.5, color: '#8B5CF6', opacity: 0.1 },
  { x: 650, y: 500, r: 2, color: '#6366F1', opacity: 0.14, pulse: true },
  { x: 1050, y: 400, r: 2, color: '#7C3AED', opacity: 0.12 },
  { x: 450, y: 650, r: 1.5, color: '#06B6D4', opacity: 0.1 },
  { x: 850, y: 600, r: 2.5, color: '#8B5CF6', opacity: 0.15 },
];

const sparseConnections = [
  [0, 1, '#7C3AED'], [1, 2, '#6366F1'], [2, 3, '#7C3AED'],
  [3, 4, '#06B6D4'], [0, 5, '#8B5CF6'], [5, 6, '#6366F1'],
  [6, 7, '#7C3AED'], [5, 8, '#06B6D4'], [8, 9, '#8B5CF6'],
  [6, 9, '#6366F1'], [3, 7, '#7C3AED'],
];

const normalNodes = [
  { x: 100, y: 100, r: 2.5, color: '#7C3AED', opacity: 0.2, pulse: true },
  { x: 280, y: 180, r: 2, color: '#06B6D4', opacity: 0.15 },
  { x: 450, y: 80, r: 3, color: '#6366F1', opacity: 0.18, pulse: true },
  { x: 620, y: 220, r: 2, color: '#7C3AED', opacity: 0.12 },
  { x: 800, y: 120, r: 2.5, color: '#06B6D4', opacity: 0.16 },
  { x: 980, y: 200, r: 2, color: '#8B5CF6', opacity: 0.14 },
  { x: 1100, y: 100, r: 1.5, color: '#7C3AED', opacity: 0.1 },
  { x: 180, y: 350, r: 2, color: '#6366F1', opacity: 0.14 },
  { x: 380, y: 400, r: 2.5, color: '#7C3AED', opacity: 0.16, pulse: true },
  { x: 560, y: 350, r: 1.5, color: '#06B6D4', opacity: 0.12 },
  { x: 740, y: 420, r: 2, color: '#6366F1', opacity: 0.15 },
  { x: 920, y: 380, r: 3, color: '#7C3AED', opacity: 0.18, pulse: true },
  { x: 1060, y: 340, r: 2, color: '#06B6D4', opacity: 0.13 },
  { x: 150, y: 550, r: 1.5, color: '#8B5CF6', opacity: 0.1 },
  { x: 340, y: 600, r: 2, color: '#7C3AED', opacity: 0.14 },
  { x: 520, y: 560, r: 2.5, color: '#06B6D4', opacity: 0.16, pulse: true },
  { x: 700, y: 620, r: 2, color: '#6366F1', opacity: 0.12 },
  { x: 880, y: 580, r: 1.5, color: '#7C3AED', opacity: 0.1 },
  { x: 1040, y: 550, r: 2, color: '#8B5CF6', opacity: 0.15 },
];

const normalConnections = [
  [0, 1, '#7C3AED'], [1, 2, '#6366F1'], [2, 3, '#7C3AED'], [3, 4, '#06B6D4'],
  [4, 5, '#8B5CF6'], [5, 6, '#7C3AED'], [0, 7, '#6366F1'], [7, 8, '#7C3AED'],
  [8, 9, '#06B6D4'], [9, 10, '#6366F1'], [10, 11, '#7C3AED'], [11, 12, '#06B6D4'],
  [7, 13, '#8B5CF6'], [13, 14, '#7C3AED'], [14, 15, '#06B6D4'], [15, 16, '#6366F1'],
  [16, 17, '#7C3AED'], [17, 18, '#8B5CF6'], [1, 8, '#6366F1'], [3, 10, '#7C3AED'],
  [5, 12, '#06B6D4'], [8, 14, '#7C3AED'], [10, 16, '#6366F1'], [2, 9, '#8B5CF6'],
];

const denseNodes = [...normalNodes,
  { x: 200, y: 250, r: 1.5, color: '#6366F1', opacity: 0.1 },
  { x: 500, y: 300, r: 2, color: '#7C3AED', opacity: 0.12 },
  { x: 850, y: 280, r: 1.5, color: '#06B6D4', opacity: 0.1 },
  { x: 300, y: 500, r: 2, color: '#8B5CF6', opacity: 0.13 },
  { x: 650, y: 480, r: 1.5, color: '#6366F1', opacity: 0.1 },
  { x: 1000, y: 460, r: 2, color: '#7C3AED', opacity: 0.12 },
];

const denseConnections = [...normalConnections,
  [19, 1, '#6366F1'], [20, 3, '#7C3AED'], [21, 5, '#06B6D4'],
  [22, 8, '#8B5CF6'], [23, 10, '#6366F1'], [24, 12, '#7C3AED'],
  [19, 7, '#7C3AED'], [20, 9, '#06B6D4'], [22, 14, '#8B5CF6'],
];
