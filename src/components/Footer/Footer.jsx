import React from "react";
import CompanyInfo from "./Company-info";
import Links from "./Links";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
    
        <CompanyInfo />
        <Links />
      </div>
    </footer>
  );
};

export default Footer;
