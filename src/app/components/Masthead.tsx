import { useState } from 'react';

interface MastheadProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Masthead({ currentPage = 'Home', onNavigate }: MastheadProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Shareholders', page: 'shareholders' },
    { label: 'Companies', page: 'companies' },
    { label: 'Reports', page: 'reports' },
    { label: "Owner's Manual", page: 'owners-manual' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate?.(page);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-bg-page border-b border-rule-hairline">
      <div className="flex items-center justify-between h-20 px-4 md:px-8">
        <button
          onClick={() => handleNavigate('home')}
          className="flex flex-col gap-1 text-left focus:outline focus:outline-2 focus:outline-focus focus:outline-offset-[3px]"
        >
          <div className="h-0.5 w-8 bg-accent-gold"></div>
          <h2 className="text-ink-primary" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', lineHeight: '30px', fontWeight: 500, letterSpacing: '-0.005em' }}>
            Berkshire Hathaway
          </h2>
          <p className="text-ink-secondary hidden md:block" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '22px' }}>
            Omaha, Nebraska · Founded 1839
          </p>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavigate(item.page)}
              className={`inline-block pb-0.5 border-b transition-all duration-200 focus:outline focus:outline-2 focus:outline-focus focus:outline-offset-[3px] ${
                item.label === currentPage
                  ? 'text-ink-primary border-accent-gold'
                  : 'text-ink-secondary border-transparent hover:text-ink-primary hover:border-accent-gold'
              }`}
              style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '24px', fontWeight: 500 }}
              aria-current={item.label === currentPage ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 focus:outline focus:outline-2 focus:outline-focus focus:outline-offset-[3px]"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="text-ink-primary" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', lineHeight: '30px', fontWeight: 500 }}>
            ≡
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-rule-hairline bg-bg-page" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavigate(item.page)}
              className={`w-full text-left px-4 py-4 border-b border-rule-hairline transition-colors focus:outline focus:outline-2 focus:outline-focus focus:outline-offset-[3px] ${
                item.label === currentPage
                  ? 'text-ink-primary bg-bg-surface'
                  : 'text-ink-secondary hover:bg-bg-surface hover:text-ink-primary'
              }`}
              style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '24px', fontWeight: 500 }}
              aria-current={item.label === currentPage ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
