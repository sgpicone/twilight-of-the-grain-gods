import { Injectable } from '@angular/core';
import { Adapter } from '../../shared/adapter';

export class SaniLog {
    constructor(
        public date: Date,
        public chemicals: string
    ) { }
}

@Injectable({
    providedIn: "root",
})
export class SaniLogAdapter implements Adapter<SaniLog> {
    adapt(item: any): SaniLog {
        return new SaniLog(item.SaniDate,
            item.SaniChemicals);
    }

    adaptList(itemList: Array<any>): Array<SaniLog> {
        return itemList.map(item => this.adapt(item));
    }
}