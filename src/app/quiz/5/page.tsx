import Question from "@/components/Question";
import getQuestionData from "@/data/questionsData";

const { answersArray, question } = getQuestionData(5);

export default function Question5() {
  return (
    <Question
      answersArray={answersArray}
      question={question}
      key={question.type}
    />
  );
}
