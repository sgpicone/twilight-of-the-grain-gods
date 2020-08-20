import { WashLog } from './wash-log';
import { SaniLog } from './sani-log';
import { SaleLog } from './sale-log';

export class Keg {
    id: number;
    rwbId: string;
    factorySerial: string;
    datePurchased: Date;
    washHistory: Array<WashLog>;
    saniHistory: Array<SaniLog>;
    saleHistory: Array<SaleLog>;
}
