import { Product } from "@/types/Product";
import Image from "next/image";

export default function ProductCard({
  product,
}: //   isWishlisted,
//   toggleWishlist,
{
  product: Product;
}) {
  return (
    <div className="w-[350px] h-[420px] flex flex-col  gap-[12px] rounded-xl text-black text-center">
      <div className="relative rounded-t-xl w-full h-full bg-[#EEF7FB]">
        <Image
          src={product.images[0].src}
          alt={product.title}
          fill={true}
          className="object-cover rounded-t-xl h-[345px] object-top"
        />
      </div>
      <div className="relative flex flex-col gap-[6px]">
        <h3 className="overflow-hidden text-ellipsis text-nowrap">
          {product.title}
        </h3>
        <span className="text-[18px]">${product.variants[0].price}</span>
      </div>
      {/* <button onClick={() => toggleWishlist(product)}>
        {isWishlisted ? "♥" : "♡"}
      </button> */}
    </div>
  );
}
