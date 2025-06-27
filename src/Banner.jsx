import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner-container">
      <button className="banner-button">Xem tất cả sản phẩm</button>
      <div className="banner-card">
        <div className="banner-title">5+</div>
        <div className="banner-subtitle">Năm kinh nghiệm</div>
      </div>
      <div className="banner-card">
        <div className="banner-title">30+</div>
        <div className="banner-subtitle">Sản phẩm</div>
      </div>
      <div className="banner-card">
        <div className="banner-title">100+</div>
        <div className="banner-subtitle">Sản phẩm bán ra</div>
      </div>
    </div>
  );
}
