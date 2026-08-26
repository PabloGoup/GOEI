export function ProgressRing({ value }: { value: number }) {
  return (
    <div className="progress-ring" style={{ "--progress": `${value * 3.6}deg` } as React.CSSProperties}>
      <span><strong>{value}%</strong><small>completado</small></span>
    </div>
  );
}
