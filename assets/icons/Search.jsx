import React from "react";
import Svg, { Path } from "react-native-svg"
function Search({color,...props}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="50"
      fill="none"
      viewBox="0 0 75 50"
    >
      <Path fill={color} fillOpacity="0.01" d="M0 0H75V50H0z"></Path>
      <Path
        fill={color}
        fillRule="evenodd"
        d="M44.75 20c0-5.385-4.365-9.75-9.75-9.75s-9.75 4.365-9.75 9.75 4.365 9.75 9.75 9.75a9.712 9.712 0 006.344-2.346l5.99 5.99.084.073a.75.75 0 00.976-1.133l-5.99-5.99A9.712 9.712 0 0044.75 20zm-18 0a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
}

export default Search;