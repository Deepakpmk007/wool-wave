"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="w-full h-[10vh] md:flex justify-between items-center px-10 font-semibold fixed bg-[#f2e9e4]  z-20 font-font2 hidden">
        <div className="flex">
          <ul className="flex gap-4">
            <li className="cursor-pointer">SHOP</li>
            <li className="cursor-pointer">PRELOVED</li>
            <li className="cursor-pointer">EXPLORE</li>
          </ul>
        </div>
        <div className="text-4xl italic font-font1">WOOL & WAVE</div>
        <div className="flex">
          <ul className="flex gap-4 items-center">
            <li className="cursor-pointer">FALL SALE</li>
            <li className="flex gap-2 text-xl">
              <CiSearch className="cursor-pointer" />
              <CiHeart className="cursor-pointer" />
              <CiShoppingCart className="cursor-pointer" />
            </li>
            <li className="cursor-pointer">IND</li>
          </ul>
        </div>
      </nav>
      <nav className="md:hidden lg:hidden flex flex-col px-5 fixed bg-[#f2e9e4] w-full z-20">
        <div className="flex justify-between">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <RiMenu2Fill className="text-2xl cursor-pointer" />
          </button>
          <div className="text-2xl italic font-font1 h-[10vh] flex items-center justify-center pr-5">
            WOOL & WAVE
          </div>
        </div>
        {isOpen && (
          <div className="w-screen h-[90vh] bg-[#f2e9e4] top-[10vh] right-0 left-0 z-20 flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <h1 className="font-font-2 text-xl">Feature</h1>
              <ul className="font-font1">
                <li className="cursor-pointer">NEW ARRIVALS</li>
                <li className="cursor-pointer">Best sellers</li>
                <li className="cursor-pointer">Handmade Pieces</li>
                <li className="cursor-pointer">SHOP ALL</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-font-2 text-xl">By category</h1>
              <ul className="font-font1">
                <li className="cursor-pointer">SWEATERS</li>
                <li className="cursor-pointer">DRESSES</li>
                <li className="cursor-pointer">TOPS</li>
                <li className="cursor-pointer">BOTTOMS</li>
                <li className="cursor-pointer">ACCESSORIES</li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
300;
