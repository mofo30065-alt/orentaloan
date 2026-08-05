'use client';

import { useEffect, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

interface CapitalInterestChartProps {
  principalCents: number;
  interestCents: number;
  principalLabel: string;
  interestLabel: string;
  title: string;
  formatValue: (cents: number) => string;
}

interface Palette {
  brand: string;
  accent: string;
}

/**
 * Donut capital / intérêts. Les couleurs sont lues sur les tokens CSS (--brand, --accent),
 * jamais codées en dur. Le graphe est décoratif (aria-hidden) : la légende porte l'info.
 */
export function CapitalInterestChart({
  principalCents,
  interestCents,
  principalLabel,
  interestLabel,
  title,
  formatValue,
}: CapitalInterestChartProps) {
  const [palette, setPalette] = useState<Palette | null>(null);

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    const channel = (name: string) => `rgb(${styles.getPropertyValue(name).trim()})`;
    setPalette({ brand: channel('--brand'), accent: channel('--accent') });
  }, []);

  const data = [
    { key: 'principal', label: principalLabel, value: principalCents, color: palette?.brand },
    { key: 'interest', label: interestLabel, value: interestCents, color: palette?.accent },
  ];

  return (
    <figure>
      <figcaption className="text-small font-medium text-text">{title}</figcaption>
      <div className="mt-sm flex flex-col items-center gap-lg sm:flex-row">
        <div className="h-[168px] w-[168px] shrink-0" aria-hidden>
          {palette ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={52}
                  outerRadius={80}
                  strokeWidth={0}
                  startAngle={90}
                  endAngle={-270}
                >
                  {data.map((entry) => (
                    <Cell key={entry.key} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full w-full rounded-pill bg-brume/40" />
          )}
        </div>
        <ul className="w-full space-y-xs">
          {data.map((entry) => (
            <li key={entry.key} className="flex items-center justify-between gap-md">
              <span className="flex items-center gap-xs text-small text-text">
                <span
                  className="h-3 w-3 rounded-[3px]"
                  style={{ backgroundColor: entry.color ?? 'transparent' }}
                />
                {entry.label}
              </span>
              <span className="font-mono text-small tabular-nums text-text">
                {formatValue(entry.value)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
