import React, { useEffect } from "react";
import "./ProductModal.css";

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    if (!product) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const lines = product.description?.split("\n") || [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close-btn" type="button" onClick={onClose}>
          ×
        </button>

        <img
          className="modal-image"
          src={product.images?.[0]}
          alt={product.name}
        />

        <div className="modal-details">
          <h2 className="product-title">{product.name}</h2>

          <div className="product-price">
            {product.price || "Liên hệ để được tư vấn giá"}
          </div>

          <div className="product-full-desc">
            {lines.map((line, index) => (
              <div key={index} className="product-line">
                {line}
              </div>
            ))}
          </div>

          <div className="product-action">
            <button
              type="button"
              onClick={() => {
                const contactSection = document.getElementById("lien-he");
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                }
                onClose();
              }}
            >
              Liên hệ tư vấn thiết bị
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

