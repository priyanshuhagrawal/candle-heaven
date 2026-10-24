const WHATSAPP_NUMBER = "917796119711"; // Primary contact: 7796119711. Country code 91.

export default function WhatsAppButton({ children = "Order on WhatsApp", product, className = "" }) {
  const message = product
    ? `Hi Candle Heaven! I'd like to enquire about ${product.name}${product.price ? ` (₹${product.price})` : ""}. Please share availability and delivery details.`
    : "Hi Candle Heaven! I'd like to know more about your candles and gift hampers.";
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a className={`whatsapp-button ${className}`} href={url} target="_blank" rel="noreferrer">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.3-4.9a8.4 8.4 0 1 1 16.2-3.8ZM8.2 7.8c-.2-.5-.5-.5-.8-.5h-.6c-.2 0-.6.1-.9.5-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.1 3.4 5.2 4.6 2.6 1 3.1.8 3.7.7.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.7-.4l-2.1-1c-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.1-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6Z"/></svg>
      {children}
    </a>
  );
}
