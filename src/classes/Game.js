class ConnectFour {
  #board
  #cols
  #rows

  init(col, row) {
    this.#board = [];
    for( let i = 0; i < col*row; i++ ) { this.#board.push(0) };
    this.#cols = +col;
    this.#rows = +row;
  }

  getValidMove(col) {
    const start = +col*this.#cols;
    const end = +col*this.#cols + this.#rows;
    const choices = this.#board.slice(start,end);
    const choiceRow = choices.findLastIndex((choice) => choice === 0);
    return choiceRow;
  }

  addChip(col, row, player) {
    let board = [...this.#board]
    board[+row + col*this.#cols] = player;
    this.#board = board;
  }

  checkMove(col, row) {
    let connectedBelow     = 1;
    let connectedLeft      = 1;
    let connectedRight     = 1;
    let connectedUpLeft    = 1;
    let connectedDownLeft  = 1;
    let connectedDownRight = 1;
    let connectedUpRight   = 1;
    let tempDownLeft = 1;
    const center = this.#cols*col + row;

    // check down, left and right
    for(let i = 1; i < 5; i++) {
      const indexBelow = center + i;
      const indexLeft = center - (this.#cols*i);
      const indexRight = center + (this.#cols*i);

      if (this.#board[indexBelow] === this.#board[center]) connectedBelow++;
      if(indexLeft > 0 && this.#board[indexLeft] === this.#board[center]) connectedLeft++;
      if(indexRight < this.#board.length && this.#board[indexRight] === this.#board[center]) connectedRight++;
    }

    //check upper left
    for(let i = 1; i < 5; i++) {
      const indexUpLeft = center - (this.#cols*i) - i;

      if(indexUpLeft%this.#cols === 6 || indexUpLeft < 0) break;
      if(this.#board[indexUpLeft] === this.#board[center]) connectedUpLeft++;
    }

    //check down left
    for(let i = 1; i < 5; i++) {
      const indexDownLeft = center - (this.#cols*i) + i;

      if(indexDownLeft%this.#cols === 0 || indexDownLeft < 0) break;
      if(this.#board[indexDownLeft] === this.#board[center]) connectedDownLeft++;
    }

    //check down right
    for(let i = 1; i < 5; i++) {
      const indexDownRight = center + (this.#cols*i) + i;

      if(indexDownRight%this.#cols === 0 || indexDownRight >= this.#board.length) break;
      if(this.#board[indexDownRight === this.#board[center]]) connectedDownRight++;
    }

    //check up right 

    for(let i = 1; i < 5; i++) {
      const indexUpRight = center + (this.#cols*i) - i;

      if(indexUpRight%this.#cols === 6 || indexUpRight >= this.#board.length) break;
      if(this.#board[indexUpRight] === this.#board[center]) connectedUpRight++;
    }


    if (connectedBelow === 5) return true;
    if (connectedLeft + connectedRight - 1 === 5) return true;
    if (connectedUpLeft + connectedDownRight - 1 === 5) return true;
    if (connectedUpRight + connectedDownLeft - 1 === 5) return true;
    return false;
  }

  get getBoard() {
    return this.#board;
  }
}

export default ConnectFour;