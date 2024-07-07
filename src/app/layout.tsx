import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

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
      <body className="min-h-screen retro-green bg-neutral-900">
        <div className={`${sourceCodePro.className} relative`}>
          <Navigation />
          <main className="py-6 px-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
