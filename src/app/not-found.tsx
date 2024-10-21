import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative bg-skyblue h-[100vh] flex justify-center items-center">
      <div className="absolute left-[-150px] min-h-[350px] min-w-[350px] z-0 animate-slide">
        <div className="absolute w-full h-full animate-float">
          <Image
            src={"/ghost.webp"}
            fill={true}
            alt="ghost-image"
            className="rotate-[30deg]"
          />
        </div>
      </div>
      <div className="flex flex-col text-black justify-center items-center gap-6 z-10">
        <h1 className="text-[90px] h-full mb-4">404</h1>
        <h3>Not found</h3>
        <p>Could not find the requested resource</p>
        <Link
          href={"/"}
          className="bg-white px-4 py-2 hover:scale-[1.03] duration-150 rounded-md"
        >
          Get back home
        </Link>
      </div>
    </main>
  );
}
