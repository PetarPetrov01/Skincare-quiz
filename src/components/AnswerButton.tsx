import { useQuizContext } from "@/contexts/QuizContext";

export default function AnswerButton({
  answer,
  isActive = false,
}: {
  answer: { label: string; value: string };
  isActive: boolean;
}) {
  return (
    <button
      className={`min-w-[189px] border-2 text-start rounded-lg border-lightblue py-2 px-3 hover:bg-lightblue duration-200 ${isActive && 'bg-lightblue'}`}
    >
      {answer.label}
    </button>
  );
}
