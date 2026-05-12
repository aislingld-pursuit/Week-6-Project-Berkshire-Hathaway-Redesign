interface PrincipleCardProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

export function PrincipleCard({ number, title, children }: PrincipleCardProps) {
  return (
    <article className="flex gap-6 py-8 border-b border-rule-hairline last:border-b-0">
      <div
        className="text-accent-gold flex-shrink-0 w-12"
        style={{ fontFamily: 'var(--font-display)', fontSize: '32px', lineHeight: '40px', fontWeight: 500 }}
      >
        {number}
      </div>
      <div className="flex-1">
        <h3 className="mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', lineHeight: '30px', fontWeight: 500 }}>
          {title}
        </h3>
        <div className="text-ink-primary" style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '26px' }}>
          {children}
        </div>
      </div>
    </article>
  );
}
