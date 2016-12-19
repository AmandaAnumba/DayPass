import { Injectable } from '@angular/core';

import { LoggerService } from "../core/logger.service";
import { Reservation } from './reservation';
import { RESERVATIONS } from './mock-reservations';


@Injectable()
export class ReservationService {
    selected: Reservation[] = [];
    
    private logClass:String = "ReservationService";

    constructor( private logger: LoggerService ) {}

    get( userId ) {
        this.logger.log(this.logClass + '.get( userId: ' + userId +' )');

        for ( let i of RESERVATIONS ) {
        	if ( i.user['id'] === userId ) {
        		this.selected.push(i);
        	}
        }

	    return this.selected;
    }
}