import Question from "@/components/Question";
import getQuestionData from "@/data/questionsData";

const { answersArray, question } = getQuestionData(1);

export default function Question1() {
  return (
    <Question
      answersArray={answersArray}
      question={question}
      key={question.type}
    />
  );
}
