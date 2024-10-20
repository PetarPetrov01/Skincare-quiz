import Image from "next/image";

import LinkToBeginning from "@/components/RedirectToStart";
import Slider from "@/components/Slider";

import { Product } from "@/types/Product";

export default async function ResultPage() {
  let products: Product[] = [];
  const res = await fetch(
    "https://jeval.com.au/collections/hair-care/products.json?page=1",
    { cache: "no-cache" }
  );
  if (!res.ok) {
    console.log(res.json());
  } else {
    products = (await res.json()).products;    
  }

  return (
    <main className="min-h-[539px] w-full flex justify-center items-center overflow-hidden">
      <div className="lg:max-w-[1500px] flex flex-col justify-center px-10">
        <div className="relative h-[539px] w-[640px] sm:w-[800px] md:w-[1222px] lg:w-[1440px]">
          <Image
            src={"/result-image.jpg"}
            alt="home-image"
            className="object-cover"
            fill={true}
          />
          <div className="absolute top-0 z-10 w-full h-full lg:overflow-hidden bg-black opacity-65"></div>
          <div className="absolute top-0 z-10 w-full h-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-[32px] opacity-100 z-20">
              <h1 className="w-[12ch] sm:w-[16ch] lg:w-[20ch]">
                Build you everyday self care routine.
              </h1>
              <p className="w-[32ch] sm:w-[45ch] lg:w-[52ch] text-center">
                Perfect for if you&apos;re looking for soft, nourished skin, our
                moisturizing body washes are made with skin-natural nutrients
                that work with your skin to replenish moisture. With a light
                formula, the bubbly lather leaves your skin feeling cleansed and
                cared for. And by choosing relaxing fragrances you can add a
                moment of calm to the end of your day.
              </p>
              <LinkToBeginning className="px-8 py-3 text-[16px] rounded-md border-2 border-white text-white">
                Retake the quiz
              </LinkToBeginning>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:top-[-60px] z-30 flex justify-center">
          <Slider products={products} />
        </div>
      </div>
    </main>
  );
}
