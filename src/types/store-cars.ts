export interface Car {
    id: number;
    brand: string;
    year: number;
}

export interface User {
    id: number;
    name: string;
}

export interface CarState {
    cars: Car[];
    users: User[];
}

export type CarAction = {};
