import { dynamicBlurDataUrl } from "@/utils/blurData";
import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";

type productData = {
  name: string;
  url: string;
  price: number;
  color: string[];
};

export default async function ProductComponents({
  name,
  url,
  price,
  color,
}: productData) {
  return (
    <div className="w-full h-full flex items-center justify-center gap-5 flex-col">
      <div className="h-[400px] md:h-[600px] w-full relative bg-cover z-0">
        <Image
          fill
          src={url}
          alt="image"
          placeholder="blur"
          blurDataURL={await dynamicBlurDataUrl(url)}
          className="z-0"
        />
        <CiHeart className="absolute right-5 top-5 text-3xl text-white cursor-pointer" />
      </div>
      <div className="flex flex-col gap-2 items-center p-5">
        <h4 className="text-2xl font-light uppercase font-font1">{name}</h4>
        <h3 className="font-bold font-font2 text-gray-600">₹{price}</h3>
        <div className="rounded-[50%] flex gap-2 w-full justify-center">
          {color.map((el, idx) => (
            <span
              key={idx}
              className="h-[25px] w-[25px] inline-block rounded-full mr-1 cursor-pointer"
              style={{ backgroundColor: el }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
