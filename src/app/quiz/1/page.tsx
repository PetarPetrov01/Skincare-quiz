import Question from "@/components/Question";
import { AnswersArray, QuestionType } from "@/types/Quiz";

const question: QuestionType = {
    number: 1,
    type: 'hairType',
    label: `What\'s your hair type or texture?`
}

const answerArray: AnswersArray = [
    { label: "a. Straight", value: "type_straight" },
    { label: "b. Curly", value: "type_curly" },
    { label: "c. Wavy", value: "type_wavy" },
    { label: "d. Fine", value: "type_fine" },
  ];

export default function Question1(){
    return (
        <Question answersArray={answerArray} question={question} key={question.type} />
    )
  }