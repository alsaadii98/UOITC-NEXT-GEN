import React from "react";
import { CircleGrid } from "react-awesome-shapes";
const Shape = () => {
  return (
    <div>
      <div className="hidden lg:flex  items-center space-x-3">
        <CircleGrid position="relative" color="#F4F4F4" size="120px" />
        <CircleGrid position="relative" color="#F4F4F4" size="120px" />
      </div>
    </div>
  );
};

export default Shape;

