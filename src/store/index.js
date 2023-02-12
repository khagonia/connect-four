import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './gameboard-slice';

const store = configureStore({
  reducer: {
    game: gameReducer
  }
})

export default store;