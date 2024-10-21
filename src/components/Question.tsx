"use client";

import { AnswersArray, QuestionType } from "@/types/Quiz";
import AnswerButton from "./AnswerButton";
import Link from "next/link";
import ProgressBar from "./ProgressBar";
import FinalQuestion from "./FinalQuestion";
import { useQuizContext } from "@/contexts/QuizContext";

export default function Question({
  answersArray,
  question,
}: {
  answersArray: AnswersArray;
  question: QuestionType;
}) {
  const {answers} =useQuizContext()
  console.log(answers);
  const prevQuestionUrl =
    question.number == 1 ? "/" : `/quiz/${question.number - 1}`;
  const nextQuestionUrl = `/quiz/${question.number + 1}`;

  return question.number == 5 ? (
    <FinalQuestion answersArray={answersArray} question={question} />
  ) : (
    <>
      <h1 className="md:w-[20ch]">{question.label}</h1>
      <div className="flex flex-wrap justify-center gap-[10px]">
        {answersArray.map((answer, i) => (
          <AnswerButton key={i} answer={answer} questionType={question.type} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-[20px]">
        <Link href={prevQuestionUrl} className="text-[#677487] hover:text-gray-800 duration-150 underline">
          Back
        </Link>
        <Link
          href={nextQuestionUrl}
          className="px-8 py-3 text-[16px] rounded-md hover:bg-[#aee7ff] hover:scale-[1.03] duration-150 bg-skyblue text-black"
        >
          Next question &rarr;
        </Link>
      </div>
      <div className="absolute top-5 md:top-8 lg:top-0 lg:right-[-70px] 2xl:top-1/3 2xl:right-[120px]">
        <ProgressBar step={question.number}></ProgressBar>
      </div>
    </>
  );
}
