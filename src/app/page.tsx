import Image from "next/image";

import LinkToBeginning from "@/components/RedirectToStart";

export default function Home() {
  return (
    <main className="min-h-[526px] w-full flex justify-center items-center">
      <div className="max-w-[1500px] flex justify-center px-10">
        <div className="absolute top-0 z-0 h-[526px] w-[1440px] overflow-hidden bg-black">
          <Image
            src={"/home-image.jpg"}
            alt="home-image"
            className="object-cover opacity-65"
            fill={true}
          />
        </div>
        <div className="flex flex-col justify-between w-full h-full items-center gap-[25px] z-10">
          <div className="flex flex-col justify-between gap-[16px] items-center">
            <h1 className="md:w-[20ch]">
              Build a self care routine suitable for you
            </h1>
            <p className="w-[30ch] text-center">
              Take out test to get a personalised self care routine based on
              your needs.
            </p>
          </div>
          <LinkToBeginning className="px-8 py-3 text-[16px] rounded-md bg-skyblue text-black">
            Start the quiz
          </LinkToBeginning>
        </div>
      </div>
    </main>
  );
}
