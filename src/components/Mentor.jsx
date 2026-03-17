import { Trophy, GraduationCap, Users, Bookmark } from 'lucide-react';
import mentorImg from '../assets/mentor_joy.jpg';

export default function Mentor() {
  return (
    <div className="mentor-band reveal reveal-delay-2" style={bandStyle}>
      <div className="mentor-inner" style={innerStyle}>
        <div style={avContainer}>
          <div className="m-av" style={avStyle}>
            <img src={mentorImg} alt="Mentor" style={imgStyle} />
          </div>
        </div>

        <div style={{ flexShrink: 0 }}>
          <div className="m-pill" style={pillStyle}>
            <Trophy size={12} fill="currentColor" style={{ marginRight: '6px' }} />
            ৪১তম বিসিএস মেধাক্রম-০১
          </div>
          <h2 className="m-name" style={nameStyle}>জয়নাল আবেদীন জয়</h2>
          <div className="m-cred-grid" style={credGrid}>
            <div className="m-cred-item" style={credItem}>
              <GraduationCap size={16} color="var(--forest)" />
              <span>BSc, MSc in Math, DU</span>
            </div>
            <div className="m-cred-item" style={credItem}>
              <Bookmark size={16} color="var(--gold)" />
              <span>বিসিএস সাধারণ শিক্ষা</span>
            </div>
          </div>
        </div>

        <div className="m-stats" style={statsStyle}>
          <div className="ms" style={statBox}>
            <div style={statIcon}><Users size={20} color="var(--forest)" /></div>
            <div>
              <div style={numStyle}>১,০০০+</div>
              <div style={labelStyle}>সফল শিক্ষার্থী</div>
            </div>
          </div>
          <div className="ms" style={statBox}>
            <div style={statIcon}><Trophy size={20} color="var(--gold)" /></div>
            <div>
              <div style={numStyle}>৮ বছর</div>
              <div style={labelStyle}>অভিজ্ঞতা</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const bandStyle = {
  background: 'var(--cream2)',
  padding: '60px 4%',
  borderTop: '1px solid var(--border)',
};

const innerStyle = {
  maxWidth: '1200px', margin: '0 auto',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  flexWrap: 'wrap', gap: '32px',
};

const avContainer = { position: 'relative', flexShrink: 0 };
const avStyle = {
  width: '140px', height: '140px', borderRadius: '44px',
  background: 'var(--white)', border: '2px solid var(--white)',
  overflow: 'hidden', boxShadow: 'var(--shadow-lg)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};
const imgStyle = { width: '100%', height: '100%', objectFit: 'cover' };
const verifyBadge = { 
  position: 'absolute', bottom: '-4px', right: '-4px',
  width: '24px', height: '24px', borderRadius: '50%',
  background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center',
  boxShadow: 'var(--shadow-sm)'
};

const pillStyle = {
  display: 'inline-flex', alignItems: 'center',
  background: 'var(--gold-bg)', color: 'var(--gold)',
  borderRadius: '40px', padding: '6px 14px',
  fontSize: '12px', fontWeight: 800, marginBottom: '6px',
};

const nameStyle = { fontSize: '28px', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-0.5px', marginBottom: '6px' };

const credGrid = { display: 'flex', flexWrap: 'wrap', gap: '12px' };
const credItem = { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: 'var(--muted)' };

const statsStyle = { display: 'flex', gap: '24px' };
const statBox = { display: 'flex', alignItems: 'center', gap: '12px' };
const statIcon = { width: '48px', height: '48px', borderRadius: '14px', background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' };
const numStyle = { fontSize: '22px', fontWeight: 800, color: 'var(--ink)', lineHeight: 1 };
const labelStyle = { fontSize: '12.5px', color: 'var(--muted2)', fontWeight: 600, marginTop: '4px' };
