import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import ProductSection from "./components/ProductSection";
import StorySection from "./components/StorySection";
import Customisation from "./components/Customisation";
import Footer from "./components/Footer";
import "./styles/global.css";


const collections = [
  {
    title: "Diya Candles",
    number: "01",
    description: "A festive glow",
    image: "/images/Diya_Petal_Candle.jpeg",
    category: "Diya Candles",
  },
  {
    title: "Sweet Inspired",
    number: "02",
    description: "Playful little treats",
    image: "/images/Motichoor_Ladoo_Candle.jpeg",
    category: "Sweet Inspired",
  },
  {
    title: "Floral Candles",
    number: "03",
    description: "Flowers that stay",
    image: "/images/floral-candle.jpeg",
    category: "Floral Candles",
  },
  {
    title: "Latte & Jar",
    number: "04",
    description: "Cosy shelf favourites",
    image: "/images/Butterfly_Pea_Flower_Latte_Candle.jpeg",
    category: "Latte & Jar Candles",
  },
  {
    title: "Gift Hampers",
    number: "05",
    description: "A box full of joy",
    image: "/images/Gift-Hamper.jpeg",
    category: "Gift Hampers",
  },
];



function Collections() {
  const jumpToProducts = (category) => {
    window.dispatchEvent(
      new CustomEvent("candle-category", { detail: category })
    );

    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section collections" id="collections">
      <SectionTitle
        eyebrow="A COLLECTION FOR EVERY OCCASION"
        title="Shop by collection"
        description="From festive diyas to thoughtful gifts, find your little glow."
      />

      <div className="collection-grid">
        {collections.map((item) => (
          <button
            type="button"
            className="collection-card"
            key={item.number}
            onClick={() => jumpToProducts(item.category)}
          >
            <div className="collection-art">
              <img
                src={item.image}
                alt={item.title}
                className="collection-image"
                loading="lazy"
              />
              <span className="collection-index">{item.number}</span>
              <span className="collection-explore">Explore ↗</span>
            </div>

            <div className="collection-card-copy">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}


export default function App() {
  return <><Navbar /><main><Hero /><Collections /><ProductSection /><StorySection /><section className="benefit-strip"><div><span>♡</span><p><strong>Handcrafted with care</strong><small>Little details matter</small></p></div><div><span>✧</span><p><strong>Thoughtful designs</strong><small>Made to be remembered</small></p></div><div><span>♧</span><p><strong>Gift-ready options</strong><small>For every celebration</small></p></div><div><span>☼</span><p><strong>Personal touches</strong><small>Colours and fragrances</small></p></div></section><Customisation /><Footer /></main><a className="floating-whatsapp" href={`https://wa.me/917796119711?text=${encodeURIComponent("Hi Candle Heaven! I'd like to enquire about your candles.")}`} target="_blank" rel="noreferrer" aria-label="Chat with Candle Heaven on WhatsApp"><span>◉</span></a></>;
}
