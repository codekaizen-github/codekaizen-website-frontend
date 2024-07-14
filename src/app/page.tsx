import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleCarryBox } from "@fortawesome/free-solid-svg-icons";
import { faChessRook } from "@fortawesome/free-solid-svg-icons/faChessRook";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";
import { faTree } from "@fortawesome/free-solid-svg-icons/faTree";
import { faArrowsUpDownLeftRight } from "@fortawesome/free-solid-svg-icons/faArrowsUpDownLeftRight";

export default function HomePage() {
	// TODO: Design home page

	return (
		<>
			<h1 className="text-9xl text-center mb-6">++</h1>
			<div>
				<h2 className="text-5xl">
					{/* <FontAwesomeIcon icon={faArrowsUpDownLeftRight} />{" "} */}
					Innovation over invention
				</h2>
				<h2>
					{/* <FontAwesomeIcon icon={faTree} /> */}
					Sustainability over speed
				</h2>
				<h2>
					{/* <FontAwesomeIcon icon={faPeopleCarryBox} /> */}
					Unity over individualism
				</h2>
				<h2>
					{/* <FontAwesomeIcon icon={faChessRook} /> */}
					Play over pressure
				</h2>
				<h2>
					{/* <FontAwesomeIcon icon={faDumbbell} /> */}
					Ritualism over monumentalism
				</h2>
			</div>
		</>
	);
}
