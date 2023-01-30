import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({ color }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4.5 9V21H19.5V9L12 3L4.5 9Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.5 14.5V21H14.5V14.5H9.5Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default HomeIcon;
