"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/Product";
import { useQuizContext } from "@/contexts/QuizContext";
import scoreProduct from "@/utils/scoreProducts";

export default function Slider({
  products,
}: //   wishlist,
//   toggleWishlist,
{
  products: Product[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const { answers } = useQuizContext();

  const scoredProds = products.map((prod) => scoreProduct(prod, answers));
  const sortedProds = scoredProds.sort((a, b) => b.score - a.score);
  const countOfNonZero = scoredProds.filter((p) => p.score > 0);
  console.log(countOfNonZero.length);
  console.log(countOfNonZero)
  // TODO: Render this array!

  const pagesCount = Math.ceil((products.length + 1) / 3);

  const startIndex = currentPage == 1 ? 0 : (currentPage - 1) * 3 - 1;
  const endIndex = currentPage == 1 ? 2 : currentPage * 3 - 1;

  const next = () => {
    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="relative flex justify-between gap-[36px]">
      {currentPage > 1 && pagesCount > 1 && (
        <button
          onClick={prev}
          className="absolute left-[-4em] top-1/2 rounded-full bg-[#EEF7FB] w-[60px] text-2xl h-[60px] text-black"
        >
          &lt;
        </button>
      )}
      {currentPage == 1 && (
        <div className="w-[350px] h-[420px] flex flex-col gap-[16px] bg-[#EEF7FB] text-black rounded-xl py-[46px] px-[60px]">
          <h3 className="text-center">Daily routine</h3>
          <p>
            Perfect for if you&apos;re looking for soft, nourished skin, our
            moisturizing body washes are made with skin-natural nutrients that
            work with your skin to replenish moisture. With a light formula, the
            bubbly lather leaves your skin feeling cleansed and cared for. And
            by choosing relaxing fragrances you can add a moment of calm to the
            end of your day.
          </p>
        </div>
      )}
      {sortedProds.slice(startIndex, endIndex).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          // isWishlisted={wishlist.includes(product.id)}
          // toggleWishlist={toggleWishlist}
        />
      ))}
      {currentPage < pagesCount && (
        <button
          onClick={next}
          className="absolute right-[-4em] top-1/2 rounded-full bg-[#EEF7FB] w-[60px] text-2xl h-[60px] text-black"
        >
          &gt;
        </button>
      )}
      <div className="absolute bottom-[-2em] left-1/2 -translate-x-1/2 flex justify-between items-center gap-1">
        {new Array(pagesCount).fill("").map((page, i) => (
          <i
            className={`w-2 h-2 rounded-full duration-200 ${
              i + 1 == currentPage ? "bg-lightblue" : "bg-[#e3e3e3]"
            }`}
          ></i>
        ))}
      </div>
    </div>
  );
}
