export interface Trade {
    id: number;
    coast: number;
    carId: number;
    userId: number;
    date: Date;
}

export interface TradeState {
    trades: Trade[];
    idCounter: number;
}

export enum TradeActionType {
    MAKE_TRADE = "MAKE_TRADE",
}

interface MakeTradeAction {
    type: TradeActionType.MAKE_TRADE;
    payload: Trade;
}

export type TradeAction = MakeTradeAction;