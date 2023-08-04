import { SessionProvider } from "next-auth/react";
import { type FC } from "react";

type Props = {
  children: React.ReactNode;
};

const Providers: FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <div>{children}</div>;
    </SessionProvider>
  );
};

export default Providers;
