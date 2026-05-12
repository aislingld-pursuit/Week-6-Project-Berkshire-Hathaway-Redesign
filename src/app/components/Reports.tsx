import { ControlsStrip } from './ControlsStrip';
import { Masthead } from './Masthead';
import { TableRow } from './TableRow';
import { Footer } from './Footer';

interface ReportsProps {
  onNavigate?: (page: string) => void;
}

export function Reports({ onNavigate }: ReportsProps = {}) {

  const reports = [
    { year: '2025', title: 'Annual Report & Shareholder Letter', filed: 'Feb 22, 2026' },
    { year: '2024', title: 'Annual Report & Shareholder Letter', filed: 'Feb 24, 2025' },
    { year: '2023', title: 'Annual Report & Shareholder Letter', filed: 'Feb 25, 2024' },
    { year: '2022', title: 'Annual Report & Shareholder Letter', filed: 'Feb 25, 2023' },
    { year: '2021', title: 'Annual Report & Shareholder Letter', filed: 'Feb 26, 2022' },
    { year: '2020', title: 'Annual Report & Shareholder Letter', filed: 'Feb 27, 2021' },
    { year: '2019', title: 'Annual Report & Shareholder Letter', filed: 'Feb 22, 2020' },
    { year: '2018', title: 'Annual Report & Shareholder Letter', filed: 'Feb 23, 2019' },
  ];

  return (
    <div className="min-h-screen">
      <ControlsStrip />
      <Masthead currentPage="Reports" onNavigate={onNavigate} />

      <main id="skip-to-content">
        {/* Subpage Head */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-8 py-8 md:py-16">
          <p
            className="text-accent-gold uppercase mb-4"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              lineHeight: '16px',
              fontWeight: 500,
              fontStyle: 'italic',
              letterSpacing: '0.18em',
            }}
          >
            Annual reports · SEC filings
          </p>
          <h1 className="mb-6">Reports & Filings</h1>
          <p
            className="text-ink-secondary max-w-[640px]"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              lineHeight: '26px',
            }}
          >
            Annual shareholder letters, 10-K filings, quarterly reports, and proxy statements. All documents are filed with the SEC and available in
            PDF format.
          </p>
        </section>

        {/* Reports Table */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-8 pb-16">
          <div className="border-t border-rule-hairline">
            {reports.map((report) => (
              <TableRow key={report.year} year={report.year} title={report.title} filed={report.filed} href={`#report-${report.year}`} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
