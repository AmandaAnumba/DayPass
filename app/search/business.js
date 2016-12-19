"use strict";
var Business = (function () {
    // gallery: Array<2>;
    // stylists: [];
    // appointments: [];
    // calendar: [];
    // coupons: [];
    // reviews: [];
    function Business(options) {
        this.id = options.id;
        this.type = options.type;
        this.name = options.name;
        this.address = options.address;
        this.city = options.city;
        this.state = options.state;
        this.zip = options.zip;
        this.phone = options.phone;
        this.website = options.website;
        this.image = options.image;
        this.rating = options.rating;
        this.price_level = options.price_level;
        this.location = options.location;
        this.contact_name = options.contact_name;
        this.contact_email = options.contact_email;
        this.contact_phone = options.contact_phone;
    }
    return Business;
}());
exports.Business = Business;
