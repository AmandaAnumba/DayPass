"use strict";
var mock_businesses_1 = require('../search/mock-businesses');
var mock_users_1 = require('../user/mock-users');
exports.RESERVATIONS = [
    {
        id: 0,
        date: "12/12/2016",
        time: "15:00",
        business: mock_businesses_1.BUSINESSES[0],
        user: mock_users_1.USERS[0],
        stylist: {},
        isPassed: false,
        isFulfilled: false
    },
    {
        id: 1,
        date: "1/8/2017",
        time: "11:00",
        business: mock_businesses_1.BUSINESSES[1],
        user: mock_users_1.USERS[0],
        stylist: {},
        isPassed: false,
        isFulfilled: false
    }
];
