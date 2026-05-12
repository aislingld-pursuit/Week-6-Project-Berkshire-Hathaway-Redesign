export function FraudNotice() {
  return (
    <aside className="max-w-[1240px] mx-auto px-8 py-12">
      <div className="p-6 bg-bg-surface border-l-[3px] border-accent-gold">
        <div className="flex gap-4">
          <div className="text-accent-gold flex-shrink-0" style={{ fontFamily: 'var(--font-display)', fontSize: '32px', lineHeight: '40px', fontWeight: 500 }}>
            §
          </div>
          <div>
            <p className="text-ink-primary mb-3" style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '26px' }}>
              <strong style={{ fontWeight: 600 }}>A standing notice.</strong> Berkshire Hathaway and its subsidiaries do not solicit funds or
              sell securities via email, text message, or social media. Any such communication is fraudulent. Do not respond.
            </p>
            <a
              href="#fraud-notice"
              className="text-accent-navy hover:underline focus:outline focus:outline-2 focus:outline-focus focus:outline-offset-[3px]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '26px' }}
            >
              Read the full notice →
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
