import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import columnsReducer from "./columns/columns.reducer";
import deckReducer from "./deck/deck.reducer";
import gameBoardReducer from "./gameBoard/gameBoard.reducer";
import goalReducer from "./goal/goal.reducer";
import pagesReducer from "./pages/pages.reducer";
import highscoreReducer from "./highScores/highscores.reducer";
import gameConfigReducer from "./gameConfig/gameConfig.reducer";
import { createLogger } from 'redux-logger';


export const rootReducer = {
  Columns: columnsReducer,
  Deck: deckReducer,
  GameBoard: gameBoardReducer,
  Goal: goalReducer,
  Pages: pagesReducer,
  HighScores: highscoreReducer,
  GameConfig: gameConfigReducer
};

const combinedRootReducer = combineReducers(rootReducer);

// const loggerMiddleware = createLogger({
//   // ...options
//   diff: true
// })

export const store = createStore(combinedRootReducer,  applyMiddleware(
  // loggerMiddleware
));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
