interface AnnotationMarkProps {
  number: number;
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function AnnotationMark({ number, active = false, children, onClick }: AnnotationMarkProps) {
  const bgOpacity = active ? 'bg-accent-gold/[0.18]' : 'bg-accent-gold/[0.08]';

  return (
    <span
      className={`lg:${bgOpacity} border-b border-dotted border-accent-gold cursor-pointer transition-all duration-200 lg:hover:bg-accent-gold/[0.18]`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Annotation ${number}`}
    >
      {children}
      <sup className="text-accent-gold ml-0.5" style={{ fontSize: '11px' }}>
        {number}
      </sup>
    </span>
  );
}
