import Question from "@/components/Question";
import { AnswersArray, QuestionType } from "@/types/Quiz";

const question: QuestionType = {
  number: 4,
  type: "hairConcern",
  label: `Is there anything troubling you about your hair?`,
};

const answerArray: AnswersArray = [
    { label: "a. Breakage", value: "goals_anti-ageing" },
    { label: "b. Frizz", value: "type_frizzy" },
    { label: "c. Scalp dryness", value: "type_dry" },
    { label: "d. Damage", value: "goals_replenish" },
    { label: "e. Tangling", value: "goals_straighten" },
  ];

export default function Question4() {
  return (
    <Question
      answersArray={answerArray}
      question={question}
      key={question.type}
    />
  );
}
