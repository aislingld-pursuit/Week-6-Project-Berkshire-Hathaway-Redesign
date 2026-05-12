import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ControlButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
}

export const ControlButton = forwardRef<HTMLButtonElement, ControlButtonProps>(
  ({ pressed = false, className = '', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center px-3 py-1 min-h-[32px] border transition-all duration-200 focus:outline focus:outline-2 focus:outline-focus focus:outline-offset-[3px]';

    const stateStyles = pressed
      ? 'bg-ink-primary text-bg-page border-ink-primary'
      : 'bg-transparent text-ink-secondary border-rule-hairline hover:border-ink-secondary';

    const styles = `${baseStyles} ${stateStyles} ${className}`.trim();

    return (
      <button
        ref={ref}
        className={styles}
        style={{ borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '20px', fontWeight: 500 }}
        aria-pressed={pressed}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ControlButton.displayName = 'ControlButton';
