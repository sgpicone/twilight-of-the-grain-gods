import { Injectable } from '@angular/core';
import { Adapter } from '../../shared/adapter';

export class WashLog {
    constructor(
        public date: Date,
        public chemicals: string
    ) { }
}

@Injectable({
    providedIn: "root",
})
export class WashLogAdapter implements Adapter<WashLog> {
    adapt(item: any): WashLog {
        return new WashLog(item.WashDate,
            item.WashChemicals);
    }

    adaptList(itemList: Array<any>): Array<WashLog> {
        return itemList.map(item => this.adapt(item));
    }
}