import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../store/gameboard-slice";
import Chip from "./Chip";

const Infobox = () => {
  const player = useSelector(state => state.game.player);
  const isGameActive = useSelector(state => state.game.isGameActive);
  const dispatch = useDispatch();
  let content = [];

  const toggleGameStart = () => {
    dispatch(gameActions.toggleGame());
  }

  if (isGameActive) {

    content = (<>
      <p className="info-title">Current Move</p>
      <Chip col={0} row={0} player={player}/>
      <p className="info-player">Player {player}</p> 
    </>);

  } 
  
  else {
    content = <button onClick= {toggleGameStart} className="info-gamestart">Start Game</button>
  }

  return (
    <div className="info-card">
      {content}
    </div>
  )
}

export default Infobox;