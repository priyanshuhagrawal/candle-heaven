import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow eyebrow-light">HANDCRAFTED WITH LOVE</p>
        <h1>More than a candle,<br /><em>a feeling.</em></h1>
        <p className="hero-description">Thoughtfully designed candles and decorative diyas to brighten your space and warm your soul.</p>
        <div className="hero-actions">
          <a className="button button-gold" href="#collections">Explore the collection <span aria-hidden="true">↗</span></a>
          <WhatsAppButton className="button-outline">Talk to us</WhatsAppButton>
        </div>
        <p className="hero-footnote"><span>✦</span> For celebrations, cosy evenings and meaningful gifts.</p>
      </div>
      <div className="hero-art" aria-label="Decorative candle illustration">
        <div className="art-halo"></div>
        <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
        <div className="art-flower flower-one">✿</div><div className="art-flower flower-two">✿</div>
        <div className="candle-scene">
          <div className="flame"></div><div className="wick"></div>
          <div className="candle-top"><span></span></div>
          <div className="candle-body"><i>✿</i><b>CH</b><small>hand poured</small></div>
          <div className="candle-base"></div>
        </div>
        <div className="mini-candle mini-one"><span className="mini-flame"></span></div>
        <div className="mini-candle mini-two"><span className="mini-flame"></span></div>
        <div className="art-caption"><span>made by hand</span><strong>with heart</strong><small>✦ CANDLE HEAVEN ✦</small></div>
      </div>
      <div className="hero-bottom"><span>01 — A LITTLE LIGHT GOES A LONG WAY</span><span>Small batch · Thoughtfully made</span></div>
    </section>
  );
}
