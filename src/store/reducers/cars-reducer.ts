import { getCars, getUsers } from "../../mocks/data-list";
import { CarAction, CarState } from "../../types/store-cars";

const initialState: CarState = {
    cars: getCars(),
    users: getUsers(),
};

export const carsReducer = (state = initialState, action: CarAction): CarState => {
    return state;
};

