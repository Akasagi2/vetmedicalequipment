function ProductCard({ product, onDetail }) {
    return (
      <div className="product-card">
        {product.images && product.images[0] && (
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-image"
          />
        )}
  
        <div className="product-body"> {/* BỔ SUNG DÒNG NÀY */}
          <h3 className="product-name">{product.name}</h3>
          <div className="product-desc">
          {product.description.split('\n').slice(0, 6).map((line, index) => (
          <p key={index}>✅ {line}</p>
  ))}
</div>
          <div className="product-bottom">
            <span className="product-price">{product.price}</span>
            <button className="product-btn" onClick={onDetail}>
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductCard;