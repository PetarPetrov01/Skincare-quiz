"use client";

import AnswerButton from "@/components/AnswerButton";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";

const answerArray = [
  { label: "a. Straight", value: "type_straight" },
  { label: "b. Curly", value: "type_curly" },
  { label: "c. Wavy", value: "type_wavy" },
  { label: "d. Fine", value: "type_fine" },
];

export default function Question1() {
  return (
    <main className="min-h-[100vh] flex justify-center items-center">
      <div className="max-w-[985px] flex flex-col items-center text-black gap-8">
        <h1 className="w-[20ch]">What&apos;s your hair type or texture?</h1>
        <div className="flex flex-wrap justify-center gap-[10px]">
          {answerArray.map((answer, i) => (
            <AnswerButton key={i} answer={answer} questionType={"hairType"} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <Link href={"/"} className="text-[#677487] underline">
            Back
          </Link>
          <Link
            href={"/question2"}
            className="px-8 py-3 text-[16px] rounded-md bg-skyblue text-black"
          >
            Next question &rarr;
          </Link>
        </div>
        <div className="absolute top-1/3 right-[120px]">
          <ProgressBar step={1}></ProgressBar>
        </div>
      </div>
    </main>
  );
}
