import React from "react";
import HeaderLeftBg from "../Icons/HeaderLeftBg";
import HeaderRightBg from "../Icons/HeaderRightBg";

export default function LandingHeader() {
  return (
    <div className="bg-brand w-full h-[200px] flex items-center flex-col pt-10 relative -z-10">
      <HeaderLeftBg />
      <HeaderRightBg />
    </div>
  );
}