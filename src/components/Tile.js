

const Tile = ({ col, addChip }) => {

  const tileClickHandler = (e) => {
    if(e.target.classList.contains('selected')) return;
    addChip(col);
  }

  return (
    <div className="tile" onClick={tileClickHandler} onTouchEnd={tileClickHandler}></div>
  )
}

export default Tile;