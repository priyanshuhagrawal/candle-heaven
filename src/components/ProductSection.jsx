import { useMemo, useState } from "react";
import { products, categories } from "../data/products";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleProducts = useMemo(
    () => activeCategory === "All" ? products : products.filter(product => product.category === activeCategory),
    [activeCategory]
  );
  return (
    <section className="section products-section" id="products">
      <SectionTitle eyebrow="MADE TO MAKE YOU SMILE" title="The Candle Edit" description="Meet the little things that make a room feel like yours." />
      <div className="filter-row" aria-label="Filter products">
        {categories.map(category => <button type="button" key={category} onClick={() => setActiveCategory(category)} className={`filter-chip ${activeCategory === category ? "active" : ""}`} aria-pressed={activeCategory === category}>{category}</button>)}
      </div>
      <div className="product-grid">
        {visibleProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
      <p className="catalogue-note">Want a different colour or fragrance? Ask us about available options and delivery on WhatsApp.</p>
    </section>
  );
}
