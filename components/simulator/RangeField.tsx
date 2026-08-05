'use client';

import { Slider } from '@/components/ui/Slider';
import { cn } from '@/lib/utils';

interface RangeFieldProps {
  id: string;
  label: string;
  help?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (value: number) => void;
  /** Masque visuellement le label (conservé pour les lecteurs d'écran) quand un titre le porte déjà. */
  labelHidden?: boolean;
}

export function RangeField({
  id,
  label,
  help,
  value,
  min,
  max,
  step,
  display,
  onChange,
  labelHidden = false,
}: RangeFieldProps) {
  return (
    <div>
      <div className="flex items-baseline gap-md">
        <label
          htmlFor={id}
          className={cn('text-small font-medium text-text', labelHidden && 'sr-only')}
        >
          {label}
        </label>
        <span className="ml-auto font-mono text-h3 tabular-nums text-text">{display}</span>
      </div>
      <Slider
        id={id}
        aria-label={label}
        className="mt-xs"
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(next) => onChange(next[0] ?? value)}
      />
      {help ? <p className="mt-2xs text-micro text-text-muted">{help}</p> : null}
    </div>
  );
}
