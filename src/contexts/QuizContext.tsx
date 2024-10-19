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
  resetAnswers: () => void;
};

const QuizContext = createContext<QuizContext | null>(null);

const initialState = {
  hairType: "",
  washFrequency: "",
  desiredBenefit: "",
  hairConcern: "",
  hairColor: "",
};

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswers] = useState<QuizState>(initialState);

  const updateAnswer = (question: keyof QuizState, answer: string) => {
    setAnswers((prevState) => ({
      ...prevState,
      [question]: answer,
    }));
  };

  const resetAnswers = () => {
    setAnswers(initialState);
  };

  const data = {
    answers,
    updateAnswer,
    resetAnswers,
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
