import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleCarryBox } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";
import { faTree } from "@fortawesome/free-solid-svg-icons/faTree";
import { faFootball } from "@fortawesome/free-solid-svg-icons/faFootball";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";

export default function ValuesPage() {
	return (
		<div className="text-center flex flex-col gap-8">
			<div className="">
				<FontAwesomeIcon icon={faCog} spin className="mb-3 text-2xl" />
				<FontAwesomeIcon
					icon={faCog}
					spin
					spinReverse
					className="ml-1 mt-3 text-2xl"
				/>
				<div className="text-retro-purple text-4xl">Innovation</div>
				<div className="text-2xl">over invention</div>
			</div>
			<div className="">
				<FontAwesomeIcon
					icon={faTree}
					className="animate-grow text-2xl"
				/>
				<div className="text-retro-cyan text-4xl">Sustainability</div>
				<div className="text-2xl">over speed</div>
			</div>
			<div className="">
				<FontAwesomeIcon
					icon={faPeopleCarryBox}
					className="animate-slide text-2xl"
				/>
				<div className="text-retro-yellow text-4xl">Unity</div>
				<div className="text-2xl">over individualism</div>
			</div>
			<div className="">
				<FontAwesomeIcon
					icon={faFootball}
					bounce
					className="text-2xl"
				/>
				<div className="text-retro-red text-4xl">Play</div>
				<div className="text-2xl">over pressure</div>
			</div>
			<div className="">
				<FontAwesomeIcon icon={faDumbbell} beat className="text-2xl" />
				<div className="text-retro-blue text-4xl">Ritualism</div>
				<div className="text-2xl">over monumentalism</div>
			</div>
		</div>
	);
}

/*
What We Value in Software:
Refactoring over rewriting
Interactive Icon: A code snippet being edited seamlessly.
Description: "We refine and improve, making our code better over time."

Flexibility over specificity
Illustration: A chameleon adapting to different environments.
Description: "Our solutions adapt to changing needs and requirements."

Simplicity over complexity
Value Card: A clean, straightforward design.
Description: "We keep it simple, making our software easy to use and maintain."

Visibility over performance
Animation: A transparent glass showing its contents clearly.
Description: "Clarity and transparency are key to our success."

Changeability over cleverness
Interactive Icon: A flexible rubber band.
Description: "Our code is designed to evolve, not to impress."

Obvious over subtle
Illustration: A bright, clear signpost.
Description: "We value clear and direct solutions over hidden complexities."
*/
