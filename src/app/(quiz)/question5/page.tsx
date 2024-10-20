"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useQuizContext } from "@/contexts/QuizContext";

import AnswerButton from "@/components/AnswerButton";
import ProgressBar from "@/components/ProgressBar";

const answerArray = [
  { label: "a. Black", value: "black" },
  { label: "b. Brown", value: "brown" },
  { label: "c. Blonde", value: "blonde" },
  { label: "d. Red/Orange", value: "orange" },
  { label: "e. Silver/Grey", value: "gray" },
];

export default function Question5() {
  const { answers } = useQuizContext();
  const router = useRouter();
  const [showWarning, setShowWarning] = useState(false);

  const checkAnswers = () => {
    const { washFrequency, ...stringAnswers } = answers;

    for (const value of Object.values(stringAnswers)) {
      if (!value) return false;
    }
    if (!washFrequency[0]) return false;

    return true;
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement | MouseEvent>
  ) => {
    e.preventDefault();
    if (checkAnswers()) {
      router.push("/result");
    } else {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 3000);
    }
  };

  return (
    <main className="min-h-[100vh] flex justify-center items-center">
      <div className="lg:relative 2xl:static md:max-w-[985px] flex flex-col items-center text-black gap-8">
        <h1 className="md:w-[20ch]">What is your natural hair color(s) today?</h1>
        <div className="flex flex-wrap justify-center gap-[10px]">
          {answerArray.map((answer, i) => (
            <AnswerButton key={i} answer={answer} questionType={"hairColor"} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <Link href={"/question4"} className="text-[#677487] underline">
            Back
          </Link>
          <Link
            onClick={handleLinkClick}
            href={"/result"}
            className={`px-8 py-3 text-[16px] rounded-md  text-black bg-skyblue ${
              checkAnswers() ? "bg-skyblue" : "bg-[#cbe2ec]"
            }`}
          >
            Discover your results
          </Link>
        </div>
        <div className="absolute top-5 md:top-8 lg:top-0 lg:right-[-70px] 2xl:top-1/3 2xl:right-[120px]">
          <ProgressBar step={5}></ProgressBar>
        </div>
        <div
          className={`min-w-[240px] absolute bottom-14 md:bottom-20 lg:bottom-[-100px] 2xl:bottom-[20%] right-1/2  translate-x-1/2 p-4 bg-red-300/80 rounded-lg duration-300 ${
            showWarning
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          You haven&apos;t answered all questions!
        </div>
      </div>
    </main>
  );
}
