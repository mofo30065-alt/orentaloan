'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useReducedMotion } from 'framer-motion';

interface AnimatedFigureProps {
  valueCents: number;
  format: (cents: number) => string;
  className?: string;
}

/**
 * Chiffre qui se recompose en douceur quand la valeur change (au service de la lecture,
 * pas de la décoration). Respecte prefers-reduced-motion : mise à jour immédiate.
 */
export function AnimatedFigure({ valueCents, format, className }: AnimatedFigureProps) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(valueCents);
  const previous = useRef(valueCents);

  useEffect(() => {
    if (reduce) {
      setDisplay(valueCents);
      previous.current = valueCents;
      return;
    }
    const controls = animate(previous.current, valueCents, {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => setDisplay(value),
    });
    previous.current = valueCents;
    return () => controls.stop();
  }, [valueCents, reduce]);

  return <span className={className}>{format(Math.round(display))}</span>;
}
