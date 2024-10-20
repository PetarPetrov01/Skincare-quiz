import { useQuizContext } from "@/contexts/QuizContext";

import { QuizState } from "@/types/Quiz";

export default function AnswerButton({
  answer,
  questionType,
}: {
  answer: { label: string; value: string | string[] };
  questionType: keyof QuizState;
}) {
  const { answers, updateAnswer, updateFrequency } = useQuizContext();

  const handleUpadteAnswer = () => {
    if (answer.value instanceof Array) {
      updateFrequency(answer.value);
    } else {
      updateAnswer(questionType, answer.value);
    }
  };

  const isActive = answers[questionType] == answer.value;

  return (
    <button
      onClick={handleUpadteAnswer}
      className={`min-w-[150px] md:min-w-[189px] border-2 text-start rounded-lg border-lightblue py-2 px-3 hover:bg-lightblue duration-200 ${
        isActive && "bg-lightblue text-white"
      }`}
    >
      {answer.label}
    </button>
  );
}
