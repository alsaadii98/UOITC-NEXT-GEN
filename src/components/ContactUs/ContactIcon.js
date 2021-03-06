import React from "react";
import { AtSymbolIcon } from "@heroicons/react/outline";
export const ContactIcon = (props) => {
  return (
    <div className="flex items-center justify-start space-x-4">
      <div>
        <AtSymbolIcon className="w-14 p-2 bg-red-300 text-red-800 rounded-xl" />
      </div>
      <h1 className="text-xl text-main ">{props.text}</h1>
    </div>
  );
};
