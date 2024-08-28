/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import TypingText from "./partials/typingText";
import { useEffect } from "react";
import { formatAsMultilineComment } from "../../utilities/formatAsComment";

export default function HomePage() {
	useEffect(() => {
		const paragraphs = document.querySelectorAll(".multiline-comment");
		paragraphs.forEach((paragraph) => {
			if (!paragraph.hasAttribute("data-formatted")) {
				const text = paragraph.innerHTML;

				// This needs to happen here for the calculation to work
				paragraph.classList.remove("hidden");

				const font = window.getComputedStyle(paragraph).font;
				const maxWidth = paragraph.clientWidth;

				const formattedText = formatAsMultilineComment(
					text,
					font,
					maxWidth
				);
				paragraph.innerHTML = formattedText.replace(/\n/g, "<br>");
				paragraph.setAttribute("data-formatted", "true");
			}
		});
	}, []);

	return (
		<>
			<h1 className="pb-1 comment">// Refactoring the World</h1>
			<h2 className="pb-1 comment">// One Pull Request at a Time</h2>
			<h1 className="sr-only">code(); share(); repeat();</h1>
			<div className="pb-1 h-20 text-white">
				<TypingText text={["code(); ", "share(); ", "repeat();"]} />
			</div>
			<p className="sr-only">
				We believe every line of code counts. Whether it’s a tiny tweak
				or a major overhaul, we’re here to help each other out and make
				software better for everyone. We celebrate the small wins and
				love the process of refining our work together. No ego, just
				code – and plenty of fun along the way! Join us as we code,
				share, and repeat, building a stronger, more supportive
				development community one commit at a time.
			</p>
			<p className="comment multiline-comment mt-2 hidden">
				We believe every line of code counts. Whether it’s a tiny tweak
				or a major overhaul, we’re here to help each other out and make
				software better for everyone. We celebrate the small wins and
				love the process of refining our work together. No ego, just
				code – and plenty of fun along the way! Join us as we code,
				share, and repeat, building a stronger, more supportive
				development community one commit at a time.
			</p>
			<div>
				<span className="text-retro-darkBlue">const </span>
				<span className="text-retro-blue">ourTeam </span>
				<span className="text-white">= </span>
				<span className="text-retro-yellow">{"{"}</span>
				<br></br>
				<div className="ml-8">
					<span className="text-retro-cyan">{"\t"}belief</span>
					<span className="text-white">: </span>
					<span className="text-retro-red">
						{'"EveryLineCounts"'}
					</span>
					<span className="text-white">,</span>
					<br></br>
					<span className="text-retro-cyan">{"\t"}helpEachOther</span>
					<span className="text-white">: </span>
					<span className="text-retro-darkBlue">true</span>
					<span className="text-white">,</span>
					<br></br>
					<span className="text-retro-cyan">{"\t"}goal</span>
					<span className="text-white">: </span>
					<span className="text-retro-red">
						{'"MakeSoftwareBetter"'}
					</span>
					<span className="text-white">,</span>
					<br></br>
					<span className="text-retro-yellow">{"\t"}community</span>
					<span className="text-white">: </span>
					<span className="text-retro-darkPurple">{"() "}</span>
					<span className="text-retro-blue">{"=> "}</span>
					<span className="text-retro-darkPurple">{"{"}</span>
					<br></br>
					<div className="ml-8">
						<span className="text-retro-yellow">
							{"\t\t"}celebrateSmallWins
						</span>
						<span className="text-retro-blue">()</span>
						<span className="text-white">;</span>
						<br></br>
						<span className="text-retro-yellow">
							{"\t\t"}refineTogether
						</span>
						<span className="text-retro-blue">()</span>
						<span className="text-white">;</span>
					</div>
					<span className="text-retro-darkPurple">
						{"\t"}
						{"}"}
					</span>
					<span className="text-white">,</span>
					<br></br>
					<span className="text-retro-cyan">{"\t"}culture</span>
					<span className="text-white">: </span>
					<span className="text-retro-darkPurple">{"["}</span>
					<span className="text-retro-red">{'"NoEgo"'}</span>
					<span className="text-white">, </span>
					<span className="text-retro-red">{'"JustCode"'}</span>
					<span className="text-white">, </span>
					<span className="text-retro-red">{'"LotsOfFun"'}</span>
					<span className="text-retro-darkPurple">{"]"}</span>
					<span className="text-white">,</span>
					<br></br>
					<span className="text-retro-cyan">{"\t"}mission</span>
					<span className="text-white">: </span>
					<span className="text-retro-red">
						{'"StrengthenCommunityOneCommitAtATime"'}
					</span>
					<span className="text-white">,</span>
					<br></br>
					<span className="text-retro-yellow">{"\t"}invite</span>
					<span className="text-white">: </span>
					<span className="text-retro-darkPurple">{"() "}</span>
					<span className="text-retro-blue">{"=> "}</span>
					<span className="text-retro-darkPurple">{"{"}</span>
					<br></br>
					<div className="ml-8">
						<span className="text-retro-cyan">{"\t\t"}console</span>
						<span className="text-white">.</span>
						<span className="text-retro-yellow">{"log"}</span>
						<span className="text-retro-blue">{"("}</span>
						<span className="text-retro-red">{'"Join us!"'}</span>
						<span className="text-retro-blue">{")"}</span>
						<span className="text-white">;</span>
						<br></br>
						<span className="text-retro-yellow">{"\t\t"}code</span>
						<span className="text-retro-blue">()</span>
						<span className="text-white">;</span>
						<br></br>
						<span className="text-retro-yellow">{"\t\t"}share</span>
						<span className="text-retro-blue">()</span>
						<span className="text-white">;</span>
						<br></br>
						<span className="text-retro-yellow">
							{"\t\t"}repeat
						</span>
						<span className="text-retro-blue">()</span>
						<span className="text-white">;</span>
					</div>
					<span className="text-retro-darkPurple">
						{"\t"}
						{"}"}
					</span>
				</div>
				<span className="text-retro-yellow">{"}"}</span>
				<span className="text-white">;</span>
				<br></br>
				<br></br>
				<span className="text-retro-blue">ourTeam</span>
				<span className="text-white">.</span>
				<span className="text-retro-yellow">invite()</span>
				<span className="text-white">;</span>
			</div>
		</>
	);
}

// const ourTeam = {
// 	passion: "100%",
// 	belief: "EveryLineCounts",
// 	helpEachOther: true,
// 	goal: "MakeSoftwareBetter",
// 	thrive: () => {
// 		collaborate();
// 		celebrateSmallWins();
// 		refineTogether();
// 	},
// 	values: ["NoEgo", "JustCode", "LotsOfFun"],
// 	mission: "BuildStrongerCommunityOneCommitAtATime",
// 	invite: () => {
// 		console.log("Join us!");
// 		code();
// 		share();
// 		repeat();
// 	},
// };

// ourTeam.invite();
