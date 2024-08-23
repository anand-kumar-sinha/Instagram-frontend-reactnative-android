import React from "react";
import Svg, { Path } from "react-native-svg"

const  Home =({color,...props}) => {
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
        d="M47.7 20.706l-10-9.801a1 1 0 00-1.4 0l-10 9.8a1 1 0 00-.3.715V33.5l.008.09a.5.5 0 00.492.41h8a.5.5 0 00.5-.5V28l.005-.176C35.096 26.249 35.402 25 37 25l.176.005c1.458.085 1.78 1.21 1.82 2.645L39 28v5.5a.5.5 0 00.5.5h8l.09-.008A.5.5 0 0048 33.5V21.42a1 1 0 00-.3-.714zm-20.2.924L37 12.32l9.5 9.311V32.5h-6V28l-.005-.37c-.067-2.43-.953-3.99-3.232-4.122l-.22-.007c-2.492-.001-3.381 1.574-3.535 4.236l-.007.22V32.5H27.5V21.63z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
}

export default Home;
