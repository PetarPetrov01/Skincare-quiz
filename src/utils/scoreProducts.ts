import { Product, ScoredProduct } from "@/types/Product";
import { QuizState } from "@/types/Quiz";

export default function scoreProduct(
  product: Product,
  answers: QuizState
): ScoredProduct {
  let score = 0;

  const { washFrequency, hairColor, ...tagAnswers } = answers;

  product.tags.forEach((t) => {
    for (const value of Object.values(tagAnswers)) {
      if (value && t.includes(value)) {
        score++;
      }
    }
  });

  if (
    hairColor &&
    (product.title.toLowerCase().includes(hairColor) ||
      product.body_html.toLowerCase().includes(hairColor))
  ) {
    score++;
  }

  if (
    washFrequency[0] &&
    washFrequency.some((s) => product.body_html.toLowerCase().includes(s))
  ) {
    score++;
  }

  return {
    ...product,
    score,
  };
}
