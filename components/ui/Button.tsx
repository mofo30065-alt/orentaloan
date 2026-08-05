import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Bouton chartré (base de shadcn restylée intégralement — pas de look par défaut).
 * `buttonVariants` s'applique aussi à un <Link> pour les CTA-liens.
 * Cibles tactiles ≥ 44px, focus visible hérité de globals.css.
 */
export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-xs rounded-pill font-sans font-medium leading-none transition-colors duration-200 ease-calm disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        accent: 'bg-accent text-on-accent hover:bg-accent/90',
        brand: 'bg-brand text-on-brand hover:bg-brand/90',
        outline: 'border border-border bg-transparent text-text hover:bg-brand/5',
        ghost: 'bg-transparent text-text hover:bg-brand/5',
      },
      size: {
        md: 'min-h-[44px] px-lg text-base',
        lg: 'min-h-[52px] px-xl text-base',
        sm: 'min-h-[40px] px-md text-small',
      },
    },
    defaultVariants: {
      variant: 'accent',
      size: 'md',
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = 'button', ...props }, ref) => (
    <button ref={ref} type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  ),
);
Button.displayName = 'Button';
