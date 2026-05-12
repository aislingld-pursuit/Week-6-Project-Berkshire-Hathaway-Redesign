export function BookValueChart() {
  // Chart points computed from log-scale formula: y = 300 - ((log10(value) - 1) / 5) × 260
  const points = [
    { x: 60, y: 285.5, year: '1965', value: '$19' },
    { x: 133, y: 258.8, year: '1970', value: null },
    { x: 207, y: 249.2, year: '1975', value: null },
    { x: 280, y: 216.7, year: '1980', value: null },
    { x: 353, y: 184.8, year: '1985', value: null },
    { x: 427, y: 161.5, year: '1990', value: null },
    { x: 500, y: 135.7, year: '1995', value: '$14,426' },
    { x: 573, y: 112.4, year: '2000', value: null },
    { x: 647, y: 103.8, year: '2005', value: null },
    { x: 720, y: 93.0, year: '2010', value: null },
    { x: 793, y: 82.1, year: '2015', value: null },
    { x: 867, y: 67.7, year: '2020', value: null },
    { x: 940, y: 57.5, year: '2025', value: '$460,210' },
  ];

  // Grid lines (horizontal log decades)
  const gridLines = [
    { y: 40, label: '$1,000,000' },
    { y: 92, label: '$100,000' },
    { y: 144, label: '$10,000' },
    { y: 196, label: '$1,000' },
    { y: 248, label: '$100' },
    { y: 300, label: '$10' },
  ];

  // X-axis labels
  const xAxisLabels = [
    { x: 60, label: '1965' },
    { x: 207, label: '1975' },
    { x: 353, label: '1985' },
    { x: 500, label: '1995' },
    { x: 647, label: '2005' },
    { x: 793, label: '2015' },
    { x: 940, label: '2025' },
  ];

  // Create the line path
  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  // Create the area path (same line but closed down to bottom)
  const areaPath = `${linePath} L 940 300 L 60 300 Z`;

  return (
    <svg width="1000" height="400" viewBox="0 0 1000 400" className="w-full max-w-[1000px] h-auto">
      {/* Grid lines */}
      {gridLines.map((line) => (
        <line
          key={line.y}
          x1="60"
          y1={line.y}
          x2="960"
          y2={line.y}
          stroke="var(--rule-hairline)"
          strokeWidth="0.5"
        />
      ))}

      {/* Y-axis labels */}
      {gridLines.map((line) => (
        <text
          key={line.y}
          x="50"
          y={line.y + 4}
          textAnchor="end"
          style={{ fontFamily: 'var(--font-numeric)', fontSize: '15px', fontWeight: 500, fill: 'var(--ink-secondary)' }}
        >
          {line.label}
        </text>
      ))}

      {/* X-axis labels */}
      {xAxisLabels.map((label) => (
        <text
          key={label.x}
          x={label.x}
          y="325"
          textAnchor="middle"
          style={{ fontFamily: 'var(--font-numeric)', fontSize: '15px', fontWeight: 500, fill: 'var(--ink-secondary)' }}
        >
          {label.label}
        </text>
      ))}

      {/* Shaded area under curve (gold, 8% opacity) */}
      <path
        d={areaPath}
        fill="var(--accent-gold)"
        opacity="0.08"
      />

      {/* Chart line */}
      <path
        d={linePath}
        fill="none"
        stroke="var(--ink-primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Annotation: 1965 */}
      <circle cx="60" cy="285.5" r="2.5" fill="var(--accent-gold)" />
      <line x1="60" y1="285.5" x2="66" y2="268" stroke="var(--accent-gold)" strokeWidth="1" strokeDasharray="2,2" />
      <text
        x="66"
        y="268"
        style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontStyle: 'italic', fill: 'var(--ink-secondary)' }}
      >
        1965 · $19
      </text>

      {/* Annotation: 1995 */}
      <circle cx="500" cy="135.7" r="2.5" fill="var(--accent-gold)" />
      <line x1="500" y1="135.7" x2="506" y2="118" stroke="var(--accent-gold)" strokeWidth="1" strokeDasharray="2,2" />
      <text
        x="506"
        y="118"
        style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontStyle: 'italic', fill: 'var(--ink-secondary)' }}
      >
        1995 · $14,426
      </text>

      {/* Annotation: 2008 weathered the storm */}
      <circle cx="647" cy="103.8" r="2.5" fill="var(--accent-gold)" />
      <line x1="647" y1="103.8" x2="580" y2="86" stroke="var(--accent-gold)" strokeWidth="1" strokeDasharray="2,2" />
      <text
        x="580"
        y="86"
        style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontStyle: 'italic', fill: 'var(--ink-secondary)' }}
      >
        2008 · weathered the storm,
      </text>
      <text
        x="580"
        y="100"
        style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontStyle: 'italic', fill: 'var(--ink-secondary)' }}
      >
        still compounding
      </text>

      {/* Endpoint: 2025 */}
      <circle cx="940" cy="57.5" r="4" fill="var(--accent-navy)" />
      <text
        x="933"
        y="42"
        textAnchor="end"
        style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 500, fill: 'var(--accent-navy)', letterSpacing: '-0.005em' }}
      >
        $460,210
      </text>

      {/* Caption */}
      <text
        x="960"
        y="365"
        textAnchor="end"
        style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontStyle: 'italic', fill: 'var(--ink-tertiary)' }}
      >
        Source: Berkshire Hathaway annual reports, 1965–2025.
      </text>
      <text
        x="960"
        y="380"
        textAnchor="end"
        style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontStyle: 'italic', fill: 'var(--ink-tertiary)' }}
      >
        Values as of year-end.
      </text>
    </svg>
  );
}
