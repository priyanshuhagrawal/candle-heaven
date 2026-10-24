import WhatsAppButton from "./WhatsAppButton";

export default function StorySection() {
  return (
    <section className="story-section" id="story">
      <div className="story-art">
        <div className="story-art-circle"><span>✿</span><strong>A LITTLE<br />LIGHT</strong><small>MADE WITH LOVE</small></div>
        <span className="story-spark spark-a">✧</span><span className="story-spark spark-b">✦</span>
      </div>
      <div className="story-copy">
        <p className="eyebrow">THE HEART OF CANDLE HEAVEN</p>
        <h2>Small flames.<br /><em>Big feelings.</em></h2>
        <p>Candle Heaven is about turning everyday moments into something special. From flower-shaped diyas to dessert-inspired designs and thoughtful gifts, our collection brings warmth, beauty and a little joy to your space.</p>
        <p>For festive celebrations, cosy corners or a surprise for someone you love — find a candle that says what words sometimes can't.</p>
        <WhatsAppButton>Find your candle</WhatsAppButton>
      </div>
    </section>
  );
}
