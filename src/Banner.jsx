import React from "react";
import "./Banner.css";

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Banner() {
  const handleViewAllClick = () => {
    scrollToSection("san-pham");
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
      <div className="banner-top">
        <button
          type="button"
          className="banner-brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/images/logo.png"
            alt="IPP Vet"
            className="banner-brand-logo"
          />
          <div className="banner-brand-text">
            <span className="banner-brand-name">IPP Vet</span>
            <span className="banner-brand-tagline">
              Thiết bị chẩn đoán thú y
            </span>
          </div>
        </button>

        <nav className="banner-nav">
          <button
            type="button"
            className="banner-nav-link"
            onClick={() => scrollToSection("san-pham")}
          >
            Sản phẩm
          </button>
          <button
            type="button"
            className="banner-nav-link"
            onClick={() => scrollToSection("ve-chung-toi")}
          >
            Về chúng tôi
          </button>
          <button
            type="button"
            className="banner-nav-link banner-nav-link-cta"
            onClick={() => scrollToSection("lien-he")}
          >
            Liên hệ
          </button>
        </nav>
      </div>

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

