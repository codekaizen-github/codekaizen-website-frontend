import React from "react";
import { Tagline } from "./tagline";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-neutral-950">
			<div className="max-w-screen-lg m-auto p-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center md:text-left gap-4">
					<Tagline />
					<div className="social-media md:text-right">
						<div>
							Follow us on&nbsp;
							<a
								aria-label="codekaizen-github"
								href="https://github.com/codekaizen-github"
								className="text-retro-blue hover:text-retro-darkBlue"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
				<div className="footer-bottom mt-4 text-center text-neutral-400">
					<p>&copy; {currentYear} CodeKaizen. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
