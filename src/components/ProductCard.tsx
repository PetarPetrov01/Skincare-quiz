import { Product } from "@/types/Product";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";

export default function ProductCard({
  product,
  isWishlisted,
  toggleWishlist,
}: {
  product: Product;
  isWishlisted: boolean;
  toggleWishlist: (productId: number) => void;
}) {
  return (
    <div className="relative w-[350px] h-[420px] flex flex-col  gap-[12px] rounded-xl text-black text-center">
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
      <button
        onClick={() => toggleWishlist(product.id)}
        className="absolute top-4 right-4 text-lg"
      >
        {isWishlisted ? (
          <HeartIcon width={30} height={30} />
        ) : (
          <HeartIconOutline width={30} height={30} className="text-gray-500 hover:text-black duration-200"/>
        )}
      </button>
    </div>
  );
}
