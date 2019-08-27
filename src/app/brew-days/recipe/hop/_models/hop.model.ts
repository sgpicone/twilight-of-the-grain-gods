import { UnitEnum } from '../../../../shared/unit';

export class Hop {
    name: string;
    amount: number;
    amountUnit: UnitEnum = UnitEnum.OUNCES;
    alpha: number;
    additionTime: number;
    ibuContent: number;
    notes: string;
}
