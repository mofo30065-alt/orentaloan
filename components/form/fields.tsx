'use client';

import type { ReactNode } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { cn } from '@/lib/utils';

const inputClass =
  'min-h-[44px] w-full rounded-md border border-border bg-bg px-md text-base text-text placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';

function FieldShell({
  id,
  label,
  error,
  help,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  help?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-small font-medium text-text">
        {label}
      </label>
      <div className="mt-2xs">{children}</div>
      {help ? <p className="mt-2xs text-micro text-text-muted">{help}</p> : null}
      {error ? (
        <p className="mt-2xs text-micro text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

interface TextFieldProps {
  id: string;
  label: string;
  error?: string;
  help?: string;
  type?: string;
  autoComplete?: string;
  inputMode?: 'numeric' | 'text' | 'email' | 'tel';
  registration: UseFormRegisterReturn;
}

export function TextField({
  id,
  label,
  error,
  help,
  type = 'text',
  autoComplete,
  inputMode,
  registration,
}: TextFieldProps) {
  return (
    <FieldShell id={id} label={label} error={error} help={help}>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        className={cn(inputClass, error && 'border-danger')}
        {...registration}
      />
    </FieldShell>
  );
}

export function SelectField({
  id,
  label,
  error,
  help,
  placeholder,
  options,
  registration,
}: {
  id: string;
  label: string;
  error?: string;
  help?: string;
  placeholder: string;
  options: { value: string; label: string }[];
  registration: UseFormRegisterReturn;
}) {
  return (
    <FieldShell id={id} label={label} error={error} help={help}>
      <select
        id={id}
        aria-invalid={error ? true : undefined}
        className={cn(inputClass, error && 'border-danger')}
        {...registration}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

export function CheckboxField({
  id,
  label,
  error,
  registration,
}: {
  id: string;
  label: string;
  error?: string;
  registration: UseFormRegisterReturn;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex items-start gap-sm">
        <input
          id={id}
          type="checkbox"
          className="mt-[2px] h-5 w-5 shrink-0 accent-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          {...registration}
        />
        <span className="text-small text-text">{label}</span>
      </label>
      {error ? (
        <p className="mt-2xs text-micro text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Champ leurre anti-spam : hors écran, ignoré des lecteurs d'écran et du clavier. */
export function Honeypot({ registration }: { registration: UseFormRegisterReturn }) {
  return (
    <div aria-hidden className="pointer-events-none absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
      <label>
        Ne pas remplir
        <input tabIndex={-1} autoComplete="off" {...registration} />
      </label>
    </div>
  );
}
