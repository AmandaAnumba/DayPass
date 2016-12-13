"use strict";
var User = (function () {
    // reservations: [];
    // reviews: [];
    // deals: [];
    function User(options) {
        this.id = options.id;
        this.name = options.name;
        this.phone = options.phone;
        this.email = options.email;
        this.avatar = options.avatar;
    }
    return User;
}());
exports.User = User;
