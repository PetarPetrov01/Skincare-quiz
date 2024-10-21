import { AnswersArray, QuestionType } from "@/types/Quiz";

const questionData: { question: QuestionType; answersArray: AnswersArray }[] = [
  {
    question: {
      number: 1,
      type: "hairType",
      label: `What's your hair type or texture?`,
    },
    answersArray: [
      { label: "a. Straight", value: "type_straight" },
      { label: "b. Curly", value: "type_curly" },
      { label: "c. Wavy", value: "type_wavy" },
      { label: "d. Fine", value: "type_fine" },
    ],
  },
  {
    question: {
      number: 2,
      type: "washFrequency",
      label: `How often do you wash your hair?`,
    },
    answersArray: [
      { label: "a. Daily", value: ["daily", "everyday"] },
      { label: "b. Every other day", value: ["often"] },
      { label: "c. Twice a week", value: ["regular"] },
      { label: "d. Once a week", value: ["occasionally"] },
      { label: "e. Every two weeks", value: ["rarely"] },
    ],
  },
  {
    question: {
      number: 3,
      type: "desiredBenefit",
      label: `What benefit do you look for in your hair products?`,
    },
    answersArray: [
      { label: "a. Anti-breakage", value: "goals_anti-frizz" },
      { label: "b. Hydration", value: "goals_hydrate" },
      { label: "c. Soothing dry scalp", value: "goals_oil" },
      {
        label: "d. Repairs the appearance of damaged hair",
        value: "goals_replenish",
      },
      { label: "e. Volume", value: "goals_volumise" },
      { label: "f. Curl and coil enhancing", value: "goals_curl" },
    ],
  },
  {
    question: {
      number: 4,
      type: "hairConcern",
      label: `Is there anything troubling you about your hair?`,
    },
    answersArray: [
      { label: "a. Breakage", value: "goals_anti-ageing" },
      { label: "b. Frizz", value: "type_frizzy" },
      { label: "c. Scalp dryness", value: "type_dry" },
      { label: "d. Damage", value: "goals_replenish" },
    ],
  },
  {
    question: {
      number: 5,
      type: "hairColor",
      label: `What is your natural hair color(s) today?`,
    },
    answersArray: [
      { label: "a. Black", value: "black" },
      { label: "b. Brown", value: "brown" },
      { label: "c. Blonde", value: "blonde" },
      { label: "d. Red/Orange", value: "orange" },
      { label: "e. Silver/Grey", value: "gray" },
    ],
  },
];

export default function getQuestionData(questionNumber: number){
    return questionData[questionNumber - 1]
}
