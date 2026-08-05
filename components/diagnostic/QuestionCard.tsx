'use client';

import { useLocale, useTranslations } from 'next-intl';
import type { DiagnosticQuestion } from '@/data/diagnostic-questions';
import { RangeField } from '@/components/simulator/RangeField';
import { formatMoneyRounded } from '@/lib/format';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  question: DiagnosticQuestion;
  value: string | number | undefined;
  onChange: (value: string | number) => void;
}

export function QuestionCard({ question, value, onChange }: QuestionCardProps) {
  const t = useTranslations('diagnostic');
  const locale = useLocale();
  const labelKey = `questions.${question.id}.label`;
  const helpKey = `questions.${question.id}.help`;

  if (question.kind === 'number') {
    const numeric = typeof value === 'number' ? value : question.min;
    return (
      <fieldset>
        <legend className="text-h2">{t(labelKey)}</legend>
        {t.has(helpKey) ? <p className="mt-2xs text-small text-text-muted">{t(helpKey)}</p> : null}
        <div className="mt-lg">
          <RangeField
            id={`q-${question.id}`}
            label={t(labelKey)}
            labelHidden
            value={numeric}
            min={question.min}
            max={question.max}
            step={question.step}
            display={`${formatMoneyRounded(numeric, locale)} ${t('number.suffix')}`}
            onChange={onChange}
          />
        </div>
      </fieldset>
    );
  }

  return (
    <fieldset>
      <legend className="text-h2">{t(labelKey)}</legend>
      {t.has(helpKey) ? <p className="mt-2xs text-small text-text-muted">{t(helpKey)}</p> : null}
      <div role="radiogroup" aria-label={t(labelKey)} className="mt-lg grid gap-sm sm:grid-cols-2">
        {question.options.map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(option)}
              className={cn(
                'flex min-h-[52px] items-center rounded-md border p-md text-left text-base transition-colors',
                selected
                  ? 'border-accent bg-accent/10 text-text'
                  : 'border-border bg-surface text-text hover:border-accent/60',
              )}
            >
              {t(`options.${question.id}.${option}`)}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
