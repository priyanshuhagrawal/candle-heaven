import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-copy"><p className="eyebrow eyebrow-light">LET'S MAKE SOMETHING GLOW</p><h2>Light up a moment.<br /><em>Make it memorable.</em></h2><p>Tell us what you're looking for. We'll help you find a candle or gift that feels just right.</p></div>
        
<div className="footer-contact-links">
  <a
    href="https://instagram.com/CANDLE_HEAVEN__"
    target="_blank"
    rel="noopener noreferrer"
  >
    @CANDLE_HEAVEN__
  </a>

  <a
    href="https://wa.me/917796119711"
    target="_blank"
    rel="noopener noreferrer"
  >
    7796119711
  </a>

  <a
    href="https://wa.me/917559223171"
    target="_blank"
    rel="noopener noreferrer"
  >
    7559223171
  </a>

  <a href="mailto:candleheaven77@gmail.com">
    candleheaven77@gmail.com
  </a>
</div>

        <span className="contact-decoration" aria-hidden="true">✺</span>
      </section>
      <footer className="footer">
        <a className="brand footer-brand" href="#home"><span className="brand-icon">✺</span><span className="brand-copy"><strong>CANDLE HEAVEN</strong><small>Scents that lift your soul.</small></span></a>
        <p>Made with warmth, shared with love.</p>
        <small>© {new Date().getFullYear()} Candle Heaven. All rights reserved.</small>
      </footer>
    </>
  );
}
