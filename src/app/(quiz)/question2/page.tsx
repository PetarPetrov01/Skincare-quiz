"use client";

import AnswerButton from "@/components/AnswerButton";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";

const answerArray = [
  { label: "a. Daily", value: ["daily", "everyday"] },
  { label: "b. Every other day", value: ["often"] },
  { label: "c. Twice a week", value: ["regular"] },
  { label: "d. Once a week", value: ["occasionally"] },
  { label: "d. Every two weeks", value: ["rarely"] },
];

export default function Question2() {
  return (
    <main className="min-h-[100vh] flex justify-center items-center">
      <div className="relative 2xl:static max-w-[985px] flex flex-col items-center text-black gap-8">
        <h1 className="w-[20ch]">How often do you wash your hair?</h1>
        <div className="flex flex-wrap justify-center gap-[10px]">
          {answerArray.map((answer, i) => (
            <AnswerButton
              key={i}
              answer={answer}
              questionType={"washFrequency"}
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <Link href={"/question1"} className="text-[#677487] underline">
            Back
          </Link>
          <Link
            href={"/question3"}
            className="px-8 py-3 text-[16px] rounded-md bg-skyblue text-black"
          >
            Next question &rarr;
          </Link>
        </div>
        <div className="absolute top-0 right-[-70px] 2xl:top-1/3 2xl:right-[120px]">
          <ProgressBar step={2}></ProgressBar>
        </div>
      </div>
    </main>
  );
}
