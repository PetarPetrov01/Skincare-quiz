import Question from "@/components/Question";
import { AnswersArray, QuestionType } from "@/types/Quiz";

const question: QuestionType = {
  number: 3,
  type: "desiredBenefit",
  label: `What benefit do you look for in your hair products?`,
};

const answerArray: AnswersArray = [
  { label: "a. Anti-breakage", value: "goals_anti-frizz" },
  { label: "b. Hydration", value: "goals_hydrate" },
  { label: "c. Soothing dry scalp", value: "goals_oil" },
  {
    label: "d. Repairs the appearance of damaged hair",
    value: "goals_replenish",
  },
  { label: "e. Volume", value: "goals_volumise" },
  { label: "f. Curl and coil enhancing", value: "goals_curl" },
];

export default function Question3() {
  return (
    <Question
      answersArray={answerArray}
      question={question}
      key={question.type}
    />
  );
}
