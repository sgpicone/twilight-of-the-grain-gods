import { WashLog } from './wash-log';
import { SaniLog } from './sani-log';
import { SaleLog } from './sale-log';
import { Adapter } from '../../shared/adapter';
import { Injectable } from '@angular/core';

export class Keg {
    constructor(
        public id: number,
        public rwbId: string,
        public factorySerial: string,
        public datePurchased: Date,
        public washHistory: Array<WashLog>,
        public saniHistory: Array<SaniLog>,
        public saleHistory: Array<SaleLog>
    ) { }
}

@Injectable({
    providedIn: "root",
})
export class KegAdapter implements Adapter<Keg> {
    adapt(item: any): Keg {
        return new Keg(item.Id,
            item.RWBId,
            item.FactorySerial,
            item.ReceivedDate,
            item.washHistory,
            item.saniHistory,
            item.saleHistory);
    }
}
