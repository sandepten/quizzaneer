"use client";

import { LogOut } from "lucide-react";
import { type User } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Props = {
  user: User;
};

const UserAccountNav: FC<Props> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          {user.image ? (
            <Image
              src={user.image ?? ""}
              alt="avatar"
              fill
              referrerPolicy="no-referrer"
            />
          ) : (
            <AvatarFallback>
              <span className="sr-only">{user?.name}</span>
            </AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-semibold">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-zinc-700">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer text-red-600"
          onClick={(e) => {
            e.preventDefault();
            signOut().catch(console.error);
          }}
        >
          Sign out
          <LogOut className="ml-2 h-4 w-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
