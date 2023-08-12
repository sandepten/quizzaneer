import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
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
      </Card>
    </div>
  );
}
