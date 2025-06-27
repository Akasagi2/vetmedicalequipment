import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-section">
      <img src="/images/logo.png" className="banner-logo" alt="logo" />

      <div className="banner-content">
        <button className="banner-btn">Xem tất cả sản phẩm</button>

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
            <div className="info-card-label">Thương hiệu hàng đầu</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
