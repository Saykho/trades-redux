import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { TradeActionType } from "../types/store-trades";
import { Link } from "react-router-dom";
import "./Store.scss";

export function Store() {
    const dispatch = useDispatch();
    const cars = useTypedSelector(c => c.cars.cars);
    const users = useTypedSelector(u => u.cars.users);
    const [selectedCarId, setSelectedCarId] = useState<number>(0);
    const [selectedUserId, setSelectedUserId] = useState<number>(0);
    const [coast, setCoast] = useState<number>(0);

    return (
        <div className="select-menu">
            <select className="select-menu__cars"
                    value={selectedCarId}
                    onChange={e => {
                        setSelectedCarId(+e.target.value);
                    }}>
                <option hidden value={0}>Select one...</option>
                {cars.map(car => (
                    <option
                        value={car.id}
                        key={car.id}
                    >
                        {car.brand}, {car.year}
                    </option>
                ))}
            </select>
            <select className="select-menu__users"
                    value={selectedUserId}
                    onChange={e => {
                        setSelectedUserId(+e.target.value);
                    }}>
                <option hidden value={0}>Select one...</option>
                {users.map(user => (
                    <option
                        value={user.id}
                        key={user.id}
                    >
                        {user.name}
                    </option>
                ))}
            </select>
            <input className="select-menu__coast"
                   value={coast}
                   type="number"
                   onInput={(e: FormEvent<HTMLInputElement>) => {
                       const target = e.target as HTMLInputElement;
                       setCoast(+target.value);
                   }}/>
            <div>
                {!!(selectedCarId && selectedUserId && coast > 0) &&
                    <button className="select-menu__make-btn"
                            onClick={() => {
                                dispatch({
                                    type: TradeActionType.MAKE_TRADE,
                                    payload: {
                                        carId: selectedCarId,
                                        userId: selectedUserId,
                                        coast: coast,
                                    }
                                });
                                setSelectedCarId(0);
                                setSelectedUserId(0);
                                setCoast(0);
                            }}>Make a trade</button>}
            </div>
            <br/>
            <Link to="/trades">
                <button className="select-menu__go-btn">Go to trades</button>
            </Link>
        </div>
    );
}