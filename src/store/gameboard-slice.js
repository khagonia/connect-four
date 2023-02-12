import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'gameboard',
  initialState: { 
    boardState: [], 
    isGameActive: false, 
    player: 1,
    showGameOver: false 
  },
  reducers: {
    updateBoard(state, action) {
      state.boardState = action.payload.newBoardState;
    },

    changePlayer(state) {
      if(state.player === 1) state.player = 2
      else if(state.player === 2) state.player = 1;
    },

    toggleGame (state) {
      state.isGameActive = !state.isGameActive;
    },

    showGameOver (state, action) {
      state.showGameOver = action.payload;
    }
  }
})

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;