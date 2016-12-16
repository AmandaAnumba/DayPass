"use strict";
var Reservation = (function () {
    function Reservation(options) {
        this.id = options.id;
        this.date = options.date;
        this.time = options.time;
        this.business = options.business;
        this.user = options.user;
        this.stylist = options.stylist;
        this.isPassed = options.isPassed;
        this.isFulfilled = options.isFulfilled;
    }
    return Reservation;
}());
exports.Reservation = Reservation;
