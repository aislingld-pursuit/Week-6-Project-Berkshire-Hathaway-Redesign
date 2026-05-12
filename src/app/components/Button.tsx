import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] transition-all duration-200 focus:outline focus:outline-2 focus:outline-focus focus:outline-offset-[3px] disabled:opacity-40 disabled:cursor-not-allowed';

    const variantStyles = {
      primary: 'bg-ink-primary text-bg-page hover:bg-ink-secondary',
      secondary:
        'bg-transparent border border-rule-hairline text-ink-secondary hover:border-ink-secondary',
      ghost: 'bg-transparent text-ink-secondary hover:text-ink-primary',
    };

    const styles = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

    return (
      <button
        ref={ref}
        className={styles}
        style={{ borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: '20px', fontWeight: 500, letterSpacing: '0.02em' }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
