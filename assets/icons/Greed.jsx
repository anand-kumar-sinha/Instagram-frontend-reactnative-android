import React from "react";
import Svg, { Path } from "react-native-svg"
function Icon({color, ...props}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="186"
      height="44"
      fill="none"
      viewBox="0 0 186 44"
    >
      <Path fill={color} fillOpacity="0.01" d="M0 0H186V44H0z"></Path>
      {/* <Path stroke={color} strokeLinecap="square" d="M.5 43.5h185"></Path> */}
      <Path
        fill={color}
        fillRule="evenodd"
        d="M82 33.5h22.5V11H82v22.5zm7-1.5h-5.5v-5.5H89V32zm7-5.5h-5.5V32H96v-5.5zm1.5 0h5.5V32h-5.5v-5.5zm-8.5-7h-5.5V25H89v-5.5zm1.5 0H96V25h-5.5v-5.5zm12.5 0h-5.5V25h5.5v-5.5zm0-7V18h-5.5v-5.5h5.5zm-14 0h-5.5V18H89v-5.5zm1.5 0H96V18h-5.5v-5.5z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
}

export default Icon;