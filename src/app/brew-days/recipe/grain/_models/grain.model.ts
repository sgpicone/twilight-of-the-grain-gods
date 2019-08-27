import { UnitEnum } from '../../../../shared/unit';

export class Grain {
    name: string;
    amount: number;
    amountUnit: UnitEnum = UnitEnum.POUNDS;
    color: number;
    brand: string;
    notes: string;
}
