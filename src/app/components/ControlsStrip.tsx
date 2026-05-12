import { useState, useEffect } from 'react';
import { ControlButton } from './ControlButton';

export function ControlsStrip() {
  const [textSize, setTextSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [theme, setTheme] = useState<'auto' | 'day' | 'night'>('day');

  useEffect(() => {
    // Apply theme to document root
    if (theme === 'night') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'day') {
      document.documentElement.classList.remove('dark');
    } else {
      // Auto mode: check system preference or time of day
      const hour = new Date().getHours();
      const isNightTime = hour >= 20 || hour < 6; // 8 PM to 6 AM
      if (isNightTime) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  const [controlsOpen, setControlsOpen] = useState(false);

  return (
    <div className="bg-bg-surface border-b border-rule-hairline">
      {/* Mobile: Collapsed */}
      <button
        onClick={() => setControlsOpen(!controlsOpen)}
        className="md:hidden w-full flex items-center justify-between h-10 px-4 focus:outline focus:outline-2 focus:outline-focus focus:outline-offset-[3px]"
        aria-expanded={controlsOpen}
      >
        <span className="text-ink-secondary" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
          Reading preferences
        </span>
        <span className="text-ink-secondary" style={{ fontFamily: 'var(--font-body)', fontSize: '16px' }}>
          {controlsOpen ? '⌄' : '⌃'}
        </span>
      </button>

      {/* Desktop: Always visible / Mobile: Expandable */}
      <div className={`${controlsOpen ? 'flex' : 'hidden'} md:flex items-center justify-between px-4 md:px-8 py-3 md:py-0 md:h-10 border-t md:border-t-0 border-rule-hairline md:border-0`}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full md:w-auto">
        <div className="flex items-center gap-2">
          <span className="text-ink-tertiary uppercase" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: '16px', fontWeight: 500, fontStyle: 'italic', letterSpacing: '0.18em' }}>
            Text Size
          </span>
          <div className="flex gap-1">
            <ControlButton pressed={textSize === 'small'} onClick={() => setTextSize('small')} aria-label="Small text size">
              A−
            </ControlButton>
            <ControlButton pressed={textSize === 'medium'} onClick={() => setTextSize('medium')} aria-label="Medium text size">
              A
            </ControlButton>
            <ControlButton pressed={textSize === 'large'} onClick={() => setTextSize('large')} aria-label="Large text size">
              A+
            </ControlButton>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-ink-tertiary uppercase" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: '16px', fontWeight: 500, fontStyle: 'italic', letterSpacing: '0.18em' }}>
            Theme
          </span>
          <div className="flex gap-1">
            <ControlButton pressed={theme === 'auto'} onClick={() => setTheme('auto')} aria-label="Auto theme">
              Auto
            </ControlButton>
            <ControlButton pressed={theme === 'day'} onClick={() => setTheme('day')} aria-label="Day theme">
              Day
            </ControlButton>
            <ControlButton pressed={theme === 'night'} onClick={() => setTheme('night')} aria-label="Night theme">
              Night
            </ControlButton>
          </div>
        </div>
      </div>

        <a href="#skip-to-content" className="sr-only focus:not-sr-only focus:absolute focus:top-10 focus:left-8 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-navy focus:text-bg-page">
          Skip to main content
        </a>
      </div>
    </div>
  );
}
