import { BUSINESSES } from '../search/mock-businesses';
import { USERS } from '../user/mock-users';

import { Reservation } from './reservation';

export const RESERVATIONS: Reservation[] = [
    {
        id: 0,
        date: "12/12/2016",
        time: "15:00",
        business: BUSINESSES[0],
        user: USERS[0],
        stylist: {},
        isPassed: false,
        isFulfilled: false
    },
    {
        id: 1,
        date: "1/8/2017",
        time: "11:00",
        business: BUSINESSES[1],
        user: USERS[0],
        stylist: {},
        isPassed: false,
        isFulfilled: false
    }
];