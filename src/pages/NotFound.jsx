import { Home, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="home-page">
      <div className="not-found reveal active" style={containerStyle}>
        <div style={iconBox}>
          <AlertCircle size={64} color="var(--forest)" />
        </div>
        <h1 style={h1Style}>৪০৪ - পৃষ্ঠাটি পাওয়া যায়নি</h1>
        <p style={pStyle}>দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা সম্ভবত সরানো হয়েছে বা আমাদের কাছে নেই।</p>
        <Link to="/" className="btn-solid" style={btnStyle}>
          <Home size={18} />
          <span>হোমপেজে ফিরে যান</span>
        </Link>
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  textAlign: 'center',
  padding: '0 4%',
};

const iconBox = {
  width: '120px',
  height: '120px',
  borderRadius: '40px',
  background: 'var(--mint)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '32px',
  boxShadow: 'var(--shadow-md)',
  animation: 'float 6s ease-in-out infinite',
};

const h1Style = {
  fontFamily: "'Tiro Bangla', serif",
  fontSize: 'clamp(32px, 5vw, 48px)',
  color: 'var(--ink)',
  marginBottom: '16px',
};

const pStyle = {
  fontSize: '18px',
  color: 'var(--muted)',
  maxWidth: '500px',
  marginBottom: '40px',
  lineHeight: 1.6,
};

const btnStyle = {
  padding: '14px 28px',
  fontSize: '16px',
  borderRadius: '14px',
};
