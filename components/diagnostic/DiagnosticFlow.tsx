'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { diagnosticQuestions } from '@/data/diagnostic-questions';
import { evaluateDiagnostic } from '@/lib/diagnostic/evaluate';
import type { DiagnosticAnswers, Reading } from '@/lib/diagnostic/types';
import { QuestionCard } from '@/components/diagnostic/QuestionCard';
import { ReadingCard } from '@/components/diagnostic/ReadingCard';
import { Button } from '@/components/ui/Button';
import { IconArrowRight } from '@/components/common/icons';

type Phase = 'intro' | 'questions' | 'result';
type AnswerMap = Partial<Record<keyof DiagnosticAnswers, string | number>>;

const DEFAULT_ANSWERS: AnswerMap = { monthlyIncome: 2500, monthlyCharges: 800 };

export function DiagnosticFlow() {
  const t = useTranslations('diagnostic');
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>('intro');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>(DEFAULT_ANSWERS);
  const [reading, setReading] = useState<Reading | null>(null);

  const total = diagnosticQuestions.length;
  const question = diagnosticQuestions[step]!;
  const currentValue = answers[question.id];
  const answered = currentValue !== undefined;

  const setValue = (value: string | number) =>
    setAnswers((current) => ({ ...current, [question.id]: value }));

  const goNext = () => {
    if (step < total - 1) {
      setStep(step + 1);
      return;
    }
    setReading(evaluateDiagnostic(answers as DiagnosticAnswers));
    setPhase('result');
  };

  const goBack = () => setStep((current) => Math.max(0, current - 1));

  const restart = () => {
    setAnswers(DEFAULT_ANSWERS);
    setStep(0);
    setReading(null);
    setPhase('intro');
  };

  if (phase === 'intro') {
    return (
      <div className="mx-auto max-w-prose text-center">
        <p className="text-micro font-semibold uppercase tracking-[0.14em] text-text-muted">
          {t('intro.eyebrow')}
        </p>
        <h1 className="mt-sm text-h1">{t('intro.title')}</h1>
        <p className="mt-md text-base text-text-muted">{t('intro.subtitle')}</p>
        <p className="mt-md text-micro text-text-muted">{t('intro.note')}</p>
        <Button className="mt-lg" size="lg" onClick={() => setPhase('questions')}>
          {t('intro.start')}
          <IconArrowRight className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  if (phase === 'result' && reading) {
    return (
      <div className="mx-auto max-w-[40rem]">
        <ReadingCard reading={reading} onRestart={restart} />
      </div>
    );
  }

  const progress = ((step + 1) / total) * 100;

  return (
    <div className="mx-auto max-w-[40rem]">
      <p className="text-micro text-text-muted">{t('ui.progress', { current: step + 1, total })}</p>
      <div className="mt-xs h-[6px] w-full overflow-hidden rounded-pill bg-brume">
        <div
          className="h-full rounded-pill bg-accent transition-all duration-300 ease-calm"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={reduce ? false : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: -16 }}
            transition={{ duration: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <QuestionCard question={question} value={currentValue} onChange={setValue} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-lg flex items-center justify-between gap-sm">
        <Button variant="ghost" size="md" onClick={goBack} disabled={step === 0}>
          {t('ui.back')}
        </Button>
        <Button size="md" onClick={goNext} disabled={!answered}>
          {step < total - 1 ? t('ui.next') : t('ui.result')}
          <IconArrowRight className="h-4 w-4" />
        </Button>
      </div>
      {!answered ? (
        <p className="mt-xs text-right text-micro text-text-muted">{t('ui.required')}</p>
      ) : null}
    </div>
  );
}
