import { Car, User } from "../types/store-cars";

export const getCars = (): Car[] => [
    {brand: "Audi", id: 1, year: 2020},
    {brand: "Nissan", id: 2, year: 2022},
    {brand: "BMW", id: 3, year: 2016},
    {brand: "Porsche", id: 4, year: 2002},
    {brand: "Mazda", id: 5, year: 2012},
    {brand: "Hyundai", id: 6, year: 2009},
];

export const getUsers = (): User[] => [
    {id: 1, name: "Belkov I.A."},
    {id: 2, name: "Ivanov I.I."},
    {id: 3, name: "Alexeev A.A."},
    {id: 4, name: "Durov D.M."},
    {id: 5, name: "Nikolaeva S.I."},
    {id: 6, name: "Kim T.H."},
]
