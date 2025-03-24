import React from "react";

export default function CompanyInfo() {
  return (
    <div className="footer-column">
        <div className="logo">
            <img src="src/assets/Logo2.svg" alt="Nexcent Logo" />
        </div> 
      
        <div className="text-container"> 
            <p className="text-Body-3">Copyright © 2020 Nexcent Ltd.</p>
            <p className="text-Body-3">All rights reserved</p>
        </div>

        <div className="social-icons">
            <span className="icon">📷</span>
            <span className="icon">🎨</span>
            <span className="icon">🐦</span>
            <span className="icon">▶</span>
        </div>
    </div>
  );
};
