import { useDispatch } from "react-redux";
import { gameActions } from "../store/gameboard-slice";

const GameOver = ({ winner }) => {

  const dispatch = useDispatch();

  const hideGameOver = () => {
    dispatch(gameActions.showGameOver(false));
    dispatch(gameActions.toggleGame());
  }

  return (
    <div className="gameover-card">
      <h2>GAME OVER!</h2>
      <p>Player { winner } wins!</p>
      <button onClick={hideGameOver}> Exit Game </button>
    </div>
  )
}

export default GameOver;