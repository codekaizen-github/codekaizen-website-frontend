"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const closeMenu = () => setIsOpen(false);

	return (
		<nav className="relative flex items-center justify-between w-full py-4 px-8">
			<div className="flex items-center space-x-4 text-lg">
				<Link
					aria-label="CodeKaizen"
					href="/"
					className="flex items-center text-retro-green hover:text-retro-darkGreen no-underline"
				>
					<span>++CodeKaizen</span>
				</Link>
			</div>
			<div className="hidden md:flex items-center space-x-4 gap-4 text-lg">
				<Link
					aria-label="Team"
					href="/team"
					className="text-retro-blue hover:text-retro-darkBlue no-underline"
				>
					Team[]
				</Link>
				<Link
					aria-label="Projects"
					href="/projects"
					className="text-retro-blue hover:text-retro-darkBlue no-underline"
				>
					Projects/
				</Link>
				<Link
					aria-label="Values"
					href="/values"
					className="text-retro-blue hover:text-retro-darkBlue no-underline"
				>
					Values.env
				</Link>
				<Link
					aria-label="Blog"
					href="/blog"
					className="text-retro-blue hover:text-retro-darkBlue no-underline"
				>
					{`{{ Blog }}`}
				</Link>
				{/* <Link
					aria-label="Blog"
					href="/blog"
					className="text-retro-blue hover:text-retro-darkBlue no-underline"
				>
					{`Dev.log`}
				</Link> */}
			</div>
			<div className="md:hidden">
				<button
					aria-label="menu-open"
					onClick={() => setIsOpen(!isOpen)}
				>
					<FontAwesomeIcon
						icon={faBars}
						className="text-2xl text-retro-blue hover:text-retro-darkBlue"
					/>
				</button>
			</div>
			{isOpen && (
				<div
					aria-label="menu-mobile"
					onClick={closeMenu}
					className="fixed top-0 left-0 w-full h-full bg-neutral-900/[.95] z-50 flex flex-col items-center justify-center gap-6"
				>
					<FontAwesomeIcon
						aria-label="menu-close"
						icon={faXmark}
						onClick={() => setIsOpen(false)}
						className="absolute top-4 right-4 text-2xl cursor-pointer text-retro-blue hover:text-retro-darkBlue"
					/>
					<Link
						aria-label="Team"
						href="/team"
						className="text-2xl text-retro-blue hover:text-retro-darkBlue no-underline"
					>
						Team[]
					</Link>
					<Link
						aria-label="Projects"
						href="/projects"
						className="text-2xl text-retro-blue hover:text-retro-darkBlue no-underline"
					>
						Projects/
					</Link>
					<Link
						aria-label="Values"
						href="/values"
						className="text-2xl text-retro-blue hover:text-retro-darkBlue no-underline"
					>
						Values.env
					</Link>
					<Link
						aria-label="Blog"
						href="/blog"
						className="text-2xl text-retro-blue hover:text-retro-darkBlue no-underline"
					>
						{`{{ Blog }}`}
					</Link>
				</div>
			)}
		</nav>
	);
}
