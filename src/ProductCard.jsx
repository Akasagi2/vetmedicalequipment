function ProductCard({ product, onDetail }) {
  const descriptionLines = (product.description || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 3);

  return (
    <div className="product-card">
      {product.images && product.images[0] && (
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
        />
      )}

      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-desc">
          {descriptionLines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <div className="product-bottom">
          <span className="product-price">{product.price}</span>
          <button className="product-btn" type="button" onClick={onDetail}>
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

