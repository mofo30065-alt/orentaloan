'use client';

import { useLocale } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import type { Installment } from '@/lib/finance';
import { formatMoneyCents } from '@/lib/format';

interface AmortizationTableProps {
  schedule: Installment[];
  labels: {
    caption: string;
    period: string;
    payment: string;
    principal: string;
    interest: string;
    balance: string;
  };
}

export function AmortizationTable({ schedule, labels }: AmortizationTableProps) {
  const locale = useLocale();
  const reduce = useReducedMotion();
  const money = (cents: number) => formatMoneyCents(cents, locale);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="mt-md overflow-hidden rounded-lg border border-border"
    >
      <div className="max-h-[420px] overflow-auto">
        <table className="w-full text-small">
          <caption className="sr-only">{labels.caption}</caption>
          <thead className="sticky top-0 bg-surface">
            <tr className="border-b border-border text-micro uppercase tracking-wide text-text-muted">
              <th scope="col" className="px-sm py-xs text-left font-semibold">
                {labels.period}
              </th>
              <th scope="col" className="px-sm py-xs text-right font-semibold">
                {labels.payment}
              </th>
              <th scope="col" className="px-sm py-xs text-right font-semibold">
                {labels.principal}
              </th>
              <th scope="col" className="px-sm py-xs text-right font-semibold">
                {labels.interest}
              </th>
              <th scope="col" className="px-sm py-xs text-right font-semibold">
                {labels.balance}
              </th>
            </tr>
          </thead>
          <tbody className="font-mono tabular-nums">
            {schedule.map((row) => (
              <tr key={row.period} className="border-b border-border/60 last:border-0">
                <td className="px-sm py-xs text-left text-text-muted">{row.period}</td>
                <td className="px-sm py-xs text-right text-text">{money(row.paymentCents)}</td>
                <td className="px-sm py-xs text-right text-text">{money(row.principalCents)}</td>
                <td className="px-sm py-xs text-right text-text">{money(row.interestCents)}</td>
                <td className="px-sm py-xs text-right text-text">{money(row.balanceCents)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
