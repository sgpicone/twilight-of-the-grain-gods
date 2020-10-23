import { Injectable } from '@angular/core';
import { Adapter } from '../../shared/adapter';

export class WashLog {
    constructor(
        public date: Date,
        public chemical: string
    ) { }
}

@Injectable({
    providedIn: "root",
})
export class WashLogAdapter implements Adapter<WashLog> {
    adapt(item: any): WashLog {
        return new WashLog(item.date,
            item.chemical);
    }
}