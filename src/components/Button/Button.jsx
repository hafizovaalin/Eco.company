// import React from "react";
// import icons from "../../assets/Icons/Icons"; // Импорт иконок
// import "../../index.css"; // Подключаем стили
// export default function Button({
//   children,
//   size = "normal",
//   variant = "Primary", // "Primary" или "Secondary"
//   bgColor = "Primary",
//   textColor = "Neutral-White",
//   borderColor = null,
//   typography = "Body-1",
//   disabled = false,
//   icon = null,
//   iconPosition = "left",
//   onClick,
// }) {
//   const buttonClasses = [
//     "button",
//     size,
//     variant, 
//     `bg-${bgColor}`,  // Фон кнопки
//     `text-${textColor}`,  // Цвет текста
//     borderColor ? `border-${borderColor}` : "",  // Цвет рамки
//     typography, 
//     icon ? `icon-${iconPosition}` : "",
//     disabled ? "disabled" : "",
//   ].join(" ");

//   return (
//     <button className={buttonClasses} onClick={onClick} disabled={disabled}>
//       {icon && <img src={icons[icon]} alt="" className="icon" />}
//       {children}
//     </button>
//   );
// }



import React from "react";
import "./button.css";

const Button = ({ variant = "Primary", size = "normal", icon, disabled, children }) => {
  const className = `button ${variant} ${size} ${icon ? `icon-${icon}` : ""} ${disabled ? "disabled" : ""}`;
  
  return (
    <button className={className} disabled={disabled}>
      {icon === "left" && <span className="icon">🔍</span>}  
      {children}
      {icon === "right" && <span className="icon">🔍</span>}
    </button>
  );
};

export default Button;
