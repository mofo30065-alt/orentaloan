export function ProgressBar({
  current,
  total,
  label,
}: {
  current: number;
  total: number;
  label: string;
}) {
  const pct = (current / total) * 100;
  return (
    <div>
      <p className="text-micro text-text-muted">{label}</p>
      <div
        className="mt-xs h-[6px] w-full overflow-hidden rounded-pill bg-brume"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={total}
      >
        <div
          className="h-full rounded-pill bg-accent transition-all duration-300 ease-calm"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
