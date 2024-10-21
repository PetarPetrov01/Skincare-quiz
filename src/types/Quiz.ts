export type AnswersArray = { label: string; value: string | string[] }[];

export type QuizState = {
  hairType: string;
  washFrequency: string[];
  desiredBenefit: string;
  hairConcern: string;
  hairColor: string;
};

export type QuestionType = {
  number: number;
  type: keyof QuizState;
  label: string;
}