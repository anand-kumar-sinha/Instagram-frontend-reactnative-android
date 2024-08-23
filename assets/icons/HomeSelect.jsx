import React from "react";
import Svg, { Path } from "react-native-svg"
function HomeSelect({color,...props}) {
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
        d="M37.7 10.905l10 9.8a1 1 0 01.3.715V33.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5V28a3 3 0 00-2.824-2.995L37 25a3 3 0 00-2.995 2.824L34 28v5.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.492-.41L26 33.5V21.42a1 1 0 01.3-.714l10-9.801a1 1 0 011.4 0z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
}

export default HomeSelect;