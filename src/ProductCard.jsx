function ProductCard({ product, onDetail, isAdmin, onEdit, onDelete }) {
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
          <div className="product-actions">
            <button className="product-btn" type="button" onClick={onDetail}>
              Xem chi tiết
            </button>
            {isAdmin && (
              <>
                <button
                  type="button"
                  className="product-admin-btn"
                  onClick={onEdit}
                >
                  Sửa
                </button>
                <button
                  type="button"
                  className="product-admin-btn product-admin-btn-danger"
                  onClick={onDelete}
                >
                  Xóa
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

