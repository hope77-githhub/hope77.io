import React from 'react';

export default function AppFooter() {
  return (
    <footer className="app-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-contacts">
          <span>
            <i className="fas fa-envelope" style={{ color: 'var(--color-primary)', marginRight: '6px' }}></i>
            bijabi99@gmail.com
          </span>
          <a
            href="https://github.com/hope77-githhub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" style={{ color: 'var(--color-primary)', marginRight: '6px' }}></i>
            github.com/hope77-githhub
          </a>
        </div>
        <div className="meta-label">
          &copy; 2026 장자훈 (HOPE77). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
