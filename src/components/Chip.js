const Chip = ({ row, col, player }) => {

  const position = {
    '--chip-row': row,
    '--chip-col': col
  }

  return (
    <div className={`chip player-${player}`} style={position}></div>
  )
}

export default Chip;