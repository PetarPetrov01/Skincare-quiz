import Question from "@/components/Question";
import getQuestionData from "@/data/questionsData";
import { notFound } from "next/navigation";

export default function Question5({ params }: { params: { id: string } }) {
  const questionNumber = Number(params.id);

  const { answersArray, question, error } = getQuestionData(questionNumber);

  if (error || !answersArray || !question) {
    notFound();
  }

  return (
    <main className="min-h-[100vh] flex justify-center items-center">
      <div className="lg:relative 2xl:static md:max-w-[985px] flex flex-col items-center text-black gap-8">
        <Question
          answersArray={answersArray}
          question={question}
          key={question.type}
        />
      </div>
    </main>
  );
}