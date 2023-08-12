import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import { cn } from "../lib/utils";
import "./globals.css";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizzaneer",
  description: "Quizzaneer is a app for generating and playing quizzes with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(karla.className, "min-h-screen pt-16 antialiased")}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
