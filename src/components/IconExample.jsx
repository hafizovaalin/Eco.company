import ReactLogo from "../assets/react.svg?react";

import Icons from "../assets/Icons/Icons.js"

function IconExample() {
  return ( 
    <div>
      <img src={Icons["Down-Left"]} alt="Down-Left" width={32} height={32} />
      <img src={Icons["Down-Right"]} alt="Down-Right" width={32} height={32} />

      {/* <img src="/src/assets/Icons-16/16/Arrows-Directions/Down-Left.svg" alt="Down Left" width={32} height={32} /> */}

    </div>
    
  );
}

export default IconExample;
