import React from "react";
import "./Header.css";

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <button
          type="button"
          className="header-brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/images/logo.png"
            alt="IPP Vet"
            className="header-logo"
          />
          <div className="header-brand-text">
            <span className="brand-name">IPP Vet</span>
            <span className="brand-tagline">Thiết bị chẩn đoán thú y</span>
          </div>
        </button>

        <nav className="header-nav">
          <button
            type="button"
            className="header-link"
            onClick={() => scrollToSection("san-pham")}
          >
            Sản phẩm
          </button>
          <button
            type="button"
            className="header-link"
            onClick={() => scrollToSection("ve-chung-toi")}
          >
            Về chúng tôi
          </button>
          <button
            type="button"
            className="header-link header-link-cta"
            onClick={() => scrollToSection("lien-he")}
          >
            Liên hệ
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

