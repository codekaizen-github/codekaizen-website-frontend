import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleCarryBox } from "@fortawesome/free-solid-svg-icons";
import { faChessRook } from "@fortawesome/free-solid-svg-icons/faChessRook";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";
import { faTree } from "@fortawesome/free-solid-svg-icons/faTree";
import { faArrowsUpDownLeftRight } from "@fortawesome/free-solid-svg-icons/faArrowsUpDownLeftRight";
import TeamMemberCard from "./partials/teamMemberCard";
import { Tagline } from "./partials/tagline";
import TypingText from "./partials/typingText";

export default function HomePage() {
	// TODO: Design home page

	return (
		<>
			<h1 className="sr-only text-5xl code mb-8 text-center">
				code(); share(); repeat();
			</h1>
			<div className="text-center p-4 h-20 text-5xl code bg-neutral-700">
				<TypingText text="code(); share(); repeat();" />
			</div>
			<div className="text-center flex flex-col gap-8">
				<div className="">
					{/* <FontAwesomeIcon icon={faArrowsUpDownLeftRight} /> */}
					<div className="text-retro-purple text-5xl">Innovation</div>
					<div className="text-3xl">over invention</div>
				</div>
				<div className="">
					{/* <FontAwesomeIcon icon={faTree} /> */}
					<div className="text-retro-cyan text-5xl">
						Sustainability
					</div>
					<div className="text-3xl">over speed</div>
				</div>
				<div className="">
					{/* <FontAwesomeIcon icon={faPeopleCarryBox} /> */}
					<div className="text-retro-yellow text-5xl">Unity</div>
					<div className="text-3xl">over individualism</div>
				</div>
				<div className="">
					{/* <FontAwesomeIcon icon={faChessRook} /> */}
					<div className="text-retro-red text-5xl">Play</div>
					<div className="text-3xl">over pressure</div>
				</div>
				<div className="">
					{/* <FontAwesomeIcon icon={faDumbbell} /> */}
					<div className="text-retro-blue text-5xl">Ritualism</div>
					<div className="text-3xl">over monumentalism</div>
				</div>
			</div>
		</>
	);
}
