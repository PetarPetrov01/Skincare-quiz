"use client";

import AnswerButton from "@/components/AnswerButton";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";

const answerArray = [
  { label: "a. Anti-breakage", value: "goals_anti-frizz" },
  { label: "b. Hydration", value: "goals_hydrate" },
  { label: "c. Soothing dry scalp", value: "goals_oil" },
  {
    label: "d. Repairs the appearance of damaged hair",
    value: "goals_replenish",
  },
  { label: "e. Volume", value: "goals_volumise" },
  { label: "f. Curl and coil enhancing", value: "goals_curl" },
];

export default function Question3() {
  return (
    <main className="min-h-[100vh] flex justify-center items-center">
      <div className="relative 2xl:static max-w-[985px] flex flex-col items-center text-black gap-8">
        <h1 className="w-[20ch]">
          What benefit do you look for in your hair products?
        </h1>
        <div className="flex flex-wrap justify-center gap-[10px]">
          {answerArray.map((answer, i) => (
            <AnswerButton
              key={i}
              answer={answer}
              questionType={"desiredBenefit"}
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <Link href={"/question2"} className="text-[#677487] underline">
            Back
          </Link>
          <Link
            href={"/question4"}
            className="px-8 py-3 text-[16px] rounded-md bg-skyblue text-black"
          >
            Next question &rarr;
          </Link>
        </div>
        <div className="absolute top-0 right-[-70px] 2xl:top-1/3 2xl:right-[120px]">
          <ProgressBar step={3}></ProgressBar>
        </div>
      </div>
    </main>
  );
}
