import React from "react";
import Svg, { Path, Rect } from "react-native-svg"
function Reels({color, ...props}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={color}
        d="M15.24 14.327a.546.546 0 010 .93L9.78 18.51c-.347.206-.78-.052-.78-.465v-6.508c0-.414.433-.672.78-.465l5.46 3.254z"
      ></Path>
      <Path stroke={color} strokeWidth="1.8" d="M6 2l4 6M13 2l4 6"></Path>
      <Rect
        width="20.2"
        height="20.2"
        x="1.9"
        y="1.9"
        stroke={color}
        strokeWidth="1.8"
        rx="5.1"
      ></Rect>
      <Path stroke={color} strokeWidth="1.8" d="M2 8h20"></Path>
    </Svg>
  );
}

export default Reels;