import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeKaizen",
  description: "Little by little, inch by inch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-between text-stone-700">
        <div className="min-h-screen bg-[url(/zen-stone-garden.jpg)] bg-cover bg-center w-full overlay relative">
          <div className="relative">
            <Navigation />
            <main className={`${raleway.className} py-6 px-4`}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
