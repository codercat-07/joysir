import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer reveal">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">অঙ্কশালা</h2>
            <p className="footer-desc">
              স্বপ্নের চাকরি প্রস্তুতিতে আপনার বিশ্বস্ত গণিত মেন্টর। 
              সেরা গাইডলাইন ও প্রযুক্তির সমন্বয়ে গণিতভীতি দূর করাই আমাদের লক্ষ্য।
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear().toLocaleString('bn-BD', {useGrouping:false})} অঙ্কশালা — সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="trust-badge">
            <ShieldCheck size={14} />
            <span>নিরাপদ ও বিশ্বস্ত প্ল্যাটফর্ম</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
