import { MaterialCard } from '../MaterialCard';
import { CompanyCard } from '../CompanyCard';

export function CardComparison() {
  const exampleData = {
    name: 'GEICO',
    sector: 'Property & Casualty Insurance',
    description: "One of America's largest auto insurers, serving 17 million policyholders with direct-to-consumer efficiency and low-cost operations.",
    since: '1996',
  };

  return (
    <div className="min-h-screen bg-bg-page p-8">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="mb-12 text-center" style={{ fontFamily: 'var(--font-display)', fontSize: '48px', lineHeight: '56px', fontWeight: 500 }}>
          Component Customization Exercise
        </h1>

        <div className="grid grid-cols-2 gap-12 mb-16">
          {/* Material Design Original */}
          <div>
            <div className="mb-6">
              <h2 className="mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '32px', lineHeight: '40px', fontWeight: 500 }}>
                Material Design
              </h2>
              <p className="text-ink-secondary" style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '26px' }}>
                Source: Material UI Card component
              </p>
            </div>

            <MaterialCard
              title={exampleData.name}
              subtitle={exampleData.sector}
              description={exampleData.description}
              actionLabel="Learn More"
            />

            <div className="mt-6 p-4 bg-bg-surface" style={{ borderRadius: 'var(--radius-sm)' }}>
              <h3 className="mb-3" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600 }}>
                Design Characteristics:
              </h3>
              <ul className="space-y-2 text-ink-secondary" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '22px' }}>
                <li>• White background (#FFFFFF)</li>
                <li>• Shadow elevation (depth cue)</li>
                <li>• 4px corner radius</li>
                <li>• Roboto sans-serif</li>
                <li>• Blue action button (#1976D2)</li>
                <li>• Hover state increases shadow</li>
                <li>• Interactive by default</li>
              </ul>
            </div>
          </div>

          {/* Berkshire Customization */}
          <div>
            <div className="mb-6">
              <h2 className="mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '32px', lineHeight: '40px', fontWeight: 500 }}>
                Berkshire Hathaway
              </h2>
              <p className="text-ink-secondary" style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '26px' }}>
                Customized for Owner&apos;s Manual principles
              </p>
            </div>

            <CompanyCard {...exampleData} />

            <div className="mt-6 p-4 bg-bg-surface" style={{ borderRadius: 'var(--radius-sm)' }}>
              <h3 className="mb-3" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600 }}>
                Customization Changes:
              </h3>
              <ul className="space-y-2 text-ink-secondary" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '22px' }}>
                <li>• Transparent bg (paper aesthetic)</li>
                <li>• Hairline border-top only</li>
                <li>• 0px radius (sharp corners)</li>
                <li>• Source Serif 4 + Fraunces</li>
                <li>• No action button (informational)</li>
                <li>• No hover state</li>
                <li>• Added "Since" footer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Transformations */}
        <div className="border-t border-rule-hairline pt-12">
          <h2 className="mb-8 text-center" style={{ fontFamily: 'var(--font-display)', fontSize: '32px', lineHeight: '40px', fontWeight: 500 }}>
            The 7 Key Transformations
          </h2>

          <div className="grid grid-cols-1 gap-6">
            <TransformationRow
              aspect="Depth"
              before="Shadow elevation"
              after="Hairline border"
              principle="Frugality (no decoration)"
            />
            <TransformationRow
              aspect="Shape"
              before="4px radius"
              after="0px radius"
              principle="Editorial (sharp, paper-like)"
            />
            <TransformationRow
              aspect="Typography"
              before="Sans-serif (Roboto)"
              after="Serif (Fraunces/Source Serif)"
              principle="Partnership voice"
            />
            <TransformationRow
              aspect="Hierarchy"
              before="Color + weight"
              after="Italic + weight"
              principle="Restraint (minimal tools)"
            />
            <TransformationRow
              aspect="Interaction"
              before="Hover/ripple/button"
              after="None (static content)"
              principle="Candor (not clickable)"
            />
            <TransformationRow
              aspect="Color"
              before="Saturated blue #1976D2"
              after="Muted gold/ink tones"
              principle="Long-term thinking"
            />
            <TransformationRow
              aspect="Spacing"
              before="16px compact"
              after="24px generous"
              principle="Owner orientation"
            />
          </div>
        </div>

        {/* Design Philosophy */}
        <div className="mt-16 border-t border-rule-hairline pt-12">
          <div className="grid grid-cols-2 gap-12">
            <div className="p-8 border border-rule-hairline" style={{ borderRadius: 'var(--radius-md)' }}>
              <h3 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', lineHeight: '30px', fontWeight: 500 }}>
                Material Design Philosophy
              </h3>
              <p className="text-ink-secondary mb-4" style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '26px' }}>
                "Make it intuitive for any user"
              </p>
              <ul className="space-y-2 text-ink-primary" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: '24px' }}>
                <li>• Optimized for action</li>
                <li>• Visual affordances everywhere</li>
                <li>• Depth cues guide interaction</li>
                <li>• Universal design language</li>
                <li>• Feedback on every touch</li>
              </ul>
            </div>

            <div className="p-8 border border-rule-hairline" style={{ borderRadius: 'var(--radius-md)' }}>
              <h3 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', lineHeight: '30px', fontWeight: 500 }}>
                Berkshire Philosophy
              </h3>
              <p className="text-ink-secondary mb-4" style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '26px' }}>
                "Make it honest for our partners"
              </p>
              <ul className="space-y-2 text-ink-primary" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: '24px' }}>
                <li>• Optimized for reading</li>
                <li>• No false affordances</li>
                <li>• Structure, not depth</li>
                <li>• Partnership-specific voice</li>
                <li>• Restraint as candor</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-16 max-w-[800px] mx-auto p-8 bg-bg-surface border-l-[3px] border-accent-gold">
          <p className="text-ink-primary mb-4" style={{ fontFamily: 'var(--font-body)', fontSize: '20px', lineHeight: '30px', fontStyle: 'italic' }}>
            <strong>The customization insight:</strong> Great design isn&apos;t adding your brand colors to someone else&apos;s components — it&apos;s understanding the principles behind both systems and making intentional tradeoffs.
          </p>
          <p className="text-ink-secondary" style={{ fontFamily: 'var(--font-body)', fontSize: '17px', lineHeight: '26px' }}>
            Material Design optimizes for universal usability. Berkshire optimizes for partner trust. Both are valid — but they require different components.
          </p>
        </div>
      </div>
    </div>
  );
}

interface TransformationRowProps {
  aspect: string;
  before: string;
  after: string;
  principle: string;
}

function TransformationRow({ aspect, before, after, principle }: TransformationRowProps) {
  return (
    <div className="grid grid-cols-4 gap-6 p-4 border-b border-rule-hairline last:border-b-0">
      <div style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 600 }}>
        {aspect}
      </div>
      <div className="text-ink-secondary" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: '24px' }}>
        {before}
      </div>
      <div className="text-ink-primary" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: '24px' }}>
        {after}
      </div>
      <div className="text-ink-tertiary italic" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '24px' }}>
        {principle}
      </div>
    </div>
  );
}
