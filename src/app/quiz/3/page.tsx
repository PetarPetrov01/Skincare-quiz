import Question from "@/components/Question";
import getQuestionData from "@/data/questionsData";

const { answersArray, question } = getQuestionData(3);

export default function Question3() {
  return (
    <Question
      answersArray={answersArray}
      question={question}
      key={question.type}
    />
  );
}
