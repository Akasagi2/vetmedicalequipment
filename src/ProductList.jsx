import React, { useState } from "react";
import ProductCard from "./ProductCard";
import products from "./products";
import CompanyIntro from "./CompanyIntro";
import ProductModal from "./ProductModal";

function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const text = `${product.name} ${product.description || ""}`.toLowerCase();
    return text.includes(query.toLowerCase().trim());
  });

  return (
    <>
      <section id="san-pham" className="product-section">
        <div className="product-section-header">
          <h2>Danh sách sản phẩm</h2>
          <p>
            Chọn nhanh thiết bị phù hợp với nhu cầu của phòng khám, bệnh viện
            hoặc phòng xét nghiệm thú y.
          </p>
          <div className="product-filters">
            <input
              type="text"
              className="product-search-input"
              placeholder="Tìm theo tên hoặc tính năng..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDetail={() => setSelectedProduct(product)}
            />
          ))}
          {filteredProducts.length === 0 && (
            <p className="product-empty">
              Không tìm thấy sản phẩm phù hợp. Vui lòng thử lại với từ khóa
              khác hoặc liên hệ để được tư vấn.
            </p>
          )}
        </div>

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </section>

      <CompanyIntro />
    </>
  );
}

export default ProductList;

