import { getAuthSession } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import SignInButton from "./SignInButton";
import { Button } from "./ui/button";

const grotesk = Space_Grotesk({ subsets: ["latin"] });

const Navbar = async () => {
  const session = await getAuthSession();
  // if (session) {
  //   return <pre>{JSON.stringify(session.user, null, 2)}</pre>;
  // } else {
  //   return <p>Not signed in</p>;
  // }
  return (
    <div className="fixed inset-x-0 top-0 z-10 h-fit border-b border-zinc-300 bg-white py-2 dark:bg-gray-950">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-2 px-4">
        <Link href="/">
          <p
            className={cn(
              "rounded-lg border border-b-4 border-r-4 border-black p-1.5 text-xl font-bold text-zinc-900 dark:text-gray-50",
              grotesk.className,
            )}
          >
            Quizzaneer
          </p>
        </Link>
        {session ? (
          <Link href="/api/auth/signout">
            <Button>Sign out</Button>
          </Link>
        ) : (
          <SignInButton text="Sign in" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
