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

export class KegSummary {
    constructor(
        public id: number,
        public rwbId: string,
        public factorySerial: string,
        public datePurchased: Date,
        public lastWashDate: Date,
        public lastSaniDate: Date,
        public lastSaleDate: Date,
        public kegType: string
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

@Injectable({
    providedIn: "root",
})
export class KegSummaryAdapter implements Adapter<KegSummary> {
    adapt(item: any): KegSummary {
        return new KegSummary(item.Id,
            item.RWBId,
            item.FactorySerial,
            item.ReceivedDate,
            item.LastWashDate,
            item.LastSaniDate,
            item.LastSaleDate,
            item.Type);
    }
}