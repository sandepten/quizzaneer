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
  return (
    <main className="mx-auto max-w-7xl p-4 sm:p-8">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold tracking-tight">Quiz</h1>
      </div>
    </main>
  );
};

export default Quiz;
