import { Zap, Video, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="cta" id="contact" style={ctaStyle}>
      <div className="cta-l">
        <div className="cta-ey" style={eyStyle}>
          <Zap size={12} fill="currentColor" />
          শুরু করুন আজই
        </div>
        <h2 className="cta-title" style={titleStyle}>স্বপ্নের চাকরির দিকে<br />প্রথম পদক্ষেপ নিন</h2>
        <p className="cta-sub" style={subStyle}>ফ্রি ক্লাসে যোগ দিন এবং পার্থক্য নিজেই অনুভব করুন</p>
      </div>
      <div className="cta-r" style={rStyle}>
        <button className="btn-cta" style={btnStyle}>
          <Video size={16} />
          ফ্রী ক্লাস দেখুন
        </button>
        <div className="cta-phone" style={phoneStyle}>
          <Phone size={14} />
          <strong>01644334495</strong>
        </div>
      </div>
    </section>
  );
}

const ctaStyle = {
  background: 'var(--forest)', padding: '56px 4%',
  position: 'relative', overflow: 'hidden',
  display: 'grid', gridTemplateColumns: '1fr auto',
  alignItems: 'center', gap: '40px',
};

const eyStyle = {
  fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,.45)',
  textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '10px',
  display: 'flex', alignItems: 'center', gap: '6px',
};

const titleStyle = {
  fontFamily: "'Tiro Bangla', serif", fontSize: 'clamp(24px,3vw,36px)',
  fontWeight: 400, color: '#fff', lineHeight: 1.25, marginBottom: '8px', letterSpacing: '-.3px',
};

const subStyle = { fontSize: '14.5px', color: 'rgba(255,255,255,.58)' };

const rStyle = {
  display: 'flex', flexDirection: 'column', gap: '11px',
  alignItems: 'flex-end', flexShrink: 0, position: 'relative', zIndex: 1,
};

const btnStyle = {
  display: 'flex', alignItems: 'center', gap: '8px',
  background: '#fff', color: 'var(--forest)',
  border: 'none', borderRadius: 'var(--rsm)',
  padding: '13px 28px', fontSize: '15px', fontWeight: 700,
  cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all .2s',
  boxShadow: '0 4px 18px rgba(0,0,0,.15)',
};

const phoneStyle = {
  display: 'flex', alignItems: 'center', gap: '7px',
  fontSize: '13px', color: 'rgba(255,255,255,.42)', whiteSpace: 'nowrap',
};
