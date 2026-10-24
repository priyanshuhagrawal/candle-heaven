import { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";

const links = [["Home", "#home"], ["Collections", "#collections"], ["Our Story", "#story"], ["Customise", "#customise"], ["Contact", "#contact"]];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="Candle Heaven home">
        <span className="brand-icon" aria-hidden="true">✺</span>
        <span className="brand-copy"><strong>CANDLE HEAVEN</strong><small>Scents that lift your soul.</small></span>
      </a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
        <span></span><span></span><span></span>
      </button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <WhatsAppButton className="nav-cta">Order on WhatsApp</WhatsAppButton>
      </nav>
    </header>
  );
}
