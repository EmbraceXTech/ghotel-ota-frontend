import React from "react";
import { Progress } from "@nextui-org/react";
import Image from "next/image";
import FilterList from "../search/FilterList";

export default function LandingProgress() {
  return (
    <div className="w-full h-fit bg-white border rounded-lg -mt-[70px] mb-[50px] shadow-md py-5 px-7">
      <FilterList />
    </div>
  );
}