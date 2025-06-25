import React from "react";
import "./ProductModal.css";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const lines = product.description?.split("\n") || [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        {/* Ảnh chính có class modal-image để kiểm soát kích thước */}
        <img
          className="modal-image"
          src={product.images?.[0]}
          alt={product.name}
        />

        <div className="modal-details">
          <h2 className="product-title">{product.name}</h2>

          <div className="product-price">
            <b>Giá:</b> {product.price || "Liên hệ"}
          </div>

          <div className="product-full-desc">
            {lines.map((line, index) => (
              <p key={index}>✅ {line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}