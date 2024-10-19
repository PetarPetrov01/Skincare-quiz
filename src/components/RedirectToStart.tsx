"use client";
import { useQuizContext } from "@/contexts/QuizContext";
import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";

export default function LinkToBeginning({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const { resetAnswers } = useQuizContext();

  return (
    <Link
      onClick={resetAnswers}
      href={"/question1"}
      className={className}
    >
      {children}
    </Link>
  );
}
