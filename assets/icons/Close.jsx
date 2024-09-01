import React from "react";
import Svg, { Path } from "react-native-svg"

function Close({color, ...props}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 19 19"
    >
      <Path
        fill={color}
        d="M1.147 1.304l.073-.084a.75.75 0 01.976-.073l.084.073L9.881 8.82l7.602-7.601a.75.75 0 011.06 1.06l-7.601 7.601 7.602 7.602a.75.75 0 01.072.977l-.072.084a.75.75 0 01-.977.072l-.084-.072-7.602-7.602-7.6 7.602a.75.75 0 11-1.061-1.06L8.82 9.88l-7.601-7.6a.75.75 0 01-.073-.977l.073-.084-.073.084z"
      ></Path>
      <Path
        stroke="#000"
        strokeOpacity="0.2"
        strokeWidth="0.2"
        d="M1.071 1.238h0l-.004.006a.85.85 0 00.082 1.107h0l7.53 7.53-7.53 7.531a.85.85 0 001.202 1.203l-.07-.071.07.07 7.53-7.53 7.531 7.53h0l.006.005.084.073h0l.006.005a.85.85 0 001.107-.082h0l.005-.006.072-.084h0l.005-.006a.85.85 0 00-.082-1.107l-7.532-7.531 7.531-7.53-.07-.07.07.07a.85.85 0 00-1.202-1.202l-7.531 7.53-7.53-7.53h0l-.005-.005-.084-.073h0l-.006-.004a.85.85 0 00-1.107.082h0l-.005.005-.073.084z"
      ></Path>
    </Svg>
  );
}

export default Close;