import { TradeAction, TradeActionType, TradeState } from "../../types/store-trades";

const initialTrade: TradeState = {
    trades: [],
    idCounter: 1
};

export const tradesReducer = (state = initialTrade, action: TradeAction): TradeState => {
    switch (action.type) {
        case TradeActionType.MAKE_TRADE: {
            return {
                ...state, trades: [...state.trades, {
                    id: state.idCounter,
                    coast: action.payload.coast,
                    carId: action.payload.carId,
                    userId: action.payload.userId,
                    date: new Date()
                }],
                idCounter: state.idCounter + 1
            };
        }
        default:
            return state;
    }
};