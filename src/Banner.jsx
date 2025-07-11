import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <div
      className="banner-section"
      style={{
        backgroundImage: "url('/images/banner_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <img
        src="/images/logo.png"
        alt="Logo"
        className="banner-logo"
      />

      <div className="banner-content">
        <h1></h1>
        <p></p>
        <button className="banner-btn">Xem tất cả sản phẩm</button>
      </div>

      <div className="banner-info-cards">
        <div className="info-card">
          <div className="info-card-number">5+</div>
          <div className="info-card-label">Năm kinh nghiệm</div>
        </div>
        <div className="info-card">
          <div className="info-card-number">30+</div>
          <div className="info-card-label">Sản phẩm</div>
        </div>
        <div className="info-card">
          <div className="info-card-number">100+</div>
          <div className="info-card-label">Sản phẩm bán ra</div>
        </div>
        <div className="info-card">
          <div className="info-card-number">10+</div>
          <div className="info-card-label">Thương hiệu</div>
        </div>
      </div>
    </div>
  );
}
