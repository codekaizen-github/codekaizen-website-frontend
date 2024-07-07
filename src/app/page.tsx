import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleCarryBox } from "@fortawesome/free-solid-svg-icons";
import { faChessRook } from "@fortawesome/free-solid-svg-icons/faChessRook";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";
import { faTree } from "@fortawesome/free-solid-svg-icons/faTree";
import { faArrowsUpDownLeftRight } from "@fortawesome/free-solid-svg-icons/faArrowsUpDownLeftRight";

export default function Home() {
  return (
    <>
      <h1 className="text-6xl text-center mb-6">CodeKaizen</h1>
      <p><FontAwesomeIcon icon={faArrowsUpDownLeftRight}/> Innovation over invention</p>
      <p><FontAwesomeIcon icon={faTree}/> Sustainability over speed</p>
      <p><FontAwesomeIcon icon={faPeopleCarryBox}/> Unity over individualism</p>
      <p><FontAwesomeIcon icon={faChessRook}/> Play over pressure</p>
      <p><FontAwesomeIcon icon={faDumbbell}/> Ritualism over monumentalism</p>
    </>
  );
}
