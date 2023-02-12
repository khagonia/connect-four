import Gameboard from "./components/Gameboard";
import Infobox from "./components/Infobox";
import GameOver from './components/GameOver'
import { useSelector } from "react-redux";

import "./styles/styles.css";

const BOARD_COLUMNS = 7;
const BOARD_ROWS = 7;

function App() {

  const showGameOver = useSelector(state => state.game.showGameOver);
  console.log(showGameOver);
  const player = useSelector(state => state.game.player);

  return (
    <>
      <Gameboard boardColumns={BOARD_COLUMNS} boardRows={BOARD_ROWS} />
      <Infobox />
      {showGameOver && <GameOver winner= {player} />}
    </>
  );
}
export default App;
