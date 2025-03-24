import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src="src/assets/Logo.svg" alt="Nexcent Logo" />
      </div>

      {/* Бургер-кнопка */}
      <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Навигация */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Feature</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Testimonial</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
        <div className="header-buttons">
          <a href="#" className="login">Login</a>
          <button className="sign-up">Sign up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <img src="src/assets/Logo.svg" alt="Nexcent Logo" />
//       </div>
//       <nav className="nav">
//   <a href="#" className="text-Neutral-Black Body-2">Home</a>
//   <a href="#" className="text-Neutral-Black Body-2">Service</a>
//   <a href="#" className="text-Neutral-Black Body-2">Feature</a>
//   <a href="#" className="text-Neutral-Black Body-2">Product</a>
//   <a href="#" className="text-Neutral-Black Body-2">Testimonial</a>
//   <a href="#" className="text-Neutral-Black Body-2">FAQ</a>
// </nav>

// <div className="auth">
//   <a href="#" className="text-Primary Body-2">Login</a>
//   <button className="button Primary normal">Sign up</button>
// </div>

//     </header>
//   );
// };

// export default Header;
