interface StatCardProps {
  label: string;
  value: string;
  gloss?: string;
}

export function StatCard({ label, value, gloss }: StatCardProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-ink-secondary italic" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '22px' }}>
        {label}
      </div>
      <div className="text-ink-primary" style={{ fontFamily: 'var(--font-numeric)', fontSize: '28px', lineHeight: '32px', fontWeight: 600, letterSpacing: '-0.01em' }}>
        {value}
      </div>
      {gloss && (
        <div className="text-ink-tertiary italic" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '22px' }}>
          {gloss}
        </div>
      )}
    </div>
  );
}
