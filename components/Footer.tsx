import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-screen h-[60vh] p-5 flex flex-col md:flex-row gap-5 mt-10">
      <div className="md:w-[500px] w-full flex flex-col gap-3">
        <h1 className="font-font2 uppercase">About Us</h1>
        <p className="text-sm font-font1">
          The Knotty Ones is a conscious luxury knitwear brand celebrating the
          art of heritage craftsmanship through modern design. Born out of
          nature, pagan Lithuanian roots, and heritage knitting craft, every
          garment tells a unique story woven by the hands of female artisans. We
          are a female-founded business built on a foundation of sisterhood –
          from female leadership through the community of artisans and a loyal
          customer base obsessed with the high-craftsmanship products and the
          emotions they radiate. All garments are handmade or hand-finished,
          crafted from 100% natural, certified yarns.
        </p>
      </div>
      <div className="flex flex-col items-start gap-3 w-full md:w-[440px]">
        <h1 className="font-font2">NEWS LETTER</h1>
        <p className="font-font1 text-sm">
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your Email"
          className="border-b-[2px] border-black outline-none w-full px-2 py-1 font-font1"
        />
        <button className="border-[2px] border-black px-5 py-2 text-sm font-font2">
          SUBSCRIBE
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-font2">SOCIAL</h1>
        <ul className="flex text-2xl gap-5">
          <li>
            <FaGoogle className="cursor-pointer" />
          </li>
          <li>
            <FaFacebook className="cursor-pointer" />
          </li>
          <li>
            <FaInstagram className="cursor-pointer" />
          </li>
          <li>
            <BsTwitterX className="cursor-pointer" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
