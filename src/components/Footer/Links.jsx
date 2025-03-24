import React from "react";
import "./Footer.css";

export default function Links() {  
    return (
        <div className="links-container">
            <div className="footer-column-1">
                <h3 className="Headline-4footer-title-1">Company</h3>
                <ul className="footer-list">
                    <li>About us</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                </ul>
            </div>

            <div className="footer-column-1">
                <h3 className="Headline-4 footer-title-1">Support</h3>
                <ul className="footer-list">
                    <li>Help center</li>
                    <li>Terms of service</li>
                    <li>Legal</li>
                    <li>Privacy policy</li>
                    <li>Status</li>
                </ul>
            </div>

            <div className="footer-column-1">
                <h3 className="Headline-4 footer-title-1">Stay up to date</h3>
                <div className="footer-input-container">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="footer-input"
                    />
                    <button className="footer-button">
                        <img src="src/assets/Icons/User-Interface/Send.svg" alt="Send" />
                    </button>
                </div>
            </div>
        </div>
    )
}
