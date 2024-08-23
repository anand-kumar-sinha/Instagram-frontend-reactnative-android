import React from "react";
import Svg, { Path } from "react-native-svg"
function SearchSelect({color,...props}) {
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
        d="M44.691 19.819c0-5.424-4.409-9.819-9.845-9.819C29.409 10 25 14.395 25 19.819c0 5.424 4.409 9.819 9.846 9.819a9.824 9.824 0 005.673-1.793l5.491 5.462a.501.501 0 00.707-.002l1.59-1.595a.5.5 0 00.003-.703l-5.42-5.525a9.762 9.762 0 001.801-5.663zm-16.141.031a6.3 6.3 0 1112.6 0 6.3 6.3 0 01-12.6 0z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
}

export default SearchSelect;