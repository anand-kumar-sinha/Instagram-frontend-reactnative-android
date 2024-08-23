import React from "react";
import Svg, { Path } from "react-native-svg"


function Menu({color,...props}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 21 18"
    >
      <Path
        fill={color}
        fillRule="evenodd"
        d="M20.25 0h-19l-.102.007A.75.75 0 001.25 1.5h19l.102-.007A.75.75 0 0020.25 0zm-19 8h19a.75.75 0 01.102 1.493l-.102.007h-19a.75.75 0 01-.102-1.493L1.25 8zm0 8h19a.75.75 0 01.102 1.493l-.102.007h-19a.75.75 0 01-.102-1.493L1.25 16z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
}

export default Menu;