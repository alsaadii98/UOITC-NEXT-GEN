import React from "react";
import { Circle } from "react-awesome-shapes";
const Shape2 = () => {
  return (
    <div>
      <div className="hidden lg:flex  items-center space-x-3">
        <Circle
          color="linear-gradient(to right, rgb(219, 234, 254), rgb(147, 197, 253), rgb(59, 130, 246))"
          size={["80px", "80px", "110px", "110px"]}
        />
      </div>
    </div>
  );
};

export default Shape2;
