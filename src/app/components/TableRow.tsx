interface TableRowProps {
  year: string;
  title: string;
  filed: string;
  href?: string;
}

export function TableRow({ year, title, filed, href = '#' }: TableRowProps) {
  return (
    <div className="grid grid-cols-[100px_1fr_140px_100px] gap-6 items-center py-3 border-b border-rule-hairline last:border-b-0">
      <div className="text-ink-primary" style={{ fontFamily: 'var(--font-numeric)', fontSize: '15px', lineHeight: '20px', fontWeight: 500 }}>
        {year}
      </div>
      <div className="text-ink-primary" style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '26px' }}>
        {title}
      </div>
      <div className="text-ink-tertiary" style={{ fontFamily: 'var(--font-numeric)', fontSize: '15px', lineHeight: '20px', fontWeight: 500 }}>
        {filed}
      </div>
      <a
        href={href}
        className="text-accent-navy hover:underline focus:outline focus:outline-2 focus:outline-focus focus:outline-offset-[3px] inline-flex items-center gap-1"
        style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: '20px', fontWeight: 500 }}
      >
        View →
      </a>
    </div>
  );
}
