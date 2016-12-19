import { Injectable } from '@angular/core';

import { LoggerService } from "../core/logger.service";
import { User } from './user';
import { USERS } from './mock-users';


@Injectable()
export class UserService {
    private logClass:String = "UserService";

    constructor( private logger: LoggerService ) {}

    getUser() {
        this.logger.log(this.logClass + '.getUser()');

        return USERS[0];
    }
}