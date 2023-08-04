"use client";

import { signIn } from "next-auth/react";
import { type FC } from "react";
import { Button } from "./ui/button";

type Props = {
  text: string;
};
const SignInButton: FC<Props> = ({ text }) => {
  return (
    <Button
      onClick={() => {
        signIn("google").catch(console.error);
      }}
    >
      {text}
    </Button>
  );
};

export default SignInButton;
