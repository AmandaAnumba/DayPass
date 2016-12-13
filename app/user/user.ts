export class User {
    id: number;
    name: string;
    phone: string;
    email: string;
    avatar: string;
    // reservations: [];
    // reviews: [];
    // deals: [];

    constructor(options: any) { 
        this.id = options.id;
        this.name = options.name;
        this.phone = options.phone;
        this.email = options.email;
        this.avatar = options.avatar;
    }
}