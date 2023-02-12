import Tile from './Tile';
import Chip from './Chip';
import { useEffect } from 'react';
import ConnectFour from "../classes/Game";
import { useSelector, useDispatch } from 'react-redux';
import { gameActions } from '../store/gameboard-slice';

const game = new ConnectFour();

const GameArea = ({ cols, rows }) => {

  const player = useSelector((state) => state.game.player);
  const board = useSelector((state) => state.game.boardState);
  const dispatch = useDispatch();

  useEffect(() => {
    game.init(cols, rows);
    dispatch(gameActions.updateBoard({newBoardState: game.board}) )
  }, [])

  
  const addChip = (col) => {
    const validMove = game.getValidMove(col);
    
    if(validMove < 0) return;

    game.addChip(col, validMove, player);
    dispatch(gameActions.updateBoard({newBoardState: game.getBoard}))

    const playerDidWin = game.checkMove(col, validMove)
    if (playerDidWin) {
      dispatch(gameActions.showGameOver(playerDidWin));
    } else {
      dispatch(gameActions.changePlayer());
    }
  }

  let tiles = [];
  for (let i = 0; i < rows; i++) { 
    for( let j = 0; j < cols; j++) {
      tiles.push(<Tile key={i*rows+j} col={`${j}`} addChip={addChip} />) 
    }
  };


  let chips = board?.reduce( (chipsAcc, tile, index) => {
    if(tile !== 0) {
      chipsAcc.push(<Chip key={Math.random()} player={tile} col={Math.floor(index/rows)} row={index%cols} />)
    }

    return chipsAcc;
  }, []);


  return (
    <div className="foreground">
      {tiles.map(tile => tile)}
      {chips && chips.map(chip => chip)}
    </div>
  )
}

export default GameArea;