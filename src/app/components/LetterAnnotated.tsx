import { useState } from 'react';
import { ControlsStrip } from './ControlsStrip';
import { Masthead } from './Masthead';
import { ControlButton } from './ControlButton';
import { AnnotationMark } from './AnnotationMark';
import { NoteCard } from './NoteCard';
import { TableRow } from './TableRow';
import { Footer } from './Footer';

interface LetterAnnotatedProps {
  onNavigate?: (page: string) => void;
}

export function LetterAnnotated({ onNavigate }: LetterAnnotatedProps = {}) {
  const [annotationsOn, setAnnotationsOn] = useState(true);
  const [activeNote, setActiveNote] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <ControlsStrip />
      <Masthead currentPage="Shareholders" onNavigate={onNavigate} />

      <main id="skip-to-content">
        {/* Subpage Head */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-8 py-8 md:py-16 border-b border-rule-hairline">
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
            Shareholder letter · 2025
          </p>
          <h1 className="mb-6">To the Shareholders of Berkshire Hathaway Inc.</h1>
          <p
            className="text-ink-secondary italic mb-8"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              lineHeight: '26px',
            }}
          >
            Warren E. Buffett · February 22, 2026
          </p>

          {/* Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 p-4 bg-bg-surface" style={{ borderRadius: 'var(--radius-sm)' }}>
            <div className="flex items-center gap-2">
              <span
                className="text-ink-secondary"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  lineHeight: '22px',
                  fontWeight: 500,
                }}
              >
                Annotations
              </span>
              <ControlButton pressed={annotationsOn} onClick={() => setAnnotationsOn(!annotationsOn)}>
                {annotationsOn ? 'On' : 'Off'}
              </ControlButton>
            </div>
            <p
              className="text-ink-tertiary"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                lineHeight: '22px',
              }}
            >
              {annotationsOn
                ? "Click any highlighted passage to view editor's notes"
                : 'Annotations hidden — toggle to view context and definitions'}
            </p>
          </div>
        </section>

        {/* Two-Column Layout */}
        <section className="max-w-[1240px] mx-auto px-4 md:px-8 py-8 md:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column - Letter Body (720px on desktop, full width on mobile) */}
            <article className="w-full lg:w-[720px] lg:flex-shrink-0">
              <div className="space-y-6" style={{ fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: '28px' }}>
                <p>
                  Berkshire&apos;s gain in net worth during 2025 was $104 billion, which increased the per-share{' '}
                  {annotationsOn ? (
                    <AnnotationMark number={1} active={activeNote === 1} onClick={() => setActiveNote(activeNote === 1 ? null : 1)}>
                      book value
                    </AnnotationMark>
                  ) : (
                    'book value'
                  )}{' '}
                  of both our Class A and Class B stock by 19.4%. Over the last 60 years (that is, since present management took over), book value
                  has grown from $19 to $460,210, a rate of 19.8% compounded annually.
                </p>

                <p>
                  The performance of Berkshire&apos;s collection of operating businesses in 2025 was generally strong. Our{' '}
                  {annotationsOn ? (
                    <AnnotationMark number={2} active={activeNote === 2} onClick={() => setActiveNote(activeNote === 2 ? null : 2)}>
                      insurance operations
                    </AnnotationMark>
                  ) : (
                    'insurance operations'
                  )}{' '}
                  — GEICO, Berkshire Hathaway Reinsurance, and Berkshire Hathaway Primary — delivered excellent underwriting results and continue
                  to build float at attractive economics.
                </p>

                <p>
                  We do not view the company itself as the ultimate owner of our business assets but instead view the company as a conduit through
                  which our shareholders own the assets. We are the managers, you are the owners. This remains our philosophy, and it guides every
                  capital allocation decision we make.
                </p>

                <p>
                  Charlie and I have always felt that the burden of proof should rest on any proposed action, not on its rejection. We demand that
                  investments meet a high threshold before we commit capital, and we insist that our operating managers run their businesses as if
                  they were the sole owners — and as if their{' '}
                  {annotationsOn ? (
                    <AnnotationMark number={3} active={activeNote === 3} onClick={() => setActiveNote(activeNote === 3 ? null : 3)}>
                      family&apos;s net worth
                    </AnnotationMark>
                  ) : (
                    "family's net worth"
                  )}{' '}
                  were invested alongside ours.
                </p>

                <p>
                  The size of our equity portfolio means that Berkshire is now a major owner of several{' '}
                  {annotationsOn ? (
                    <AnnotationMark number={4} active={activeNote === 4} onClick={() => setActiveNote(activeNote === 4 ? null : 4)}>
                      American businesses
                    </AnnotationMark>
                  ) : (
                    'American businesses'
                  )}
                  . We view these holdings as partnerships, not trading positions. We expect to hold them for decades, and we evaluate their
                  performance by their operating results, not their stock prices.
                </p>

                {/* Inset Milestone Table */}
                <div className="my-12 p-6 bg-bg-surface" style={{ borderRadius: 'var(--radius-md)' }}>
                  <h3 className="mb-4">Key milestones, 1965–2025</h3>
                  <div>
                    <TableRow year="1965" title="Partnership acquires control" filed="May 10" href="#1965" />
                    <TableRow year="1985" title="Berkshire purchases Scott Fetzer" filed="Jan 6" href="#1985" />
                    <TableRow year="1996" title="GEICO acquisition completed" filed="Jan 2" href="#1996" />
                    <TableRow year="2010" title="BNSF Railway acquisition" filed="Feb 12" href="#2010" />
                    <TableRow year="2016" title="Precision Castparts closes" filed="Jan 29" href="#2016" />
                  </div>
                </div>

                <p>
                  Our{' '}
                  {annotationsOn ? (
                    <AnnotationMark number={5} active={activeNote === 5} onClick={() => setActiveNote(activeNote === 5 ? null : 5)}>
                      cash and Treasury bill holdings
                    </AnnotationMark>
                  ) : (
                    'cash and Treasury bill holdings'
                  )}{' '}
                  at year-end totaled $167.6 billion. This position gives us flexibility and allows us to act decisively when opportunities arise.
                  We will continue to hold substantial cash reserves as a permanent feature of our balance sheet.
                </p>

                <p>
                  Berkshire&apos;s board has authorized the company to{' '}
                  {annotationsOn ? (
                    <AnnotationMark number={6} active={activeNote === 6} onClick={() => setActiveNote(activeNote === 6 ? null : 6)}>
                      repurchase shares
                    </AnnotationMark>
                  ) : (
                    'repurchase shares'
                  )}{' '}
                  when I believe they are selling for less than their intrinsic value. During 2025, we repurchased 1.2% of the shares outstanding at
                  the start of the year, spending $12.4 billion in the process.
                </p>

                <p>
                  At Berkshire, we do not have quarterly earnings targets. We do not have{' '}
                  {annotationsOn ? (
                    <AnnotationMark number={7} active={activeNote === 7} onClick={() => setActiveNote(activeNote === 7 ? null : 7)}>
                      five-year strategic plans
                    </AnnotationMark>
                  ) : (
                    'five-year strategic plans'
                  )}
                  . We have a business model that has worked for six decades, and we intend to run the company the same way for the next six
                  decades.
                </p>

                {/* Postscript */}
                <div className="mt-12 pt-8 border-t border-rule-hairline">
                  <p className="text-ink-secondary italic mb-4" style={{ fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: '28px' }}>
                    A note on Charlie Munger (1924–2023):
                  </p>
                  <p>
                    Charlie was Berkshire&apos;s architect. I was the general contractor, but the design — the principles, the discipline, the culture —
                    came from him. His{' '}
                    {annotationsOn ? (
                      <AnnotationMark number={8} active={activeNote === 8} onClick={() => setActiveNote(activeNote === 8 ? null : 8)}>
                        ideas shaped this company
                      </AnnotationMark>
                    ) : (
                      'ideas shaped this company'
                    )}{' '}
                    from the beginning, and his influence will endure for as long as Berkshire exists. He was irreplaceable, and he is irreplaceable
                    still.
                  </p>
                </div>

                <p className="mt-12 italic text-ink-primary" style={{ fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: '28px' }}>
                  Warren E. Buffett
                  <br />
                  Chairman of the Board
                  <br />
                  February 22, 2026
                </p>
              </div>

              {/* Letter Footnav */}
              <nav className="mt-16 pt-8 border-t border-rule-hairline flex items-center justify-between">
                <button
                  onClick={() => onNavigate?.('home')}
                  className="text-accent-navy hover:underline focus:outline focus:outline-2 focus:outline-focus focus:outline-offset-[3px]"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '26px', fontWeight: 500 }}
                >
                  ← Back to home
                </button>
                <a
                  href="#shareholder-materials"
                  className="text-accent-navy hover:underline focus:outline focus:outline-2 focus:outline-focus focus:outline-offset-[3px]"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '26px', fontWeight: 500 }}
                >
                  All shareholder materials →
                </a>
              </nav>
            </article>

            {/* Right Column - Notes (320px on desktop, hidden on mobile - notes show inline) */}
            {annotationsOn && (
              <aside className="hidden lg:block w-[320px] lg:flex-shrink-0 space-y-6">
                <NoteCard number={1} active={activeNote === 1}>
                  <strong>Book value</strong> represents the net worth of Berkshire divided by shares outstanding. While not a perfect measure of
                  intrinsic value, it provides a consistent baseline for tracking capital compounding over time.
                </NoteCard>

                <NoteCard number={2} active={activeNote === 2}>
                  <strong>Insurance float</strong> refers to premiums collected but not yet paid out in claims. Berkshire invests this float and
                  earns a return on it. Since 1967, float has grown from $19M to $169B.
                </NoteCard>

                <NoteCard number={3} active={activeNote === 3}>
                  This principle — &quot;manage as if your family&apos;s wealth depends on it&quot; — appears in every acquisition letter Buffett sends to new
                  subsidiary CEOs. It emphasizes personal responsibility over corporate bureaucracy.
                </NoteCard>

                <NoteCard number={4} active={activeNote === 4}>
                  As of Q4 2025, Berkshire&apos;s largest equity holdings include Apple ($174B), Bank of America ($38B), American Express ($35B),
                  Coca-Cola ($25B), and Chevron ($19B).
                </NoteCard>

                <NoteCard number={5} active={activeNote === 5}>
                  Berkshire&apos;s cash position has grown significantly since 2020 due to limited acquisition opportunities at acceptable prices and
                  ongoing share repurchases being temporarily paused when valuations exceeded intrinsic value estimates.
                </NoteCard>

                <NoteCard number={6} active={activeNote === 6}>
                  Berkshire only repurchases shares when trading below intrinsic value and when cash reserves remain ample. This is framed as a
                  disciplined capital allocation decision, not a reflexive use of excess cash.
                </NoteCard>

                <NoteCard number={7} active={activeNote === 7}>
                  Buffett has consistently rejected formal strategic planning processes, arguing they encourage optimistic projections and bureaucratic
                  momentum rather than disciplined opportunism.
                </NoteCard>

                <NoteCard number={8} active={activeNote === 8}>
                  Charlie Munger passed away on November 28, 2023, at age 99. He served as Berkshire&apos;s Vice Chairman from 1978 until his death and
                  was Buffett&apos;s closest partner for over 60 years.
                </NoteCard>
              </aside>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
