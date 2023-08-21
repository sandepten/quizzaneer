import QuizCreation from "@/components/quiz/QuizCreation";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Quiz | Quizzaneer",
};

const Quiz = async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return <QuizCreation />;
};

export default Quiz;
