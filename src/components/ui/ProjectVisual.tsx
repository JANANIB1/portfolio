/**
 * Since no real product screenshots were supplied, each project gets a
 * bespoke abstract "instrument panel" built from CSS/SVG that reflects what
 * the product actually does, instead of a generic placeholder image.
 */
export default function ProjectVisual({ id }: { id: string }) {
  switch (id) {
    case 'cybershield':
      return <CyberShieldVisual />;
    case 'resumeiq':
      return <ResumeIQVisual />;
    case 'truetrace':
      return <TrueTraceVisual />;
    case 'vaulttrack':
      return <VaultTrackVisual />;
    default:
      return null;
  }
}

function CyberShieldVisual() {
  const bars = [40, 65, 30, 80, 55, 90, 45, 70, 35, 60];
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-canvas-line bg-canvas/60 p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-signal">
          soc.dashboard
        </span>
        <span className="flex h-1.5 w-1.5 animate-pulse-signal rounded-full bg-signal" />
      </div>
      <div className="mb-4 flex items-end gap-1.5 h-24">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-signal/20 to-signal/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['CRITICAL', 'HIGH', 'MEDIUM'].map((label, i) => (
          <div key={label} className="rounded-lg border border-canvas-line bg-canvas-panel p-2">
            <p className="font-mono text-[9px] uppercase text-ink-400">{label}</p>
            <p className="font-display text-sm font-semibold text-ink-100">
              {[3, 12, 27][i]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResumeIQVisual() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-canvas-line bg-canvas/60 p-6">
      <svg viewBox="0 0 120 70" className="w-40">
        <path
          d="M10 65 A50 50 0 0 1 110 65"
          fill="none"
          stroke="currentColor"
          className="text-canvas-line"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M10 65 A50 50 0 0 1 96 30"
          fill="none"
          stroke="currentColor"
          className="text-accent"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
      <p className="-mt-4 font-display text-2xl font-semibold text-ink-100">82</p>
      <p className="font-mono text-[10px] uppercase tracking-widest text-ink-400">ats score</p>
    </div>
  );
}

function TrueTraceVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-canvas-line bg-canvas/60 p-6">
      <div className="flex items-center gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/40 bg-canvas-panel font-mono text-[10px] text-accent">
              0x{i}
            </div>
            {i < 3 && <div className="h-px w-4 bg-accent/40" />}
          </div>
        ))}
      </div>
      <span className="absolute bottom-3 font-mono text-[9px] uppercase tracking-widest text-ink-400">
        block-verified
      </span>
    </div>
  );
}

function VaultTrackVisual() {
  const points = '0,40 15,30 30,34 45,18 60,24 75,8 90,14 100,4';
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-canvas-line bg-canvas/60 p-5">
      <span className="font-mono text-[10px] uppercase tracking-widest text-signal">
        spend.trend
      </span>
      <svg viewBox="0 0 100 44" className="mt-4 h-24 w-full" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke="currentColor"
          className="text-signal"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="mt-3 flex gap-2">
        {['Groceries', 'Transit', 'Rent'].map((c) => (
          <span
            key={c}
            className="rounded-md border border-canvas-line px-2 py-1 font-mono text-[9px] text-ink-300"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
