import { Injectable } from '@angular/core';

import { LoggerService } from "../core/logger.service";
import { Business } from './business';
import { BUSINESSES } from './mock-businesses';


@Injectable()
export class BusinessService {
    list: Business[] = [];
    selected: Business;

    constructor( private logger: LoggerService ) {}

    /* Add a business */
    add(place: any) {
        let newPlace = new Business(place);
        this.list.push(newPlace);
    }

    /* Get all business (load the dummy data) */
    getBusinesses(): Promise<Business[]> {
        return Promise.resolve(BUSINESSES);
    }

    /* Get a specific business */
    getBusiness(id: number) {
    // getBusiness(id: number): Promise<Business> {
        this.logger.log('BusinessService.getBusiness( ' + id + ' )');
        this.list = BUSINESSES;
        this.selected = this.list.find(business => business.id === id);
        return this.selected;
        // return this.getBusinesses()
        //     .then( businesses => businesses.find(business => business.id === id));
    }
}