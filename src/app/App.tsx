import { useState } from 'react';
import { ControlsStrip } from './components/ControlsStrip';
import { Masthead } from './components/Masthead';
import { StatCard } from './components/StatCard';
import { FraudNotice } from './components/FraudNotice';
import { Button } from './components/Button';
import { NewsCard } from './components/NewsCard';
import { CompanyCard } from './components/CompanyCard';
import { Footer } from './components/Footer';
import { LetterAnnotated } from './components/LetterAnnotated';
import { Shareholders } from './components/Shareholders';
import { Companies } from './components/Companies';
import { Reports } from './components/Reports';
import { OwnersManual } from './components/OwnersManual';
import { BookValueChart } from './components/BookValueChart';
import { CardComparison } from './components/comparison/CardComparison';

type PageType = 'home' | 'letter' | 'shareholders' | 'companies' | 'reports' | 'owners-manual' | 'comparison';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
  };

  if (currentPage === 'letter') {
    return <LetterAnnotated onNavigate={handleNavigate} />;
  }

  if (currentPage === 'shareholders') {
    return <Shareholders onNavigate={handleNavigate} />;
  }

  if (currentPage === 'companies') {
    return <Companies onNavigate={handleNavigate} />;
  }

  if (currentPage === 'reports') {
    return <Reports onNavigate={handleNavigate} />;
  }

  if (currentPage === 'owners-manual') {
    return <OwnersManual onNavigate={handleNavigate} />;
  }

  if (currentPage === 'comparison') {
    return <CardComparison />;
  }

  return (
    <div className="min-h-screen">
      <ControlsStrip />
      <Masthead currentPage="Home" onNavigate={(page) => setCurrentPage(page as PageType)} />

      <main id="skip-to-content">
        {/* Hero Section */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-8 py-12 md:py-24">
          <div className="max-w-[800px]">
            <p
              className="text-accent-gold uppercase mb-4 md:mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                lineHeight: '16px',
                fontWeight: 500,
                fontStyle: 'italic',
                letterSpacing: '0.18em',
              }}
            >
              Sixty years of compounding
            </p>
            <h1 className="mb-4 md:mb-6" style={{ fontSize: 'clamp(48px, 10vw, 72px)', lineHeight: 'clamp(56px, 11vw, 76px)' }}>
              A company built to last{' '}
              <span className="italic text-accent-gold">another century.</span>
            </h1>
            <p
              className="text-ink-secondary max-w-[600px]"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '20px',
                lineHeight: '30px',
                fontStyle: 'italic',
              }}
            >
              We own businesses, not ticker symbols. We operate with a
              permanent time horizon. We give our managers autonomy and trust
              them to compound capital on behalf of our shareholders — year
              after year, decade after decade.
            </p>
          </div>
        </section>

        {/* Chart Block */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-8 py-8 md:py-16">
          <div className="mb-6 md:mb-8 flex items-end justify-between">
            <h2>The sixty-year record</h2>
            <p
              className="text-ink-secondary"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                lineHeight: '22px',
              }}
            >
              Book value per Class A share, log scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
            <StatCard
              label="Book value per share"
              value="$460,210"
              gloss="Up 19.4% from 2024"
            />
            <StatCard
              label="Market capitalization"
              value="$1.02T"
              gloss="Ninth-largest in S&P 500"
            />
            <StatCard
              label="Annual return since 1965"
              value="19.8%"
              gloss="Compounded annually"
            />
            <StatCard
              label="Total return"
              value="24,217x"
              gloss="vs. 265x for S&P 500"
            />
          </div>

          {/* 60-Year Book Value Chart */}
          <div className="mb-4">
            <BookValueChart />
          </div>
        </section>

        {/* Fraud Notice */}
        <FraudNotice />

        {/* Letter Excerpt */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-8 py-12 md:py-24">
          <div className="max-w-[720px] mx-auto">
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
              From the 2025 shareholder letter
            </p>
            <h2 className="mb-4">On reputation and restraint</h2>
            <p
              className="text-ink-secondary italic mb-8"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                lineHeight: '22px',
              }}
            >
              Omaha, Nebraska · February 22, 2026
            </p>

            <p
              className="italic text-ink-primary mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                lineHeight: '28px',
              }}
            >
              To the Shareholders of Berkshire Hathaway Inc.:
            </p>

            <div className="space-y-6">
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  lineHeight: '28px',
                }}
              >
                Berkshire's gain in net worth during 2025 was $104 billion,
                which increased the per-share book value of both our Class A and
                Class B stock by 19.4%. Over the last 60 years (that is, since
                present management took over), book value has grown from $19 to
                $460,210, a rate of 19.8% compounded annually.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  lineHeight: '28px',
                }}
              >
                We do not view the company itself as the ultimate owner of our
                business assets but instead view the company as a conduit
                through which our shareholders own the assets. We are the
                managers, you are the owners. This remains our philosophy.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  lineHeight: '28px',
                }}
              >
                Charlie and I have always felt that the burden of proof should
                rest on any proposed action, not on its rejection. We demand
                that investments meet a high threshold before we commit capital,
                and we insist that our operating managers run their businesses
                as if they were the sole owners — and as if their family's net
                worth were invested alongside ours.
              </p>
            </div>

            <p
              className="italic text-ink-primary mt-8 mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                lineHeight: '28px',
              }}
            >
              Warren E. Buffett
              <br />
              Chairman of the Board
            </p>

            <Button variant="primary" onClick={() => setCurrentPage('letter')}>Read the full 2025 letter →</Button>
          </div>
        </section>

        {/* News Section */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-8 py-8 md:py-16 border-t border-rule-hairline">
          <h2 className="mb-4">Recent developments</h2>
          <p
            className="text-ink-secondary mb-12 max-w-[640px]"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              lineHeight: '26px',
            }}
          >
            Updates from our subsidiaries, regulatory filings, and shareholder
            materials. No press releases, no hype — just the facts that matter.
          </p>

          <div className="space-y-0 border-t border-rule-hairline">
            <NewsCard
              date="May 10, 2026"
              headline="Q1 2026 operating earnings reach $11.2 billion"
              gloss="Insurance underwriting contributed $2.8B, energy operations $1.9B, and manufacturing/service businesses $4.1B. Investment gains excluded per GAAP reporting."
            />
            <NewsCard
              date="April 15, 2026"
              headline="Berkshire increases stake in Occidental Petroleum to 28.4%"
              gloss="SEC filing shows continued accumulation. Energy sector remains a long-term focus given structural trends in domestic production and carbon transition economics."
            />
            <NewsCard
              date="March 2, 2026"
              headline="Annual meeting set for May 3, 2026 in Omaha"
              gloss="Shareholder Q&A begins at 9:30am CT. Credentialed shareholders may attend in person; webcast available globally at 9:15am. Questions accepted via email through April 25."
            />
          </div>
        </section>

        {/* Companies Preview */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-8 py-8 md:py-16 border-t border-rule-hairline">
          <h2 className="mb-4">The companies we own</h2>
          <p
            className="text-ink-secondary mb-12 max-w-[640px]"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              lineHeight: '26px',
            }}
          >
            Berkshire's collection of wholly-owned and majority-owned
            businesses. Each operates independently under seasoned management.
            Together they generate over $300 billion in annual revenue.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <CompanyCard
              name="GEICO"
              sector="Property & Casualty Insurance"
              description="One of America's largest auto insurers, serving 17 million policyholders with direct-to-consumer efficiency and low-cost operations."
              since="1996"
            />
            <CompanyCard
              name="BNSF Railway"
              sector="Transportation & Logistics"
              description="North America's largest freight railroad network, moving consumer goods, coal, and agricultural products across 28 states and three provinces."
              since="2010"
            />
            <CompanyCard
              name="Berkshire Hathaway Energy"
              sector="Regulated Utilities"
              description="Electric and natural gas utilities serving 12 million customers, plus renewable generation assets totaling 25 GW capacity."
              since="2000"
            />
            <CompanyCard
              name="Precision Castparts"
              sector="Aerospace Manufacturing"
              description="Producer of complex metal components for aircraft engines and industrial gas turbines. Serves Boeing, Airbus, GE, and Rolls-Royce."
              since="2016"
            />
            <CompanyCard
              name="Clayton Homes"
              sector="Manufactured Housing"
              description="Leading builder of manufactured and modular homes, plus mortgage origination and insurance services for housing customers."
              since="2003"
            />
            <CompanyCard
              name="Dairy Queen"
              sector="Quick-Service Restaurants"
              description="Iconic American brand operating 7,000+ locations across the U.S., Canada, and 20 international markets."
              since="1998"
            />
          </div>

          <div className="mt-12 text-center">
            <Button variant="secondary" onClick={() => setCurrentPage('companies')}>View all companies →</Button>
          </div>
        </section>

        {/* Ticker Row */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-8 py-6 md:py-8 border-t border-rule-hairline">
          <h3
            className="mb-6 text-ink-secondary"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '18px',
              lineHeight: '24px',
              fontWeight: 500,
            }}
          >
            Market snapshot
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div>
              <p
                className="text-ink-tertiary mb-1"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: '22px',
                }}
              >
                BRK.A
              </p>
              <p
                className="text-ink-primary"
                style={{
                  fontFamily: 'var(--font-numeric)',
                  fontSize: '28px',
                  lineHeight: '32px',
                  fontWeight: 600,
                }}
              >
                $613,420
              </p>
              <p
                className="text-ink-tertiary"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: '22px',
                }}
              >
                +0.8% today
              </p>
            </div>
            <div>
              <p
                className="text-ink-tertiary mb-1"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: '22px',
                }}
              >
                BRK.B
              </p>
              <p
                className="text-ink-primary"
                style={{
                  fontFamily: 'var(--font-numeric)',
                  fontSize: '28px',
                  lineHeight: '32px',
                  fontWeight: 600,
                }}
              >
                $409
              </p>
              <p
                className="text-ink-tertiary"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: '22px',
                }}
              >
                +0.8% today
              </p>
            </div>
            <div>
              <p
                className="text-ink-tertiary mb-1"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: '22px',
                }}
              >
                Cash position
              </p>
              <p
                className="text-ink-primary"
                style={{
                  fontFamily: 'var(--font-numeric)',
                  fontSize: '28px',
                  lineHeight: '32px',
                  fontWeight: 600,
                }}
              >
                $167.6B
              </p>
              <p
                className="text-ink-tertiary"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: '22px',
                }}
              >
                As of Q1 2026
              </p>
            </div>
            <div>
              <p
                className="text-ink-tertiary mb-1"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: '22px',
                }}
              >
                Employees
              </p>
              <p
                className="text-ink-primary"
                style={{
                  fontFamily: 'var(--font-numeric)',
                  fontSize: '28px',
                  lineHeight: '32px',
                  fontWeight: 600,
                }}
              >
                389,000
              </p>
              <p
                className="text-ink-tertiary"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: '22px',
                }}
              >
                Across all subsidiaries
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
