import React from "react";
import "./Banner.css";

export default function Banner() {
  const handleViewAllClick = () => {
    const section = document.getElementById("san-pham");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="banner-section"
      style={{
        backgroundImage: "url('/images/banner_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <img src="/images/logo.png" alt="IPP Vet" className="banner-logo" />

      <div className="banner-content">
        <h1>Thiết bị chẩn đoán thú y chuyên nghiệp</h1>
        <p>
          Giải pháp X-quang, CT, máy xét nghiệm và thiết bị phòng khám thú y –
          tư vấn, lắp đặt và bảo hành trọn gói.
        </p>
        <button
          className="banner-btn"
          type="button"
          onClick={handleViewAllClick}
        >
          Xem tất cả sản phẩm
        </button>
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
    </section>
  );
}

