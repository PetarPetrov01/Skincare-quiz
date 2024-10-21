import Question from "@/components/Question";
import getQuestionData from "@/data/questionsData";

const { answersArray, question } = getQuestionData(4);

export default function Question4() {
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
