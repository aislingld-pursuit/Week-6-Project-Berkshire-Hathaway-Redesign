import { ControlsStrip } from './ControlsStrip';
import { Masthead } from './Masthead';
import { CompanyCard } from './CompanyCard';
import { Footer } from './Footer';

interface CompaniesProps {
  onNavigate?: (page: string) => void;
}

export function Companies({ onNavigate }: CompaniesProps = {}) {

  const companies = [
    {
      name: 'GEICO',
      sector: 'Property & Casualty Insurance',
      description:
        "One of America's largest auto insurers, serving 17 million policyholders with direct-to-consumer efficiency and low-cost operations.",
      since: '1996',
    },
    {
      name: 'BNSF Railway',
      sector: 'Transportation & Logistics',
      description:
        "North America's largest freight railroad network, moving consumer goods, coal, and agricultural products across 28 states and three provinces.",
      since: '2010',
    },
    {
      name: 'Berkshire Hathaway Energy',
      sector: 'Regulated Utilities',
      description:
        'Electric and natural gas utilities serving 12 million customers, plus renewable generation assets totaling 25 GW capacity.',
      since: '2000',
    },
    {
      name: 'Precision Castparts',
      sector: 'Aerospace Manufacturing',
      description:
        'Producer of complex metal components for aircraft engines and industrial gas turbines. Serves Boeing, Airbus, GE, and Rolls-Royce.',
      since: '2016',
    },
    {
      name: 'Clayton Homes',
      sector: 'Manufactured Housing',
      description:
        'Leading builder of manufactured and modular homes, plus mortgage origination and insurance services for housing customers.',
      since: '2003',
    },
    {
      name: 'Dairy Queen',
      sector: 'Quick-Service Restaurants',
      description: 'Iconic American brand operating 7,000+ locations across the U.S., Canada, and 20 international markets.',
      since: '1998',
    },
    {
      name: 'Fruit of the Loom',
      sector: 'Apparel Manufacturing',
      description: 'Producer of casual wear, athletic wear, and underwear. Distribution in 30 countries with manufacturing in 14.',
      since: '2002',
    },
    {
      name: "See's Candies",
      sector: 'Confectionery',
      description: 'Premium chocolate and candy retailer, primarily in the western U.S., with 200+ shops and significant seasonal mail-order business.',
      since: '1972',
    },
    {
      name: 'NetJets',
      sector: 'Fractional Aircraft Ownership',
      description: "World's largest private aviation company, managing a fleet of 700+ aircraft for fractional ownership and charter clients.",
      since: '1998',
    },
    {
      name: 'Lubrizol',
      sector: 'Specialty Chemicals',
      description: 'Producer of additives for engine oils, fuel additives, and industrial specialty chemicals. Serves transportation and industrial markets.',
      since: '2011',
    },
    {
      name: 'Duracell',
      sector: 'Consumer Batteries',
      description: 'Leading battery manufacturer for consumer electronics, flashlights, and medical devices. Distributed in 100+ countries.',
      since: '2016',
    },
    {
      name: 'IMC / ISCAR',
      sector: 'Metalworking Tools',
      description: 'Manufacturer of cutting tools for metalworking industries. Serves automotive, aerospace, and heavy equipment sectors globally.',
      since: '2006',
    },
  ];

  return (
    <div className="min-h-screen">
      <ControlsStrip />
      <Masthead currentPage="Companies" onNavigate={onNavigate} />

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
            Our subsidiaries
          </p>
          <h1 className="mb-6">The companies we own</h1>
          <p
            className="text-ink-secondary max-w-[640px]"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              lineHeight: '26px',
            }}
          >
            Berkshire&apos;s collection of wholly-owned and majority-owned businesses. Each operates independently under seasoned management. Together
            they generate over $300 billion in annual revenue and employ 389,000 people.
          </p>
        </section>

        {/* Companies Grid */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {companies.map((company) => (
              <CompanyCard key={company.name} {...company} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
