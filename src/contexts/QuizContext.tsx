"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { QuizState } from "@/types/Quiz";

type QuizContext = {
  answers: QuizState;
  updateAnswer: (question: keyof QuizState, answer: string) => void;
  updateFrequency: (answer: string[]) => void;
  resetAnswers: () => void;
};

const QuizContext = createContext<QuizContext | null>(null);

const initialState = {
  hairType: "",
  washFrequency: [""],
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

  const updateFrequency = (answer: string[]) => {
    setAnswers((prevState) => ({
      ...prevState,
      washFrequency: answer,
    }));
  };

  const resetAnswers = () => {
    setAnswers(initialState);
  };

  const data = {
    answers,
    updateAnswer,
    resetAnswers,
    updateFrequency,
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
