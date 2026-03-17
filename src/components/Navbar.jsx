import { useEffect, useState } from 'react';
import { Facebook, MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo.png';

const whatsappNumber = "+8801843787625";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={navStyle(scrolled)}>
      <div style={navInner}>
        <a href="#" className="nav-logo" style={logoLinkStyle}>
          <img src={logoImg} alt="অঙ্কশালা" style={logoImgStyle} />
        </a>

        <div className="nav-right" style={navRightStyle}>
          <a
            href="https://facebook.com/Zainalabedinprofile"
            className="btn-fb"
            style={fbBtnStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={18} />
            <span>ফেসবুক</span>
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="btn-wa"
            style={waBtnStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            <span>হোয়াটসঅ্যাপ</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

const navStyle = (scrolled) => ({
  position: 'sticky', top: 0, zIndex: 1000,
  height: scrolled ? '64px' : '72px',
  display: 'flex', alignItems: 'center',
  background: scrolled ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.35)',
  backdropFilter: 'blur(16px) saturate(180%)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
  boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.04)' : 'none',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
});

const navInner = {
  width: '100%', maxWidth: '1200px', margin: '0 auto',
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '0 4%',
};

const logoLinkStyle = { display: 'flex', alignItems: 'center', transition: 'transform 0.2s' };
const logoImgStyle = { height: '36px', width: 'auto', display: 'block' };

const navRightStyle = { display: 'flex', alignItems: 'center', gap: '12px' };

const fbBtnStyle = {
  display: 'flex', alignItems: 'center', gap: '8px',
  background: '#1877F2', color: '#fff', padding: '10px 18px',
  borderRadius: '12px', fontSize: '14px', fontWeight: 700,
  boxShadow: '0 4px 12px rgba(24,119,242,0.2)', transition: 'all 0.2s'
};

const waBtnStyle = {
  display: 'flex', alignItems: 'center', gap: '8px',
  background: '#25D366', color: '#fff', padding: '10px 18px',
  borderRadius: '12px', fontSize: '14px', fontWeight: 700,
  boxShadow: '0 4px 12px rgba(37,211,102,0.2)', transition: 'all 0.2s'
};
