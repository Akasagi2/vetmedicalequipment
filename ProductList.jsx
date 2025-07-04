
import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductList = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
