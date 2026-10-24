export default function Thumb({ kind }) {
  return (
    <svg className="thumb-svg" viewBox="0 0 200 110" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="110" fill="var(--thumb-bg)" />
      {kind === 'dashboard' && (
        <g>
          <rect x="0" y="0" width="34" height="110" fill="#0b1b33" />
          {[0, 1, 2, 3].map((i) => <rect key={i} x="6" y={14 + i * 14} width="22" height="5" rx="2" fill="#3b5378" />)}
          {[0, 1, 2].map((i) => <rect key={i} x={42 + i * 52} y="10" width="46" height="22" rx="3" fill="#fff" stroke="#dbe4f0" />)}
          {[22, 34, 28, 46, 38, 56, 48].map((h, i) => <rect key={i} x={44 + i * 12} y={100 - h} width="8" height={h} rx="1.5" fill="#2563eb" opacity="0.85" />)}
          <circle cx="160" cy="68" r="20" fill="none" stroke="#14b8a6" strokeWidth="10" strokeDasharray="70 60" />
          <circle cx="160" cy="68" r="20" fill="none" stroke="#2563eb" strokeWidth="10" strokeDasharray="30 100" strokeDashoffset="-70" />
        </g>
      )}
      {kind === 'map' && (
        <g>
          <rect x="0" y="0" width="70" height="110" fill="#fff" />
          {[0, 1, 2, 3, 4].map((i) => <rect key={i} x="8" y={12 + i * 18} width="54" height="10" rx="2" fill="#e2e8f0" />)}
          {[0, 1, 2, 3].map((i) => <line key={i} x1={70 + i * 40} y1="0" x2={70 + i * 40} y2="110" stroke="#cfe0ea" />)}
          {[0, 1, 2].map((i) => <line key={i} x1="70" y1={25 + i * 30} x2="200" y2={25 + i * 30} stroke="#cfe0ea" />)}
          <path d="M80 90 C110 70 120 40 150 52 S185 30 192 18" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
          <circle cx="80" cy="90" r="5" fill="#22c55e" />
          <circle cx="192" cy="18" r="5" fill="#ef4444" />
        </g>
      )}
      {kind === 'flow' && (
        <g>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i}>
              <rect x={10 + i * 31} y="42" width="22" height="22" rx="5" fill="#fff" stroke="#c7d2e5" />
              <circle cx={21 + i * 31} cy="53" r="5" fill={i === 4 ? '#2563eb' : '#14b8a6'} />
              {i < 5 && <line x1={32 + i * 31} y1="53" x2={41 + i * 31} y2="53" stroke="#94a3b8" strokeWidth="1.5" />}
            </g>
          ))}
        </g>
      )}
      {kind === 'sheet' && (
        <g>
          <rect x="8" y="8" width="184" height="52" rx="3" fill="#fff" stroke="#dbe4f0" />
          {[0, 1, 2, 3, 4].map((r) => [0, 1, 2, 3, 4, 5].map((c) => (
            <rect key={`${r}${c}`} x={12 + c * 30} y={12 + r * 10} width="26" height="6" rx="1" fill={r === 0 ? '#bfdbfe' : '#e8eef7'} />
          )))}
          {[18, 30, 24, 40, 34, 46].map((h, i) => <rect key={i} x={16 + i * 30} y={106 - h} width="14" height={h} rx="2" fill={i % 2 ? '#14b8a6' : '#2563eb'} opacity="0.85" />)}
        </g>
      )}
    </svg>
  )
}