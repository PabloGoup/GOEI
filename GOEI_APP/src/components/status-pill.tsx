export function StatusPill({ tone, children }: { tone: "success" | "warning" | "critical" | "neutral"; children: React.ReactNode }) {
  return <span className={`status-pill ${tone}`}><i aria-hidden="true" />{children}</span>;
}
