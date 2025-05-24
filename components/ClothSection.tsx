import React from "react";
import ProductComponents from "./ProductComponents";

type productData = {
  name: string;
  url: string;
  price: number;
  color: string[];
};

const data: productData[] = [
  {
    name: "Handmade Merino Wool Dress",
    url: "https://www.theknottyones.com/cdn/shop/files/egle-midnight-blue-wool-dress-612320_996x1100.jpg?v=1744621009",
    price: 19.99,
    color: ["#bde0fe", "#ffafcc", "#ffc8dd"],
  },
  {
    name: "Organic Cotton Sweater",
    url: "https://www.theknottyones.com/cdn/shop/files/delcia-lilac-cotton-sweater-shorts-set-448960_996x1100.jpg?v=1747667627",
    price: 250,
    color: ["#ffd6ff", "#e7c6ff", "#c77dff"],
  },
  {
    name: "Organic Cotton Sweater",
    url: "https://www.theknottyones.com/cdn/shop/files/delcia-orange-cotton-sweater-925466_996x1100.jpg?v=1747667597",
    price: 259,
    color: ["#f4a261", "#e76f51"],
  },
  {
    name: "Silk & mohair cropped cardigan",
    url: "https://www.theknottyones.com/cdn/shop/products/delcia-off-white-cotton-sweater-shorts-set-392026_996x1100.jpg?v=1745962155",
    price: 259,
    color: ["#fefae0", "#faedcd"],
  },
  {
    name: "Organic Cotton Sweater",
    url: "https://www.theknottyones.com/cdn/shop/files/skraistas-lilac-silk-mohair-cropped-cardigan-631540_996x1100.jpg?v=1745506872",
    price: 179,
    color: ["#ffd6ff", "#e7c6ff", "#c77dff"],
  },
  {
    name: "Handmade Silk & mohair sweater",
    url: "https://www.theknottyones.com/cdn/shop/files/jura-dew-silk-mohair-sweater-781866_996x1100.jpg?v=1744620938",
    price: 259,
    color: ["#bde0fe", "#ffafcc", "#ffc8dd"],
  },
  {
    name: "Handmade Crochet Bag",
    url: "https://www.theknottyones.com/cdn/shop/files/sietas-crochet-bag-609584_996x1100.jpg?v=1745941984",
    price: 259,
    color: ["#2b2d42"],
  },
  {
    name: "Handmade Cotton Mini Dress",
    url: "https://www.theknottyones.com/cdn/shop/files/vasara-black-mini-dress-421959_996x1100.jpg?v=1745567073",
    price: 259,
    color: ["#2b2d42", "#343a40"],
  },
  {
    name: "Handmade Cotton Jacket",
    url: "https://www.theknottyones.com/cdn/shop/products/prietema-oat-milk-crochet-cotton-jacket-350046_996x1100.jpg?v=1744621096",
    price: 259,
    color: ["#fefae0", "#faedcd"],
  },
  {
    name: "Merino Wool Hoodie",
    url: "https://www.theknottyones.com/cdn/shop/files/5_8be98018-f8c1-4615-855a-c12825bbbfe7_530x654.png?v=1742905429",
    price: 259,
    color: ["#ffd6ff", "#e7c6ff", "#c77dff"],
  },
  {
    name: "Organic Cotton Sweater",
    url: "https://www.theknottyones.com/cdn/shop/products/delcia-black-cotton-sweater-shorts-set-443119_996x1100.jpg?v=1744620942",
    price: 259,
    color: ["#2b2d42", "#343a40"],
  },
  {
    name: "Organic Cotton Sweater & Shorts Set",
    url: "https://www.theknottyones.com/cdn/shop/files/delcia-off-white-cotton-sweater-shorts-set-727299_996x1100.jpg?v=1745962155",
    price: 259,
    color: ["#fefae0", "#faedcd"],
  },
];

export default function ClothSection() {
  return (
    <section className="border-b-[2px] border-b-black">
      {/* <div>Auth scroll</div> */}
      <div className="grid md:grid-cols-3 md:grid-rows-4 p-10 gap-5">
        {data.map((el, i) => (
          <ProductComponents
            name={el.name}
            url={el.url}
            price={el.price}
            color={el.color}
            key={i}
          />
        ))}
      </div>
      <div className="ww-full flex items-center justify-center pb-10">
        <button>SEE ALL KNITS</button>
      </div>
    </section>
  );
}
