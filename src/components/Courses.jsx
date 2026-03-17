


import { Trophy, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      id: 1,
      chips: [{ label: 'BCS', type: 'ch-b' }],
      title: 'BCS বিষয়ভিত্তিক গণিত',
      sub: 'বিসিএস পরীক্ষার জন্য অঙ্কশালা স্পেশাল ব্যাচ',
      feats: [
        'বিসিএস গাণিতিক যুক্তির A to Z সিলেবাস কভারেজ',
        '২ মাসের বিশেষ নিবিড় প্রোগ্রাম',
        'লাইভ ক্লাস + রেকর্ডেড লেকচার ব্যাকআপ',
        'শর্টকাট টেকনিক ও বেসিক ক্লিয়ারেন্স',
        'নিয়মিত মডেল টেস্ট ও সলভ ক্লাস'
      ],
      btn: { text: 'কোর্সে ভর্তি হন' }
    },
    {
      id: 2,
      chips: [{ label: 'NTRCA', type: 'ch-g' }],
      title: 'NTRCA নিবন্ধন (গণিত) কোর্স',
      sub: 'NTRCA প্রভাষক (গণিত) · বিষয়ভিত্তিক প্রস্তুতি',
      feats: [
        'NTRCA কতৃর্ক বিষয়ভিত্তিক সিলেবাসের পূর্ণ প্রস্তুতি',
        '২ মাসের বিশেষ নিবিড় প্রোগ্রাম',
        'লাইভ ক্লাস + রেকর্ডেড লেকচার',
        'MCQ ও লিখিত পরীক্ষার প্রস্তুতি',
        'সম্পূর্ণ সিলেবাস কভারেজ'
      ],
      btn: { text: 'কোর্সে ভর্তি হন' }
    }
  ];

  return (
    <section className="sec" id="courses" style={{ padding: '80px 4%', background: 'var(--white)' }}>
      <div className="sec-head reveal" style={{ marginBottom: '48px', textAlign: 'center' }}>
        <div className="sec-kicker" style={{ ...kickerStyle, justifyContent: 'center' }}>
          <CheckCircle size={14} />
          কোর্সসমূহ
        </div>
        <h2 className="sec-title" style={secTitleStyle}>আমাদের বিশেষ প্রস্তুতি কোর্স</h2>
      </div>

      <div className="grid-2 reveal reveal-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', maxWidth: '1100px', margin: '0 auto' }}>
        {courses.map(c => (
          <div key={c.id} className="course-card" style={crdStyle()}>
            <div style={barStyle(c.id === 1 ? 'var(--forest)' : 'var(--gold)')}></div>

            <div className="crd-top" style={{ padding: '32px 32px 24px' }}>
              <div className="chips" style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                {c.chips.map((chip, idx) => (
                  <span key={idx} style={getChipStyle(chip.type)}>
                    <Trophy size={11} fill="currentColor" />
                    {chip.label}
                  </span>
                ))}
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.3px' }}>{c.title}</h3>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.6 }}>{c.sub}</p>
            </div>

            <div className="crd-feats" style={featsStyle}>
              {c.feats.map((f, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--ink2)', fontWeight: 500 }}>
                  <ShieldCheck size={18} color="var(--forest)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  {f}
                </div>
              ))}
            </div>

            <div className="crd-foot" style={footStyle}>
              <a 
                href={`https://wa.me/+8801843787625`}
                className="btn-crd" 
                style={{ ...getBtnCStyle(c.id === 1 ? 'forest' : 'gold'), textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Zap size={18} fill="currentColor" />
                {c.btn.text}
              </a>
            </div>
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

const crdStyle = () => ({
  background: 'var(--white)',
  border: '1px solid var(--border)',
  borderRadius: '24px',
  overflow: 'hidden', display: 'flex', flexDirection: 'column',
  boxShadow: 'var(--shadow-md)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
});

const barStyle = (bg) => ({ height: '6px', background: bg });

const getChipStyle = (type) => ({
  display: 'inline-flex', alignItems: 'center', gap: '6px',
  fontSize: '11px', fontWeight: 800, padding: '6px 12px',
  borderRadius: '40px', border: '1px solid currentColor',
  background: type === 'ch-b' ? '#eaf3fc' : 'var(--mint)',
  color: type === 'ch-b' ? '#1a5b9a' : 'var(--forest)',
});

const featsStyle = { padding: '0 32px 32px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' };

const footStyle = { padding: '24px 32px 32px', borderTop: '1px solid var(--border)', background: 'var(--cream)', display: 'flex', flexDirection: 'column' };

const getBtnCStyle = (type) => ({
  width: '100%', padding: '16px', border: 'none', borderRadius: '16px',
  fontSize: '16px', fontWeight: 700, cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  background: type === 'gold' ? 'var(--gold)' : 'var(--forest)',
  color: '#fff',
  boxShadow: `0 8px 20px ${type === 'gold' ? 'rgba(200,134,10,0.2)' : 'rgba(26,92,54,0.2)'}`,
});
