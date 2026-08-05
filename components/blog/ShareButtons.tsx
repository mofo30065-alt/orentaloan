'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export function ShareButtons() {
  const t = useTranslations('blog');
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const encoded = encodeURIComponent(url);
  const linkClass =
    'rounded-pill border border-border px-md py-2xs text-small text-text hover:border-accent';

  return (
    <div className="flex flex-wrap items-center gap-sm">
      <span className="text-small font-medium text-text-muted">{t('shareTitle')}</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        LinkedIn
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        X
      </a>
    </div>
  );
}
