interface CompanyCardProps {
  name: string;
  sector: string;
  description: string;
  since: string;
}

export function CompanyCard({ name, sector, description, since }: CompanyCardProps) {
  return (
    <article className="flex flex-col gap-2 p-6 border-t border-rule-hairline">
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', lineHeight: '30px', fontWeight: 500, letterSpacing: '-0.005em' }}>
        {name}
      </h3>
      <p className="text-ink-tertiary italic" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '22px' }}>
        {sector}
      </p>
      <p className="text-ink-primary" style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '26px' }}>
        {description}
      </p>
      <footer className="text-ink-tertiary mt-2" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '22px' }}>
        Since {since}
      </footer>
    </article>
  );
}
