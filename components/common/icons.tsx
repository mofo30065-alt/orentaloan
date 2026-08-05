import type { SVGProps } from 'react';

/**
 * Jeu d'icônes maison, cohérent avec la charte (trait 1.6, currentColor),
 * volontairement pas une librairie générique posée telle quelle.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export function IconShieldCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.2 2.8 7.4 7 9 4.2-1.6 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 11.5 2 2 4-4.5" />
    </svg>
  );
}

export function IconAddress(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c4.5-4 7-7.2 7-11a7 7 0 1 0-14 0c0 3.8 2.5 7 7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function IconNoFee(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 15c.5.8 1.6 1.3 3 1.3 1.7 0 3-.8 3-2.1 0-3-6-1.6-6-4.4 0-1.3 1.3-2.1 3-2.1 1.4 0 2.5.5 3 1.3" />
      <path d="M12 6v12" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 4h3l1.2 3.2-1.8 1.4a10 10 0 0 0 4.5 4.5l1.4-1.8L18 16.5v3a1 1 0 0 1-1.1 1A14 14 0 0 1 4 7.1 1 1 0 0 1 5 6l1.5-2Z" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconScale(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v16" />
      <path d="M7 20h10" />
      <path d="M5 7h14l-3 6H8L5 7Z" />
      <path d="M5 7 3.5 4M19 7l1.5-3" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconRoute(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="18" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <path d="M8.4 18H14a3.6 3.6 0 0 0 0-7.2H10a3.6 3.6 0 0 1 0-7.2h5.6" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6M17 13.4a5.5 5.5 0 0 1 3.5 5.1" />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.25 8.24a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24Zm-3.6 4.43c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.02 2.6.13.16 1.76 2.69 4.28 3.77.6.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.48-.6 1.68-1.19.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29-.25-.12-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.12-.17.25-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.35-.77-1.85-.2-.48-.4-.42-.55-.42l-.47-.01Z" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="m12 3.5 2.6 5.27 5.82.85-4.21 4.1.99 5.79L12 17.77 6.8 19.5l.99-5.79-4.21-4.1 5.82-.85L12 3.5Z" />
    </svg>
  );
}
