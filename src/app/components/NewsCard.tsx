interface NewsCardProps {
  date: string;
  headline: string;
  gloss: string;
}

export function NewsCard({ date, headline, gloss }: NewsCardProps) {
  return (
    <article className="flex flex-col md:flex-row gap-2 md:gap-6 py-6 border-b border-rule-hairline last:border-b-0">
      <div className="md:w-[120px] md:flex-shrink-0">
        <time className="text-ink-tertiary" style={{ fontFamily: 'var(--font-numeric)', fontSize: '15px', lineHeight: '20px', fontWeight: 500 }}>
          {date}
        </time>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', lineHeight: '30px', fontWeight: 500, letterSpacing: '-0.005em' }}>
          {headline}
        </h3>
        <p className="text-ink-primary" style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '26px' }}>
          {gloss}
        </p>
      </div>
    </article>
  );
}
