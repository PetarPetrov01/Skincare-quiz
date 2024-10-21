import Question from "@/components/Question";
import getQuestionData from "@/data/questionsData";

const { answersArray, question } = getQuestionData(4);

export default function Question4() {
  return (
    <Question
      answersArray={answersArray}
      question={question}
      key={question.type}
    />
  );
}
