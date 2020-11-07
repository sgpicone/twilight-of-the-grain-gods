import { WashLog, WashLogAdapter } from './wash-log';
import { SaniLog, SaniLogAdapter } from './sani-log';
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
    constructor(private washLogAdapter: WashLogAdapter, private saniLogAdapter: SaniLogAdapter) { }
    adapt(item: any): Keg {
        return new Keg(item.Id,
            item.RWBId,
            item.FactorySerial,
            item.ReceivedDate,
            this.washLogAdapter.adaptList(item.WashHistory),
            this.saniLogAdapter.adaptList(item.SaniHistory),
            item.SaleHistory);
    }

    adaptList(itemList: Array<any>): Array<Keg> {
        return itemList.map(item => this.adapt(item));
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

    adaptList(itemList: Array<any>): Array<KegSummary> {
        return itemList.map(item => this.adapt(item));
    }
}