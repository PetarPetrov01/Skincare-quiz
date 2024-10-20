"use client";

import { useState, WheelEvent } from "react";

import { useQuizContext } from "@/contexts/QuizContext";
import scoreProduct from "@/utils/scoreProducts";

import { useDebouncedCallback } from "@/hooks/useDebounce";
import useWishlist from "@/hooks/useWishlist";

import ProductCard from "./ProductCard";

import { Product } from "@/types/Product";

export default function Slider({ products }: { products: Product[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useWishlist();
  const { answers } = useQuizContext();

  const scoredProds = products.map((prod) => scoreProduct(prod, answers));
  const sortedProducts = scoredProds.sort((a, b) => {
    const isAWishListed = wishlist.includes(a.id);
    const isBWishListed = wishlist.includes(b.id);

    return isAWishListed && !isBWishListed
      ? -1
      : !isAWishListed && isBWishListed
      ? 1
      : b.score - a.score;
  });
  const filteredProducts = sortedProducts.filter(
    (p) => p.score > 0 || wishlist.includes(p.id)
  );

  const finalProds =
    filteredProducts.length > 8
      ? filteredProducts
      : sortedProducts.slice(0, 10);

  console.log(finalProds);

  const pagesCount = Math.ceil((finalProds.length + 1) / 3);

  const scrollNext = () => {
    if (currentPage < pagesCount) {
      setCurrentPage(currentPage + 1);
      const slider = document.getElementById("slider");
      if (slider) {
        slider.scrollLeft = currentPage * 1158;
      }
    }
  };

  const scrollPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      const slider = document.getElementById("slider");
      if (slider?.scrollLeft) {
        if (currentPage == 2) {
          slider.scrollLeft = 0;
        } else if (currentPage == pagesCount) {
          const leftProds = (finalProds.length + 1) % 3;
          slider.scrollLeft = slider?.scrollLeft - (leftProds || 3) * (350 + 36);
        } else {
          slider.scrollLeft = (currentPage - 2) * 1158;
        }
      }
    }
  };

  const handleScroll = (e: WheelEvent<HTMLDivElement>) => {
    const scroll = e.deltaY;
    if (scroll > 0) {
      scrollNext();
    } else if (scroll < 0) {
      scrollPrev();
    }
  };

  const delayedScrollNext = useDebouncedCallback(scrollNext, 150);
  const delayedScrollPrev = useDebouncedCallback(scrollPrev, 150);

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist((prev) => prev.filter((id) => productId != id));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  return (
    <div className="relative">
      {currentPage > 1 && pagesCount > 1 && (
        <button
          onClick={delayedScrollPrev}
          className="hidden xl:block absolute left-[-4em] top-1/2 rounded-full bg-[#EEF7FB] w-[60px] text-2xl h-[60px] text-black hover:bg-[#e5f7fe] duration-150 hover:font-medium"
        >
          &lt;
        </button>
      )}
      <div
        id="slider"
        onWheel={handleScroll}
        className=" md:w-[820px] xl:w-[1122px] scroll-smooth rounded-t-md whitespace-nowrap flex flex-col items-center justify-center md:flex-wrap xl:overflow-x-auto xl:flex-nowrap xl:items-stretch md:flex-row xl:justify-between gap-[36px] scrollbar-hide"
      >
        <div className="w-[350px] sm:w-[450px] md:w-[600px] lg:min-w-[350px] m-2 lg:m-0 xl:h-[420px] flex flex-col whitespace-normal gap-[16px] bg-[#EEF7FB] text-black rounded-xl py-[46px] px-[60px]">
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
        {finalProds.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            toggleWishlist={toggleWishlist}
            isWishlisted={wishlist.includes(product.id)}
          />
        ))}
      </div>
      {currentPage < pagesCount && (
        <button
          onClick={delayedScrollNext}
          className="hidden xl:block absolute right-[-4em] top-1/2 rounded-full bg-[#EEF7FB] w-[60px] text-2xl h-[60px] text-black hover:bg-[#e5f7fe] duration-150 hover:font-medium"
        >
          &gt;
        </button>
      )}
      <div className="hidden absolute bottom-[-2em] left-1/2 -translate-x-1/2 xl:flex justify-between items-center gap-1">
        {new Array(pagesCount).fill("").map((page, i) => (
          <i
            key={i}
            className={`w-2 h-2 rounded-full duration-200 ${
              i + 1 == currentPage ? "bg-lightblue" : "bg-[#e3e3e3]"
            }`}
          ></i>
        ))}
      </div>
    </div>
  );
}
