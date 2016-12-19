export class Reservation {
    id: number;
    date: any;
    time: string;
    business: {};         // (foreign key -> Business )
    user: {};             // (foreign key -> User )
    stylist: {};          // (foreign key -> Stylist )
    isPassed: boolean;
    isFulfilled: boolean;

    constructor(options: any) { 
        this.id = options.id;
        this.date = options.date;
        this.time = options.time;
        this.business = options.business;
        this.user = options.user;
        this.stylist = options.stylist;
        this.isPassed = options.isPassed;
        this.isFulfilled = options.isFulfilled;
    }
}