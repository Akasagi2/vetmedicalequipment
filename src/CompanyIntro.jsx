import React from "react";
import "./CompanyIntro.css";

function CompanyIntro() {
  return (
    <footer className="company-footer" id="lien-he">
      <div className="footer-container">
        <div className="footer-section footer-about" id="ve-chung-toi">
          <img src="/images/logo.png" className="footer-logo" alt="IPP Vet" />
          <p className="footer-description">
            IPP Vet cung cấp giải pháp thiết bị chẩn đoán thú y chuyên nghiệp:
            X-quang, CT, máy xét nghiệm và các hệ thống hỗ trợ phòng khám, bệnh
            viện thú y trên toàn quốc.
          </p>
        </div>

        <div className="footer-section footer-contact">
          <h4 className="footer-title">Liên hệ</h4>
          <p className="footer-text">
            <span>Điện thoại: </span>
            <a href="tel:0768902066" className="footer-link">
              0768 902 066
            </a>
          </p>
          <p className="footer-text">
            <span>Email: </span>
            <a href="mailto:viet.luong@ippcro.com" className="footer-link">
              viet.luong@ippcro.com
            </a>
          </p>
          <p className="footer-text">
            Địa chỉ: 27 Hàng Bài, Hoàn Kiếm, Hà Nội
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Sản phẩm</h4>
          <a href="#san-pham" className="footer-link">
            Máy xét nghiệm
          </a>
          <a href="#san-pham" className="footer-link">
            Máy X-quang, CT thú y
          </a>
          <a href="#san-pham" className="footer-link">
            Thiết bị phòng khám
          </a>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Về chúng tôi</h4>
          <a href="#ve-chung-toi" className="footer-link">
            Giới thiệu
          </a>
          <a href="#lien-he" className="footer-link">
            Liên hệ
          </a>
          <a href="#san-pham" className="footer-link">
            Sản phẩm
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} IPP Vet. All rights reserved.
      </div>
    </footer>
  );
}

export default CompanyIntro;

