import { QuizProvider } from "@/contexts/QuizContext";

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-[100vh] flex justify-center items-center">
      <div className="lg:relative 2xl:static md:max-w-[985px] flex flex-col items-center text-black gap-8">
        <QuizProvider>{children}</QuizProvider>
      </div>
    </main>
  );
}
