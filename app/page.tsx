import React from "react";

export default function page() {
  return (
    <div className="bg-Img h-[95vh] overflow-hidden w-full flex items-center justify-center font-font1">
      <div className="w-full h-full flex items-center justify-center flex-col gap-8 text-white font-bold">
        <h1 className="text-xl w-[200px] md:w-full text-center md:text-6xl tracking-wider">
          Fall sale: 20% off all knits
        </h1>
        <button className="border-white border-[3px] text-inherit  md:text-xl px-10 py-4">
          SHOP SALE
        </button>
      </div>
    </div>
  );
}
