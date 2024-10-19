"use client";

import AnswerButton from "@/components/AnswerButton";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";

const answerArray = [
  { label: "a. Breakage", value: "goals_anti-ageing" },
  { label: "b. Frizz", value: "type_frizzy" },
  { label: "c. Scalp dryness", value: "type_dry" },
  { label: "d. Damage", value: "goals_replenish" },
  { label: "e. Tangling", value: "goals_straighten" },
];

export default function Question4() {
  return (
    <main className="min-h-[100vh] flex justify-center items-center">
      <div className="max-w-[985px] flex flex-col items-center text-black gap-8">
        <h1 className="w-[20ch]">
          Is there anything troubling you about your hair?
        </h1>
        <div className="flex flex-wrap justify-center gap-[10px]">
          {answerArray.map((answer, i) => (
            <AnswerButton
              key={i}
              answer={answer}
              questionType="hairConcern"
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <Link href={"/question3"} className="text-[#677487] underline">
            Back
          </Link>
          <Link
            href={"/question5"}
            className="px-8 py-3 text-[16px] rounded-md bg-skyblue text-black"
          >
            Next question &rarr;
          </Link>
        </div>
        <div className="absolute top-1/3 right-[120px]">
          <ProgressBar step={4}></ProgressBar>
        </div>
      </div>
    </main>
  );
}
