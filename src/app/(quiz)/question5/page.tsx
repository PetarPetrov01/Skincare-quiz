"use client";

import AnswerButton from "@/components/AnswerButton";
import { useQuizContext } from "@/contexts/QuizContext";
import Link from "next/link";

const answerArray = [
  { label: "a. Black", value: "black" },
  { label: "b. Brown", value: "brown" },
  { label: "c. Blonde", value: "blonde" },
  { label: "d. Red/Orange", value: "red/orange" },
  { label: "e. Silver/Grey", value: "silver/gray" },
];

export default function Question5() {
  const { answers } = useQuizContext();

  return (
    <main className="min-h-[100vh] flex justify-center items-center">
      <div className="max-w-[985px] flex flex-col items-center text-black gap-8">
        <h1 className="w-[20ch]">What is your natural hair color(s) today?</h1>
        <div className="flex flex-wrap justify-center gap-[10px]">
          {answerArray.map((answer, i) => (
            <AnswerButton
              key={i}
              answer={answer}
              isActive={answers.hairColor == answer.value}
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <Link href={"/question4"} className="text-[#677487] underline">
            Back
          </Link>
          <Link
            href={"/result"}
            className="px-8 py-3 text-[16px] rounded-md bg-skyblue text-black"
          >
            Discover your results
          </Link>
        </div>
      </div>
    </main>
  );
}
