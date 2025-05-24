import { dynamicBlurDataUrl } from "@/utils/blurData";
import Image from "next/image";
import React from "react";

export default async function Sales() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen p-5 border-b-[2px] border-b-black">
      <div className="w-[50%] relative">
        <Image
          src="https://www.theknottyones.com/cdn/shop/files/DELCIA_LEMON_1_-_VIDEO_1080_x_1080_px_938x.jpg?v=1747395159"
          alt="sale image"
          fill
          placeholder="blur"
          blurDataURL={await dynamicBlurDataUrl(
            "https://www.theknottyones.com/cdn/shop/files/DELCIA_LEMON_1_-_VIDEO_1080_x_1080_px_938x.jpg?v=1747395159"
          )}
        />
      </div>
      <div className=" h-full flex flex-col items-center justify-between py-32 w-[50vw]">
        <h1 className="text-2xl font-bold font-font2">
          TAKE 25% OFF SUMMER BEST SELLER
        </h1>
        <div className="flex flex-col items-center gap-5">
          {" "}
          <p className="w-[400px] text-center text-xl tracking-wider font-light font-font1">
            You’ve been waiting, we’ve been knitting. Delčia Sweater in Lemon is
            finally here, and as a thank-you for your patience, she’s 25% off
            for a limited time.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}
