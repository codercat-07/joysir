import { GraduationCap, Layout, Layers, BookOpen, Search, Wallet, Landmark } from 'lucide-react';

export default function Exams() {
  const exams = [
    { name: 'BCS', count: 'বিষয়ভিত্তিক গণিত', icon: <BookOpen size={24} color="var(--forest)" />, bg: 'var(--mint)' },
    { name: 'NTRCA', count: 'গণিত বিশেষ কোর্স', icon: <GraduationCap size={24} color="var(--forest)" />, bg: 'var(--mint)' },
    { name: 'ব্যাংক', count: 'সকল ব্যাংক জব', icon: <Wallet size={24} color="var(--gold)" />, bg: 'var(--gold-bg)' },
    { name: 'সরকারি', count: 'সকল সরকারি নিয়োগ', icon: <Landmark size={24} color="var(--ink2)" />, bg: 'var(--cream2)' },
  ];

  return (
    <section className="sec reveal reveal-delay-2" id="exams" style={{ background: 'var(--white)', padding: '100px 4%' }}>
      <div className="sec-head" style={{ marginBottom: '56px', textAlign: 'center' }}>
        <div className="sec-kicker" style={{ ...kickerStyle, justifyContent: 'center' }}>
          <Search size={14} />
          মেন্টরিং
        </div>
        <h2 className="sec-title" style={secTitleStyle}>মেন্টরিং এর ক্ষেত্রসমূহ</h2>
      </div>
      
      <div className="exam-grid" style={gridStyle}>
        {exams.map((ex, i) => (
          <div key={i} className="ex-card" style={exCardStyle}>
            <div style={iconBox(ex.bg)}>{ex.icon}</div>
            <h3 style={exNameStyle}>{ex.name}</h3>
            <p style={exCountStyle}>{ex.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const kickerStyle = {
  display: 'flex', alignItems: 'center', gap: '8px',
  fontSize: '11px', fontWeight: 800, color: 'var(--forest)',
  textTransform: 'uppercase', letterSpacing: '0.1em',
};

const secTitleStyle = {
  fontFamily: "'Tiro Bangla', serif",
  fontSize: 'clamp(32px, 5vw, 42px)',
  fontWeight: 400, color: 'var(--ink)', lineHeight: 1.2,
  letterSpacing: '-1px',
};

const gridStyle = { 
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
  gap: '24px', maxWidth: '1100px', margin: '0 auto' 
};

const exCardStyle = {
  background: 'var(--cream)',
  border: '1px solid var(--border)', borderRadius: '24px',
  padding: '40px 24px', textAlign: 'center',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer', boxShadow: 'var(--shadow-sm)',
};

const iconBox = (bg) => ({
  width: '64px', height: '64px', borderRadius: '20px', margin: '0 auto 20px',
  background: bg || 'var(--mint)', display: 'flex', alignItems: 'center', justifyContent: 'center',
  boxShadow: 'var(--shadow-sm)',
});

const exNameStyle = { fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px' };
const exCountStyle = { fontSize: '14px', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.02em' };
