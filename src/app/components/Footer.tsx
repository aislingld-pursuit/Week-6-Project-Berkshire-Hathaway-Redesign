export function Footer() {
  const linkColumns = [
    {
      title: 'Investors',
      links: ['Annual Reports', 'Quarterly Earnings', 'SEC Filings', 'Stock Information'],
    },
    {
      title: 'Our Companies',
      links: ['Insurance', 'Energy', 'Manufacturing', 'Retail & Services'],
    },
    {
      title: 'About',
      links: ['Leadership', 'History', 'Governance', 'Contact'],
    },
    {
      title: 'Resources',
      links: ["Owner's Manual", 'FAQs', 'News', 'Careers'],
    },
  ];

  return (
    <footer className="border-t border-rule-hairline bg-bg-page">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 py-8 md:py-16">
          <div>
            <h3 className="text-ink-primary mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', lineHeight: '30px', fontWeight: 500 }}>
              Berkshire Hathaway
            </h3>
            <address className="not-italic text-ink-secondary" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '22px' }}>
              3555 Farnam Street
              <br />
              Omaha, NE 68131
              <br />
              United States
            </address>
          </div>

          {linkColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-ink-primary mb-4" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '22px', fontWeight: 500 }}>
                {column.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-accent-navy hover:underline focus:outline focus:outline-2 focus:outline-focus focus:outline-offset-[3px]"
                      style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '22px' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-6 md:py-8 border-t border-rule-hairline">
          <p className="text-ink-tertiary" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '22px' }}>
            © 1977–2026 Berkshire Hathaway Inc.
          </p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="text-accent-navy hover:underline focus:outline focus:outline-2 focus:outline-focus focus:outline-offset-[3px]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '22px' }}
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="text-accent-navy hover:underline focus:outline focus:outline-2 focus:outline-focus focus:outline-offset-[3px]"
              style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '22px' }}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
