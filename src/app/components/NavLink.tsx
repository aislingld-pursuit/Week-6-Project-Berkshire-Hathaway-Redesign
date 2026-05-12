import { AnchorHTMLAttributes, forwardRef } from 'react';

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  current?: boolean;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ current = false, className = '', children, ...props }, ref) => {
    const baseStyles =
      'inline-block pb-0.5 border-b transition-all duration-200 focus:outline focus:outline-2 focus:outline-focus focus:outline-offset-[3px]';

    const stateStyles = current
      ? 'text-ink-primary border-accent-gold'
      : 'text-ink-secondary border-transparent hover:text-ink-primary hover:border-accent-gold';

    const styles = `${baseStyles} ${stateStyles} ${className}`.trim();

    return (
      <a
        ref={ref}
        className={styles}
        style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '24px', fontWeight: 500 }}
        aria-current={current ? 'page' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
);

NavLink.displayName = 'NavLink';
