import { ControlsStrip } from './ControlsStrip';
import { Masthead } from './Masthead';
import { PrincipleCard } from './PrincipleCard';
import { Footer } from './Footer';

interface ShareholdersProps {
  onNavigate?: (page: string) => void;
}

export function Shareholders({ onNavigate }: ShareholdersProps = {}) {

  return (
    <div className="min-h-screen">
      <ControlsStrip />
      <Masthead currentPage="Shareholders" onNavigate={onNavigate} />

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
            Owner&apos;s Manual
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
            At Berkshire, we think of our shareholders as owner-partners, and of ourselves as managing partners. We do not view the company itself
            as the ultimate owner of our business assets but instead view the company as a conduit through which our shareholders own the assets.
          </p>
        </section>

        {/* Principles List */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-8 pb-16">
          <div className="max-w-[800px]">
            <PrincipleCard number="i" title="Although our form is corporate, our attitude is partnership">
              <p>
                Charlie Munger and I think of our shareholders as owner-partners, and of ourselves as managing partners. (Because of the size of our
                shareholdings we are also, for better or worse, controlling partners.) We do not view the company itself as the ultimate owner of our
                business assets but instead view the company as a conduit through which our shareholders own the assets.
              </p>
            </PrincipleCard>

            <PrincipleCard number="ii" title="We use intrinsic business value as our primary measure of performance">
              <p>
                We use book value merely as a tracking device — an admittedly crude one — for the real object of our interest, which is intrinsic
                business value. Book value is an accounting term that measures the capital we have put into a business, plus or minus any subsequent
                gains or losses. Intrinsic value is an economic term, measuring the discounted value of the cash that can be taken out of a business
                during its remaining life.
              </p>
            </PrincipleCard>

            <PrincipleCard number="iii" title="Our long-term economic goal is to maximize the average annual rate of gain in intrinsic value">
              <p>
                We are not in the business of trying to maximize short-term results or of manipulating the stock price. Our long-term economic goal
                (subject to some qualifications) is to maximize Berkshire&apos;s average annual rate of gain in intrinsic business value on a
                per-share basis. We do not measure progress by how our stock price performs but by how our intrinsic value grows.
              </p>
            </PrincipleCard>

            <PrincipleCard number="iv" title="We prefer to reach our goal by directly owning a diversified group of businesses">
              <p>
                Charlie and I prefer to build Berkshire&apos;s per-share intrinsic value by (1) improving the earning power of our many operating
                businesses, (2) further increasing their earnings through bolt-on acquisitions, and (3) deploying Berkshire&apos;s excess cash into
                either large operating businesses or marketable stocks of excellent businesses.
              </p>
            </PrincipleCard>

            <PrincipleCard number="v" title="We will only issue shares when we receive as much in intrinsic value as we give">
              <p>
                This rule applies to all forms of issuance — not only mergers and public stock offerings but stock options as well. We will not sell
                small portions of your company — and that&apos;s what issuing shares amounts to — at a price less than we would pay if the positions
                were reversed.
              </p>
            </PrincipleCard>

            <PrincipleCard number="vi" title="Regardless of price, we have no interest in selling any good businesses">
              <p>
                We are also very reluctant to sell sub-par businesses as long as we expect them to generate at least some cash and as long as we feel
                good about their managers and labor relations. We hope not to repeat the capital-allocation mistakes that led us into such
                sub-par businesses. And we react with great caution to suggestions that our poor businesses can be restored to satisfactory
                profitability by major capital expenditures.
              </p>
            </PrincipleCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
