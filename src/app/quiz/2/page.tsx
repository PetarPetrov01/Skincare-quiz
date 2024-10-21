import Question from "@/components/Question";
import { AnswersArray, QuestionType } from "@/types/Quiz";

const question: QuestionType = {
  number: 2,
  type: "washFrequency",
  label: `How often do you wash your hair?`,
};

const answerArray: AnswersArray = [
  { label: "a. Daily", value: ["daily", "everyday"] },
  { label: "b. Every other day", value: ["often"] },
  { label: "c. Twice a week", value: ["regular"] },
  { label: "d. Once a week", value: ["occasionally"] },
  { label: "d. Every two weeks", value: ["rarely"] },
];

export default function Question2() {
  return (
    <Question
      answersArray={answerArray}
      question={question}
      key={question.type}
    />
  );
}
