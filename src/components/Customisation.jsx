import { colours, fragrances } from "../data/products";
import SectionTitle from "./SectionTitle";
import WhatsAppButton from "./WhatsAppButton";

const colourHex = ["#e9a4b5", "#9dbb91", "#626b39", "#8254a0", "#ff902b", "#929596", "#75452f", "#8c6bb0", "#d4b8e8", "#4f9dcc", "#e8d83c", "#e5413d"];

export default function Customisation() {
  return (
    <section className="section customise-section" id="customise">
      <SectionTitle eyebrow="MAKE IT PERSONAL" title="Your scent. Your shade." description="Choose a fragrance or colour that feels like you." />
      <div className="customise-grid">
        <article className="custom-card">
          <div className="custom-card-title"><span>✺</span><div><h3>Available fragrances</h3><p>Find your kind of calm.</p></div></div>
          <div className="fragrance-grid">{fragrances.map((name, i) => <div className="fragrance-item" key={name}><span className={`fragrance-swatch fragrance-${i}`}></span><small>{name}</small></div>)}</div>
        </article>
        <article className="custom-card">
          <div className="custom-card-title"><span>◉</span><div><h3>Available colours</h3><p>A shade for every mood.</p></div></div>
          <div className="colour-grid">{colours.map((name, i) => <div className="colour-item" key={name}><span className="colour-swatch" style={{ "--swatch": colourHex[i] }}></span><small>{name}</small></div>)}</div>
        </article>
        <article className="pricing-card">
          <p className="eyebrow eyebrow-light">GIFT A LITTLE GLOW</p><h3>Box pricing</h3>
          <div className="price-row"><span>Diya Petal Candles</span><strong>₹180 <small>/ 6</small></strong></div>
          <div className="price-row"><span>Marble Diya Candles</span><strong>₹200 <small>/ 6</small></strong></div>
          <div className="price-row"><span>Flower Diya Candles</span><strong>₹200 <small>/ 6</small></strong></div>
          <div className="price-row"><span>Motichoor Ladoo</span><strong>₹180 <small>/ 4</small></strong></div>
          <div className="price-row"><span>Motichoor Ladoo</span><strong>₹220 <small>/ 6</small></strong></div>
          <div className="price-row"><span>Normal / Rose Flowers</span><strong>₹150 <small>/ 4</small></strong></div>
          <div className="price-row"><span>Secret Message Candles</span><strong>₹300 <small>/ 8</small></strong></div>
          <WhatsAppButton className="pricing-cta">Ask about gift boxes</WhatsAppButton>
        </article>
      </div>
      <div className="hamper-note"><span>✧</span><p><strong>Planning a celebration?</strong> Diwali hampers are available. Message us to discuss a thoughtful gift.</p><WhatsAppButton className="hamper-cta">Create a hamper</WhatsAppButton></div>
    </section>
  );
}
