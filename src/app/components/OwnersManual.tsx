import { ControlsStrip } from './ControlsStrip';
import { Masthead } from './Masthead';
import { PrincipleCard } from './PrincipleCard';
import { Footer } from './Footer';

interface OwnersManualProps {
  onNavigate?: (page: string) => void;
}

export function OwnersManual({ onNavigate }: OwnersManualProps = {}) {

  return (
    <div className="min-h-screen">
      <ControlsStrip />
      <Masthead currentPage="Owner's Manual" onNavigate={onNavigate} />

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
            First published 1996 · Updated 2026
          </p>
          <h1 className="mb-6">An Owner&apos;s Manual</h1>
          <p
            className="text-ink-secondary max-w-[640px]"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              lineHeight: '26px',
            }}
          >
            The following principles govern how we run Berkshire and how we think about our relationship with you, our shareholders. They were first
            published in our 1996 Annual Report and have remained unchanged since.
          </p>
        </section>

        {/* Principle Cards */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-8 pb-16">
          <div className="max-w-[800px]">
            <PrincipleCard number="01" title="Although our form is corporate, our attitude is partnership">
              <p>
                Charlie Munger and I think of our shareholders as owner-partners, and of ourselves as managing partners. We do not view the company
                itself as the ultimate owner of our business assets but instead view the company as a conduit through which our shareholders own the
                assets.
              </p>
            </PrincipleCard>

            <PrincipleCard number="02" title="In line with this owner-orientation, our directors are all financially aligned with you">
              <p>
                The large majority of each director&apos;s net worth is represented by holdings of Berkshire. We eat our own cooking. Charlie and I
                cannot promise you results. But we can guarantee that your financial fortunes will move in lockstep with ours for whatever period of
                time you elect to be our partner.
              </p>
            </PrincipleCard>

            <PrincipleCard number="03" title="Our long-term economic goal is to maximize the average annual rate of gain">
              <p>
                We are not in the business of trying to maximize short-term results. Our long-term economic goal is to maximize Berkshire&apos;s
                average annual rate of gain in intrinsic business value on a per-share basis. We do not measure the economic significance or
                performance of Berkshire by its size; we measure by per-share progress.
              </p>
            </PrincipleCard>

            <PrincipleCard number="04" title="We prefer to reach our goal by directly owning a diversified group of businesses">
              <p>
                Charlie and I prefer to build Berkshire&apos;s intrinsic value by (1) improving the earning power of our many operating businesses,
                (2) further increasing their earnings through bolt-on acquisitions, and (3) deploying Berkshire&apos;s excess cash into either large
                operating businesses or marketable stocks of excellent businesses.
              </p>
            </PrincipleCard>

            <PrincipleCard number="05" title="We will be candid in our reporting to you, emphasizing the pluses and minuses important to business value">
              <p>
                Our guideline is to tell you the business facts that we would want to know if our positions were reversed. We owe you no less.
                Moreover, as a company with a major communications business, it would be inexcusable for us to apply lesser standards of accuracy,
                balance, and incisiveness when reporting on ourselves than we would expect our news people to apply when reporting on others.
              </p>
            </PrincipleCard>
          </div>
        </section>

        {/* Note on the Site */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-8 pb-16">
          <div className="max-w-[600px] mx-auto p-8 bg-bg-surface border-t-2 border-b-2 border-accent-gold">
            <h3 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', lineHeight: '30px', fontWeight: 500 }}>
              A note on this site
            </h3>
            <p className="text-ink-secondary mb-4" style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '26px' }}>
              This website was redesigned in 2026 to reflect the same principles that govern the company: restraint, candor, and a focus on what
              matters. No tracking, no marketing automation, no unnecessary complexity.
            </p>
            <p className="text-ink-secondary" style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '26px' }}>
              The design philosophy synthesizes Apple&apos;s Human Interface Guidelines with the Owner&apos;s Manual you just read. Every decision —
              from typography to color contrast to the absence of modal overlays — traces back to one of the paired principles.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
