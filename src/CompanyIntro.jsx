import React from "react";
import "./CompanyIntro.css"; // import CSS riêng

function CompanyIntro() {
  return (
    <footer className="company-footer">
      <div className="footer-container">
        {/* Logo và giới thiệu */}
        <div className="footer-section">
          <img src="/images/logo.png" className="footer-logo" alt="logo" />
          <h3 className="footer-description">
            Công ty chúng tôi chuyên cung cấp thiết bị y tế thú y toàn quốc. Cam kết chất lượng và hỗ trợ tận tâm.
          </h3>
        </div>

        {/* Liên hệ */}
        <div className="footer-section">
          <h4 className="footer-title">Liên hệ</h4>
          <p className="footer-text">📞 0768 902 066</p>
          <p className="footer-text">📧 viet.luong@ippcro.com</p>
          <p className="footer-text">📍 27 Hàng Bài, Hoàn Kiếm, Hà Nội</p>
        </div>

        {/* Sản phẩm */}
        <div className="footer-section">
          <h4 className="footer-title">Sản phẩm</h4>
          <p className="footer-text">Máy xét nghiệm</p>
          <p className="footer-text">Máy siêu âm và X-quang</p>
          <p className="footer-text">Thiết bị ngoại khoa</p>
          <p className="footer-text">Thiết bị nội khoa</p>
        </div>

        {/* Về chúng tôi */}
        <div className="footer-section">
          <h4 className="footer-title">Về chúng tôi</h4>
          <p className="footer-text">Giới thiệu</p>
          <p className="footer-text">Tuyển dụng</p>
          <p className="footer-text">Chính sách bảo hành</p>
        </div>
      </div>
    </footer>
  );
}

export default CompanyIntro;
