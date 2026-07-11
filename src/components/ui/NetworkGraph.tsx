/**
 * A quiet constellation of nodes and connections, used once as the hero's
 * signature ambient visual. One edge carries a slow traveling pulse — a
 * restrained nod to network/security monitoring rather than a literal
 * "hacker" graphic.
 */
const nodes = [
  { id: 'n1', x: 80, y: 90 },
  { id: 'n2', x: 260, y: 50 },
  { id: 'n3', x: 430, y: 120 },
  { id: 'n4', x: 200, y: 220 },
  { id: 'n5', x: 400, y: 260 },
  { id: 'n6', x: 570, y: 60 },
  { id: 'n7', x: 560, y: 230 },
];

const edges: [string, string][] = [
  ['n1', 'n2'],
  ['n2', 'n3'],
  ['n2', 'n4'],
  ['n3', 'n6'],
  ['n3', 'n5'],
  ['n4', 'n5'],
  ['n5', 'n7'],
  ['n3', 'n7'],
];

function find(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function NetworkGraph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 320"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {edges.map(([a, b], i) => {
        const from = find(a);
        const to = find(b);
        return (
          <line
            key={i}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="currentColor"
            className="text-ink-600"
            strokeWidth="1"
          />
        );
      })}

      {/* One connection carries a slow traveling pulse. */}
      <line
        x1={find('n2').x}
        y1={find('n2').y}
        x2={find('n3').x}
        y2={find('n3').y}
        stroke="#4C82FF"
        strokeWidth="1.4"
        strokeDasharray="6 18"
        className="animate-dash-flow"
        opacity="0.8"
      />

      {nodes.map((n) => (
        <circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={n.id === 'n2' || n.id === 'n3' ? 4 : 3}
          fill={n.id === 'n2' || n.id === 'n3' ? '#4C82FF' : 'currentColor'}
          className={n.id === 'n2' || n.id === 'n3' ? '' : 'text-ink-500'}
        />
      ))}
    </svg>
  );
}
