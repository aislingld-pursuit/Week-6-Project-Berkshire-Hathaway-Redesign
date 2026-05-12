// Material Design Card (Before Customization)
// Based on Material UI Card specifications

interface MaterialCardProps {
  title: string;
  subtitle: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function MaterialCard({ title, subtitle, description, actionLabel, onAction }: MaterialCardProps) {
  return (
    <div
      className="bg-white p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
      style={{ borderRadius: '4px' }}
    >
      {/* Card Content */}
      <div className="space-y-2">
        <h2
          className="text-gray-900"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '28px'
          }}
        >
          {title}
        </h2>

        <p
          className="text-gray-600"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px'
          }}
        >
          {subtitle}
        </p>

        <p
          className="text-gray-800"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px'
          }}
        >
          {description}
        </p>
      </div>

      {/* Card Actions */}
      {actionLabel && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={onAction}
            className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200"
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            {actionLabel}
          </button>
        </div>
      )}
    </div>
  );
}

// CUSTOMIZATION NOTES:
// ❌ White background (too stark)
// ❌ Shadow (creates false depth)
// ❌ 4px radius (too modern/soft)
// ❌ Sans-serif Roboto (tech aesthetic)
// ❌ Blue action button (drives conversion)
// ❌ Hover shadow increase (suggests clickability)
// ❌ All-caps button text (aggressive)
