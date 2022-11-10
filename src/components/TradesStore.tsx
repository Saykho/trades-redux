import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Link } from "react-router-dom";
import { Trade } from "../types/store-trades";
import "./TradesStore.scss";

export function TradesStore() {
    const trades = useTypedSelector(t => t.trades.trades);
    const cars = useTypedSelector(c => c.cars.cars);
    const users = useTypedSelector(u => u.cars.users);
    const getCarInfo = (carId: number) => {
        const foundCar = cars.find(c => c.id === carId);
        return !!foundCar ? `Brand: ${foundCar.brand}, ${foundCar.year}` : 'Car is not selected';
    };

    const getUserInfo = (userId: number) => {
        const foundUser = users.find(u => u.id === userId);
        return !!foundUser ? `Name: ${foundUser.name}` : 'User is not selected';
    };

    const tradesByUserId = trades.reduce((group: any, trade) => {
        group[trade.userId] = group[trade.userId] ?? []; //?? сравнивает левое и правое значение. Если левое значение = null/undefined, то приравнивается правое значение, иначе левое
        group[trade.userId].push(trade);
        return group;
    }, {});

    const orderUserIds = Object.keys(tradesByUserId).map(userId => +userId); // получение из сгруппированного массива id пользователей в виде чисел

    const tradeList = orderUserIds.map(userId => {
        const userInfo = getUserInfo(userId); // получение информации о пользователе по id
        const userTrades: Trade[] = tradesByUserId[userId]; //получение массива заказов (объекты) на основе id пользователя
        const lastTrade = userTrades[userTrades.length - 1]; // получение последнего заказа
        const allTradesSum = userTrades.reduce((acc: number, userTrade: Trade) => acc + userTrade.coast, 0); //расчет суммы всех заказов
        const carIdInfo = userTrades.map(id => id.carId).join(", "); //получение id машин в заказах в виде строки

        return <div className="trades__trade-list"
                    key={userId}>
            <div>{userInfo}</div>
            <div>Trades count: {userTrades.length}</div>
            <div>Last trade: {lastTrade.coast} $</div>
            <div>All trades sum: {allTradesSum} $</div>
            {userTrades.map(c => (
                <div key={c.carId}>{getCarInfo(c.carId)}</div>
            ))}
        </div>;
    });

    return (
        <>
            <div className="trades">
                {tradeList}
            </div>
            <Link to="/">
                <button className="back-btn">Back</button>
            </Link>
        </>
    );
}