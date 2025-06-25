
import React from "react";
import ProductList from "./ProductList";

const HomePage = () => (
  <div className="home-page">
    <header>
      <h1>Chào Mừng Đến Với Website Thiết Bị Y Tế Thú Y</h1>
      <p>Chúng tôi cung cấp các thiết bị chất lượng cao cho phòng khám thú y.</p>
    </header>

    <h2 className="my-4 font-bold text-xl">Sản Phẩm Nổi Bật</h2>
    <ProductList />
  </div>
);

export default HomePage;
