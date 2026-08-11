import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/lib/i18n/navigation';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';
import { Eyebrow } from '@/components/common/Eyebrow';
import { buttonVariants } from '@/components/ui/Button';
import { IconArrowRight } from '@/components/common/icons';
import { TrustStrip } from '@/components/trust/TrustStrip';
import { StandardInfoBox } from '@/components/legal/StandardInfoBox';
import { ReadingCardPreview } from '@/components/diagnostic/ReadingCardPreview';
import { HeroMiniSimulator } from '@/components/home/HeroMiniSimulator';
import { CreditGrid } from '@/components/home/CreditGrid';
import { Advantages } from '@/components/home/Advantages';
import { Steps } from '@/components/home/Steps';
import { Testimonials } from '@/components/home/Testimonials';
import { KeyFigures } from '@/components/home/KeyFigures';
import { TrustBand } from '@/components/home/TrustBand';
import { BlogStrip } from '@/components/home/BlogStrip';

type PageParams = { params: Promise<{ locale: string }> };

function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-prose">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-sm text-h1">{title}</h2>
      {intro ? <p className="mt-md text-base text-text-muted">{intro}</p> : null}
    </div>
  );
}

export default async function HomePage({ params }: PageParams) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');
  const situationItems = t.raw('situation.items') as string[];

  return (
    <>
      {/* Hero */}
      <Section className="pt-xl md:pt-2xl">
        <Container>
          <div className="grid items-start gap-2xl lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>{t('hero.eyebrow')}</Eyebrow>
              <h1 className="mt-sm text-display">
                {t.rich('hero.title', { mark: (chunks) => <>{chunks}</> })}
              </h1>
              <p className="mt-md max-w-prose text-h3 font-normal text-text-muted">
                {t('hero.subtitle')}
              </p>
              <div className="mt-lg flex flex-col gap-sm sm:flex-row">
                <Link
                  href="/pre-diagnostic"
                  className={buttonVariants({ variant: 'accent', size: 'lg' })}
                >
                  {t('hero.ctaPrimary')}
                  <IconArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/simulateur"
                  className={buttonVariants({ variant: 'outline', size: 'lg' })}
                >
                  {t('hero.ctaSecondary')}
                </Link>
              </div>
              <div className="mt-2xl">
                <TrustStrip />
              </div>
            </div>
            <div className="lg:col-span-5">
              <HeroMiniSimulator />
            </div>
          </div>
          <img
            src="/images/photos/hero.jpg"
            alt=""
            className="mt-2xl aspect-[21/9] w-full rounded-xl object-cover shadow-md"
          />
        </Container>
      </Section>

      {/* Votre situation */}
      <Section className="bg-surface">
        <Container>
          <SectionHead
            eyebrow={t('situation.eyebrow')}
            title={t('situation.title')}
            intro={t('situation.intro')}
          />
          <ul className="mt-xl grid gap-md sm:grid-cols-2 lg:grid-cols-3">
            {situationItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-sm rounded-md border border-border bg-bg p-md"
              >
                <span className="mt-[7px] h-2 w-2 shrink-0 rounded-pill bg-accent" />
                <span className="text-base text-text">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Nos financements */}
      <Section>
        <Container>
          <SectionHead
            eyebrow={t('credits.eyebrow')}
            title={t('credits.title')}
            intro={t('credits.intro')}
          />
          <div className="mt-xl">
            <CreditGrid />
          </div>
        </Container>
      </Section>

      {/* Avantages */}
      <Section className="bg-surface">
        <Container>
          <SectionHead eyebrow={t('advantages.eyebrow')} title={t('advantages.title')} />
          <div className="mt-xl">
            <Advantages />
          </div>
        </Container>
      </Section>

      {/* Comment ça marche */}
      <Section>
        <Container>
          <SectionHead eyebrow={t('steps.eyebrow')} title={t('steps.title')} />
          <div className="mt-xl">
            <Steps />
          </div>
        </Container>
      </Section>

      {/* Élément signature : La Lecture */}
      <Section className="bg-surface">
        <Container>
          <div className="grid items-center gap-2xl lg:grid-cols-2">
            <ReadingCardPreview />
            <div>
              <p className="text-h3 font-normal text-text">{t('signature.intro')}</p>
              <p className="mt-md text-small text-text-muted">{t('signature.note')}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Témoignages */}
      <Section>
        <Container>
          <SectionHead eyebrow={t('testimonials.eyebrow')} title={t('testimonials.title')} />
          <div className="mt-xl">
            <Testimonials />
          </div>
        </Container>
      </Section>

      {/* Chiffres clés */}
      <Section className="bg-surface">
        <Container>
          <SectionHead eyebrow={t('figures.eyebrow')} title={t('figures.title')} />
          <div className="mt-xl">
            <KeyFigures />
          </div>
        </Container>
      </Section>

      {/* Réassurance + transparence */}
      <Section>
        <Container>
          <div className="grid gap-2xl lg:grid-cols-2">
            <div>
              <SectionHead
                eyebrow={t('trust.eyebrow')}
                title={t('trust.title')}
                intro={t('trust.intro')}
              />
              <div className="mt-lg">
                <TrustBand />
              </div>
            </div>
            <div className="flex flex-col gap-lg">
              <StandardInfoBox />
            </div>
          </div>
        </Container>
      </Section>

      {/* Blog */}
      <Section className="bg-surface">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-md">
            <SectionHead eyebrow={t('blog.eyebrow')} title={t('blog.title')} />
            <Link
              href="/blog"
              className="inline-flex items-center gap-2xs text-base font-medium text-brand hover:underline"
            >
              {t('blog.allLink')}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-xl">
            <BlogStrip locale={locale} />
          </div>
        </Container>
      </Section>

      {/* CTA final */}
      <Section className="bg-brand text-on-brand">
        <Container>
          <div className="flex flex-col items-start gap-lg lg:flex-row lg:items-center lg:justify-between">
            <h2 className="max-w-[20ch] text-h1 text-on-brand">{t('finalCta.title')}</h2>
            <Link
              href="/pre-diagnostic"
              className={`${buttonVariants({ variant: 'accent', size: 'lg' })} shrink-0`}
            >
              {t('finalCta.cta')}
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
