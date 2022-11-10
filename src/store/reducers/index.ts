import { combineReducers } from "redux";
import { tradesReducer } from "./trades-reducer";
import { carsReducer } from "./cars-reducer";

export const rootReducer = combineReducers({
    trades: tradesReducer,
    cars: carsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;