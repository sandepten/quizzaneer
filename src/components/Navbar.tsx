import { getAuthSession } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import SignInButton from "./SignInButton";
import { ThemeToggle } from "./ThemeToggle";
import UserAccountNav from "./UserAccountNav";

const grotesk = Space_Grotesk({ subsets: ["latin"] });

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed inset-x-0 top-0 z-10 h-fit border-b border-zinc-300 bg-white py-2 dark:bg-gray-950">
      <div className="mx-auto flex h-full items-center justify-between gap-2 px-4 sm:max-w-[90%]">
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
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text="Sign in" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
