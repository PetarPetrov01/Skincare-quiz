"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export type QuizState = {
  hairType: string;
  washFrequency: string;
  desiredBenefit: string;
  hairConcern: string;
  hairColor: string;
};

type QuizContext = {
  answers: QuizState;
  updateAnswer: (question: keyof QuizState, answer: string) => void;
};

const QuizContext = createContext<QuizContext | null>(null);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswers] = useState<QuizState>({
    hairType: "",
    washFrequency: "",
    desiredBenefit: "",
    hairConcern: "",
    hairColor: "",
  });

  const updateAnswer = (question: keyof QuizState, answer: string) => {
    setAnswers((prevState) => ({
      ...prevState,
      [question]: answer,
    }));
  };

  const data = {
    answers,
    updateAnswer,
  };

  return <QuizContext.Provider value={data}>{children}</QuizContext.Provider>;
};

export const useQuizContext = (): QuizContext => {
  const ctx = useContext(QuizContext);
  if (!ctx) {
    throw new Error("Missing context! (not provided)");
  }
  return ctx;
};
