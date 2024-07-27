import React from "react";
import { Tagline } from "./tagline";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-neutral-950 p-8">
			<div className="">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center md:text-left gap-4">
					<Tagline />
					<div className="social-media md:text-right">
						<h4 className="">
							Follow us on&nbsp;
							<a
								href="https://github.com/codekaizen-github"
								className="text-retro-blue hover:text-retro-darkBlue"
							>
								GitHub
							</a>
						</h4>
					</div>
				</div>
				<div className="footer-bottom mt-4 text-center text-neutral-500">
					<p>&copy; {currentYear} CodeKaizen. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
