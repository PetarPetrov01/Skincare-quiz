import { useQuizContext } from "@/contexts/QuizContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AnswerButton from "./AnswerButton";
import Link from "next/link";
import { AnswersArray, QuestionType } from "@/types/Quiz";
import ProgressBar from "./ProgressBar";

export default function FinalQuestion({
  answersArray,
  question,
}: {
  answersArray: AnswersArray;
  question: QuestionType;
}) {
  const { answers } = useQuizContext();
  const router = useRouter();
  const [showWarning, setShowWarning] = useState(false);
  const [areAllAnswered, setAreAllAnswered] = useState(false);

  useEffect(() => {
    for (const value of Object.values(answers)) {
      if (typeof value == "string") {
        if (!value) return setAreAllAnswered(false);
      } else {
        if (!value[0]) return setAreAllAnswered(false);
      }
    }

    setAreAllAnswered(true);
  }, [answers]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement | MouseEvent>
  ) => {
    e.preventDefault();
    if (areAllAnswered) {
      router.push("/result");
    } else {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 3000);
    }
  };

  return (
    <>
      <h1 className="md:w-[20ch]">{question.label}</h1>
      <div className="flex flex-wrap justify-center gap-[10px]">
        {answersArray.map((answer, i) => (
          <AnswerButton key={i} answer={answer} questionType={question.type} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-[20px]">
        <Link
          href={"/quiz/4"}
          className="text-[#677487] hover:text-gray-800 duration-150 underline"
        >
          Back
        </Link>
        <Link
          onClick={handleLinkClick}
          href={"/result"}
          className={`px-8 py-3 text-[16px] rounded-md duration-150 text-black ${
            areAllAnswered
              ? "bg-skyblue hover:bg-[#aee7ff] hover:scale-[1.03]"
              : "bg-[#cedee4]"
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
    </>
  );
}
