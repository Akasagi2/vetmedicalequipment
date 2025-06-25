import React, { useState } from "react";
import ProductCard from "./ProductCard";
import products from "./products";
import CompanyIntro from "./CompanyIntro";
import ProductModal from "./ProductModal"; // nếu đã tách modal ra file riêng

function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      {/* Danh sách sản phẩm */}
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDetail={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {/* Modal chi tiết sản phẩm – Đặt ngoài product-list */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Giới thiệu công ty */}
      <CompanyIntro />
    </>
  );
}

export default ProductList;