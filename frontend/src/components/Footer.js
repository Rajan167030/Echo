import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-section footer-brand-section">
            <h3 className="footer-brand-logo">
              <img
                src="/Echo-logo.png"
                alt="ECHO Logo"
                className="footer-logo"
                onError={(e) => { e.target.onerror = null; e.target.src = `${process.env.PUBLIC_URL}/logo192.png`; }}
              />
              ECHO
            </h3>
            <p className="footer-brand-description">
              ECHO is an AI-powered memory preservation system designed for individuals with memory challenges. Preserving precious moments while providing real-time support for both patients and caregivers.
            </p>
            <div className="footer-social-icons">
              
              <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">𝕏</a>
              <a href="https://github.com" title="GitHub" target="_blank" rel="noopener noreferrer">🐙</a>
              <a href="https://linkedin.com" title="LinkedIn" target="_blank" rel="noopener noreferrer">💼</a>
              <a href="https://discord.com" title="Discord" target="_blank" rel="noopener noreferrer">💬</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Contact Us</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <div>
                <p className="footer-contact-label">Email</p>
                <a href="mailto:hello@echo.ai" className="footer-contact-value">hello@echo.ai</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon"></span>
              <div>
                <p className="footer-contact-label"></p>
                <a href="tel:+1234567890" className="footer-contact-value"></a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Resources</h4>
            <ul className="footer-links-list">
              <li><a href="#how-it-works">How it works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#faq"></a></li>
              <li><a href="#blog"></a></li>
            </ul>
          </div>


        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">© {currentYear} ECHO. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookie-policy">Cookie Policy</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
