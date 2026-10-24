import WhatsAppButton from "./WhatsAppButton";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-number">CH · {String(product.id).padStart(2, "0")}</span>
        <span className="pack-label">{product.pack}</span>
      </div>
      <div className="product-content">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-bottom">
          <strong className="product-price">{product.price ? `₹${product.price}` : "Ask for price"}</strong>
          <WhatsAppButton product={product} className="product-order" aria-label={`Enquire about ${product.name}`}>Enquire ↗</WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
