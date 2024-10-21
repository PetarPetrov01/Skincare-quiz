"use client";

import Link from "next/link";
import { ReactNode } from "react";

import { useQuizContext } from "@/contexts/QuizContext";

export default function LinkToBeginning({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const { resetAnswers } = useQuizContext();

  return (
    <Link onClick={resetAnswers} href={"/quiz/1"} className={className}>
      {children}
    </Link>
  );
}
