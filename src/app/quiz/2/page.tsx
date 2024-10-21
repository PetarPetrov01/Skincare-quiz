import Question from "@/components/Question";
import getQuestionData from "@/data/questionsData";

const { answersArray, question } = getQuestionData(2);

export default function Question2() {
  return (
    <Question
      answersArray={answersArray}
      question={question}
      key={question.type}
    />
  );
}
