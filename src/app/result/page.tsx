import Slider from "@/components/Slider";
import { Product } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";

export default async function ResultPage() {
    let products: Product[] = [];
    const res = await fetch('https://jeval.com.au/collections/hair-care/products.json?page=1')
    if (!res.ok){
        console.log(res.json());
    } else {
        products = (await res.json()).products
    }

  return (
    <main className="min-h-[539px] w-full flex justify-center items-center">
      <div className="max-w-[1500px] flex flex-col justify-center px-10">
        <div className="relative h-[539px] w-[1440px]">
          <Image
            src={"/result-image.jpg"}
            alt="home-image"
            className="object-cover"
            fill={true}
          />
          <div className="absolute top-0 z-10 w-full h-full overflow-hidden bg-black opacity-65"></div>
          <div className="absolute top-0 z-10 w-full h-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-[32px] opacity-100 z-20">
              <h1 className="w-[20ch]">
                Build you everyday self care routine.
              </h1>
              <p className="w-[52ch] text-center">
                Perfect for if you&apos;re looking for soft, nourished skin, our
                moisturizing body washes are made with skin-natural nutrients
                that work with your skin to replenish moisture. With a light
                formula, the bubbly lather leaves your skin feeling cleansed and
                cared for. And by choosing relaxing fragrances you can add a
                moment of calm to the end of your day.
              </p>
              <Link
                href={"/question1"}
                className="px-8 py-3 text-[16px] rounded-md border-2 border-white text-white"
              >
                Retake the quiz
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full top-[-60px] z-30 flex justify-center">
          {/* <div className="flex justify-between gap-[36px]">
            <div className="w-[350px] h-[420px] flex flex-col gap-[16px] bg-[#EEF7FB] text-black rounded-xl py-[46px] px-[60px]">
              <h3 className="text-center">Daily routine</h3>
              <p>
                Perfect for if you&apos;re looking for soft, nourished skin, our
                moisturizing body washes are made with skin-natural nutrients
                that work with your skin to replenish moisture. With a light
                formula, the bubbly lather leaves your skin feeling cleansed and
                cared for. And by choosing relaxing fragrances you can add a
                moment of calm to the end of your day.
              </p>
            </div>
            <div className="w-[350px] h-[420px] bg-slate-200 rounded-xl"></div>
            <div className="w-[350px] h-[420px] bg-slate-200 rounded-xl"></div>
          </div> */}
          <Slider products={products}/>
        </div>
      </div>
    </main>
  );
}
