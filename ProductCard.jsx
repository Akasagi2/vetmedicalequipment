
import React from "react";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }) => (
  <div className="product-card border rounded p-4">
    <a href={product.detailLink}>
      <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-sm mb-2">{product.description.split('\n')[0]}</p>
      <span className="font-bold text-blue-600">{product.price}</span>
      <Button className="block mt-2" variant="outline">Xem chi tiết</Button>
    </a>
  </div>
);

export default ProductCard;
