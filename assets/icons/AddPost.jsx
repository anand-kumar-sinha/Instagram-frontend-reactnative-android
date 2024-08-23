import React from "react";
import Svg, { Path } from "react-native-svg"
function Tab3({color, ...pros}) {
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
        d="M42 10.25A6.75 6.75 0 0148.75 17v10A6.75 6.75 0 0142 33.75H32A6.75 6.75 0 0125.25 27V17A6.75 6.75 0 0132 10.25h10zm0 1.5H32A5.25 5.25 0 0026.75 17v10c0 2.9 2.35 5.25 5.25 5.25h10c2.9 0 5.25-2.35 5.25-5.25V17c0-2.9-2.35-5.25-5.25-5.25zm-4.257 4.148A.75.75 0 0037 15.25l-.102.007-.097.02a.75.75 0 00-.551.723v5.249L31 21.25l-.102.007a.75.75 0 00-.648.743l.007.102a.75.75 0 00.743.648l5.25-.001V28l.007.102a.75.75 0 00.743.648l.102-.007A.75.75 0 0037.75 28v-5.25H43l.102-.007A.75.75 0 0043.75 22l-.007-.102A.75.75 0 0043 21.25h-5.25V16l-.007-.102z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
}

export default Tab3;