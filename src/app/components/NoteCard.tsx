interface NoteCardProps {
  number: number;
  active?: boolean;
  children: React.ReactNode;
}

export function NoteCard({ number, active = false, children }: NoteCardProps) {
  const borderColor = active ? 'border-accent-gold' : 'border-transparent';
  const bgColor = active ? 'bg-bg-surface' : 'bg-transparent';

  return (
    <aside className={`flex flex-col gap-2 p-4 border-l-2 ${borderColor} ${bgColor} transition-all duration-200`}>
      <div
        className="flex items-center justify-center w-6 h-6 rounded-full bg-accent-gold text-bg-page flex-shrink-0"
        style={{ fontFamily: 'var(--font-numeric)', fontSize: '13px', fontWeight: 600 }}
      >
        {number}
      </div>
      <div className="text-ink-secondary" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '22px' }}>
        {children}
      </div>
    </aside>
  );
}
