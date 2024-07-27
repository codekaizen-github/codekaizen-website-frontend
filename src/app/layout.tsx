import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navigation from "./partials/navigation";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "./partials/footer";

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
		<html lang="en" className="text-retro-green">
			<body
				className={`${sourceCodePro.className} min-h-screen bg-neutral-900`}
			>
				<div className="relative">
					<Navigation />
					<main className="p-8 min-h-screen">{children}</main>
				</div>
				<Footer />
			</body>
		</html>
	);
}
