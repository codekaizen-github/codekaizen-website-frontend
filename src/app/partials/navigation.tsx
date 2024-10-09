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
					href="/"
					className="flex items-center text-retro-green hover:text-retro-darkGreen"
				>
					<span>++CodeKaizen</span>
				</Link>
			</div>
			<div className="hidden md:flex items-center space-x-4 gap-4 text-lg">
				<Link
					href="/team"
					className="text-retro-blue hover:text-retro-darkBlue"
				>
					Team[]
				</Link>
				<Link
					href="/projects"
					className="text-retro-blue hover:text-retro-darkBlue"
				>
					Projects/
				</Link>
				<Link
					href="/values"
					className="text-retro-blue hover:text-retro-darkBlue"
				>
					Values.config
				</Link>
			</div>
			<div className="md:hidden">
				<button onClick={() => setIsOpen(!isOpen)}>
					<FontAwesomeIcon
						icon={faBars}
						className="text-2xl text-retro-blue hover:text-retro-darkBlue"
					/>
				</button>
			</div>
			{isOpen && (
				<div
					onClick={closeMenu}
					className="fixed top-0 left-0 w-full h-full bg-neutral-900/[.95] z-50 flex flex-col items-center justify-center gap-6"
				>
					<FontAwesomeIcon
						icon={faXmark}
						onClick={() => setIsOpen(false)}
						className="absolute top-4 right-4 text-2xl cursor-pointer text-retro-blue hover:text-retro-darkBlue"
					/>
					<Link
						href="/team"
						className="text-2xl text-retro-blue hover:text-retro-darkBlue"
					>
						Team[]
					</Link>
					<Link
						href="/projects"
						className="text-2xl text-retro-blue hover:text-retro-darkBlue"
					>
						Projects/
					</Link>
					<Link
						href="/values"
						className="text-2xl text-retro-blue hover:text-retro-darkBlue"
					>
						Values.config
					</Link>
				</div>
			)}
		</nav>
	);
}
