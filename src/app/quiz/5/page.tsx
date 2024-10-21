import Question from "@/components/Question";
import { AnswersArray, QuestionType } from "@/types/Quiz";

const question: QuestionType = {
  number: 5,
  type: "hairColor",
  label: `What is your natural hair color(s) today?`,
};

const answerArray: AnswersArray = [
    { label: "a. Black", value: "black" },
    { label: "b. Brown", value: "brown" },
    { label: "c. Blonde", value: "blonde" },
    { label: "d. Red/Orange", value: "orange" },
    { label: "e. Silver/Grey", value: "gray" },
  ];

export default function Question5() {
  return (
    <Question
      answersArray={answerArray}
      question={question}
      key={question.type}
    />
  );
}
