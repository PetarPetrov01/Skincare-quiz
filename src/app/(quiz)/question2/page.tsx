"use client";

import AnswerButton from "@/components/AnswerButton";
import { useQuizContext } from "@/contexts/QuizContext";
import Link from "next/link";

const answerArray = [
  { label: "a. Daily", value: "daily" },
  { label: "b. Every other day", value: "often" },
  { label: "c. Twice a week", value: "regularly" },
  { label: "d. Once a week", value: "occasionally" },
  { label: "d. Every two weeks", value: "rarely" },
];

export default function Question2() {
  const { answers, updateAnswer } = useQuizContext();

  return (
    <main className="min-h-[100vh] flex justify-center items-center">
      <div className="max-w-[985px] flex flex-col items-center text-black gap-8">
        <h1 className="w-[20ch]">How often do you wash your hair?</h1>
        <div className="flex flex-wrap justify-center gap-[10px]">
          {answerArray.map((answer, i) => (
            <AnswerButton key={i} answer={answer} isActive={answers.washFrequency == answer.value} />
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
      </div>
    </main>
  );
}
