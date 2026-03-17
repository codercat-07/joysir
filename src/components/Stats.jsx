export default function Stats() {
  const stats = [
    { n: '১২,৪৫০', l: 'নিবন্ধিত শিক্ষার্থী', p: '+' },
    { n: '৯৪', l: 'সাফল্যের হার', p: '%' },
    { n: 'মেধাক্রম-০১', l: '৪১তম BCS টপার', p: '' },
    { n: '৫০', l: 'সক্রিয় কোর্স', p: '+' },
  ];

  return (
    <div className="stats-strip" style={stripStyle}>
      {stats.map((s, i) => (
        <div key={i} className="ss" style={ssStyle(i === stats.length - 1)}>
          <div className="ss-n" style={ssNStyle}>
            <span style={{ color: 'var(--leaf)' }}>{s.n}</span>{s.p}
          </div>
          <div className="ss-l" style={ssLStyle}>{s.l}</div>
        </div>
      ))}
    </div>
  );
}

const stripStyle = {
  background: 'var(--ink)',
  padding: '0 4%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
};

const ssStyle = (isLast) => ({
  padding: '16px 0',
  textAlign: 'center',
  borderRight: isLast ? 'none' : '1px solid rgba(255,255,255,.07)',
});

const ssNStyle = { fontSize: '24px', fontWeight: 700, color: '#fff', letterSpacing: '-.5px' };
const ssLStyle = { fontSize: '11.5px', color: 'rgba(255,255,255,.36)', marginTop: '3px' };
