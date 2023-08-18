import SignInButton from "@/components/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    return redirect("/dashboard");
  }
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Quizzaneer</CardTitle>
          <CardDescription>
            Quizzaneer is a quiz game where you can create your own quiz and
            play it and share it with your friends.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign in with Google!" />
        </CardContent>
      </Card>
    </div>
  );
}
