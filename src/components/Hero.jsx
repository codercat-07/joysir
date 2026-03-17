


import { Edit3, Video, Heart, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" style={sectionStyle}>
      <div className="hero-deco deco-1" style={decoStyle(640, -200, -180)}></div>
      <div className="hero-deco deco-2" style={decoStyle(460, -100, -80, 'rgba(26,92,54,.1)')}></div>
      <div className="hero-blob" style={blobStyle}></div>
      <div className="hero-dots" style={dotsStyle}></div>

      <div className="hero-left" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-pill reveal" style={pillStyle}>
          <span className="pill-dot" style={pillDotStyle}></span>
          দেশসেরা গণিত প্রস্তুতি প্ল্যাটফর্ম
        </div>
        <h1 className="hero-h1 reveal" style={h1Style}>
          স্বপ্নের চাকরির<br />
          <span style={emStyle}>সহজ পথ</span>
        </h1>
        <p className="hero-desc reveal reveal-delay-1" style={descStyle}>
          BCS, NTRCA, ব্যাংক ও সরকারি নিয়োগ পরীক্ষার জন্য বিষয়ভিত্তিক প্রস্তুতি নিন দেশের সেরা গণিত মেন্টরের কাছে ।
        </p>

        <div className="hero-btns reveal reveal-delay-2" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button className="btn-hero-p" style={btnHeroPStyle}>
            <Zap size={18} fill="currentColor" />
            কোর্স আউটলাইন
          </button>
          <button className="btn-hero-s" style={btnHeroSStyle}>
            <Video size={18} />
            ফ্রি ডেমো ক্লাস
          </button>
        </div>

      </div>

      <div className="hero-right reveal reveal-delay-1" style={rightPanelStyle}>
        <div className="hc" style={hcStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={hcLabelStyle}>পরিসংখ্যান</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <div style={hcNumStyle}>১০০০<span style={{ fontSize: '18px', color: 'var(--forest)' }}>+</span></div>
            <div style={hcNlblStyle}>মোট শিক্ষার্থী</div>
          </div>
          <div className="hc-tags" style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <span className="hc-tag" style={tagMintStyle}>BCS</span>
            <span className="hc-tag" style={tagMintStyle}>NTRCA</span>
            <span className="hc-tag" style={tagGoldStyle}>সরকারি</span>
          </div>
        </div>

        <div className="hc" style={hcStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={hcLabelStyle}>চলমান কোর্স</div>
            <div className="live-status" style={liveStatusStyle}>
              <div style={liveDotRed}></div>
              <span>লাইভ</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={courseIconBox}><Edit3 size={18} color="var(--forest)" /></div>
            <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--ink)' }}>BCS বিষয়ভিত্তিক গণিত</div>
          </div>
          <div className="hc-tags" style={{ display: 'flex', gap: '8px' }}>
            <span className="hc-tag" style={tagGoldStyle}>ফ্রী ক্লাস</span>
            <span className="hc-tag" style={tagMintStyle}>স্পেশাল কেয়ার ব্যাচ</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const sectionStyle = {
  position: 'relative', overflow: 'hidden',
  minHeight: '480px',
  padding: '80px 4%',
  display: 'grid', gridTemplateColumns: '1fr 420px',
  alignItems: 'center', gap: '60px',
  background: 'var(--cream)',
};

const decoStyle = (size, top, right, color) => ({
  position: 'absolute', width: `${size}px`, height: `${size}px`, borderRadius: '50%',
  border: `1px solid ${color || 'rgba(26,92,54,.07)'}`,
  top: `${top}px`, right: `${right}px`, pointerEvents: 'none',
});

const blobStyle = {
  position: 'absolute', width: '520px', height: '520px', borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(45,138,82,.1) 0%, transparent 70%)',
  top: '-100px', right: '-80px', pointerEvents: 'none',
  animation: 'float 12s ease-in-out infinite',
};

const dotsStyle = {
  position: 'absolute', inset: 0, pointerEvents: 'none',
  backgroundImage: 'radial-gradient(circle, rgba(26,92,54,.15) 1.5px, transparent 1.5px)',
  backgroundSize: '32px 32px',
  maskImage: 'radial-gradient(ellipse 60% 70% at 75% 30%, black 0%, transparent 75%)',
  opacity: '.4',
};

const pillStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '8px',
  background: 'var(--white)', border: '1px solid var(--border)',
  color: 'var(--forest)', borderRadius: '40px',
  padding: '8px 16px', fontSize: '13px', fontWeight: 600,
  marginBottom: '28px', boxShadow: 'var(--shadow-sm)',
};

const pillDotStyle = {
  width: '8px', height: '8px', borderRadius: '50%',
  background: 'var(--forest)', flexShrink: 0,
  animation: 'pulse 2.5s ease-in-out infinite',
};

const h1Style = {
  fontFamily: "'Tiro Bangla', serif",
  fontSize: 'clamp(40px, 6vw, 72px)',
  fontWeight: 400, lineHeight: 1.1,
  color: 'var(--ink)', letterSpacing: '-1px',
  marginBottom: '24px',
};

const emStyle = { fontStyle: 'normal', color: 'var(--forest)', fontWeight: 700 };
const descStyle = { fontSize: '16.5px', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '480px', marginBottom: '40px' };

const btnHeroPStyle = {
  background: 'var(--forest)', color: '#fff', border: 'none', borderRadius: '14px',
  padding: '16px 32px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 8px 24px rgba(26,92,54,0.25)',
};

const btnHeroSStyle = {
  background: 'var(--white)', color: 'var(--ink)', border: '1px solid var(--border)', borderRadius: '14px',
  padding: '16px 32px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  display: 'flex', alignItems: 'center', gap: '10px', boxShadow: 'var(--shadow-sm)',
};

const trustStyle = { display: 'flex', alignItems: 'center', gap: '12px', marginTop: '48px' };
const trustIconBox = { width: '40px', height: '40px', borderRadius: '12px', background: 'var(--mint)', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const trustText = { fontSize: '14px', fontWeight: 600, color: 'var(--muted)' };

const rightPanelStyle = { position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '20px' };
const hcStyle = {
  background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)',
  border: '1px solid var(--white)', borderRadius: '24px',
  padding: '28px', boxShadow: 'var(--shadow-md)',
  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
};
const hcLabelStyle = { fontSize: '11px', fontWeight: 800, color: 'var(--muted2)', textTransform: 'uppercase', letterSpacing: '0.1em' };
const hcNumStyle = { fontSize: '32px', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-1px' };
const hcNlblStyle = { fontSize: '14px', color: 'var(--muted2)', fontWeight: 500 };
const liveStatusStyle = { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 800, color: '#ef4444', textTransform: 'uppercase' };
const liveDotRed = { width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', animation: 'livePulse 1.5s ease-in-out infinite' };
const courseIconBox = { width: '44px', height: '44px', borderRadius: '14px', background: 'var(--mint)', display: 'flex', alignItems: 'center', justifyContent: 'center' };

const tagMintStyle = { fontSize: '12px', fontWeight: 700, padding: '6px 14px', borderRadius: '40px', background: 'var(--mint)', color: 'var(--forest)' };
const tagGoldStyle = { fontSize: '12px', fontWeight: 700, padding: '6px 14px', borderRadius: '40px', background: 'var(--gold-bg)', color: 'var(--gold)' };


