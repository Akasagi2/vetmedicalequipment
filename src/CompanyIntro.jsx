import React from "react";
import "./CompanyIntro.css"; // import CSS riêng

function CompanyIntro() {
  return (
    <footer className="company-footer">
      <div className="footer-container">
        {/* Logo và giới thiệu */}
        <div className="footer-section">
        <img src="/images/logo.png" className="banner-logo" alt="logo" />
          <h3 className="footer-description">
            Công ty chúng tôi chuyên cung cấp thiết bị y tế thú y toàn quốc. Cam kết chất lượng và hỗ trợ tận tâm.
          </h3>
        </div>

        {/* Liên hệ */}
        <div className="footer-section">
          <h4 className="footer-title">Liên hệ</h4>
          <p>📞 0901 234 567</p>
          <p>📧 vet@company.vn</p>
          <p>📍 123 Đường ABC, TP.HCM</p>
        </div>

        {/* Sản phẩm */}
        <div className="footer-section">
          <h4 className="footer-title">Sản phẩm</h4>
          <p>Máy xét nghiệm</p>
          <p>Máy siêu âm và X-quang</p>
          <p>Thiết bị ngoại khoa</p>
          <p>Thiết bị nội khoa</p>
        </div>

        {/* Về chúng tôi */}
        <div className="footer-section">
          <h4 className="footer-title">Về chúng tôi</h4>
          <p>Giới thiệu</p>
          <p>Tuyển dụng</p>
          <p>Chính sách bảo hành</p>
        </div>
      </div>
    </footer>
  );
}

export default CompanyIntro;
