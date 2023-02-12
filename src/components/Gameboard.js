import { useSelector } from "react-redux";
import GameArea from "./GameArea";

const Gameboard = ({ boardColumns, boardRows }) => {

  const isGameActive = useSelector(state => state.game.isGameActive);
  const tileProps = {
    '--cols': boardColumns,
    '--rows': boardRows
  };

  return (
    <div className="gameboard" style={tileProps}>
      {isGameActive && <GameArea cols={boardColumns} rows={boardRows} />}
    </div>
  )
}

export default Gameboard;