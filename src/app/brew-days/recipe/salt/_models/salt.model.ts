import { UnitEnum } from '../../../../shared/unit';

export class Salt {
    name: string;
    amount: number;
    amountUnit: UnitEnum = UnitEnum.GRAMS;
    purpose: string;
    notes: string;
}
