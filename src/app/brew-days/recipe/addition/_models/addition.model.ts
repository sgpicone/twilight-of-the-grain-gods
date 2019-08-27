import { UnitEnum } from '../../../../shared/unit';

export class Addition {
    name: string;
    amount: number;
    amountUnit: UnitEnum = UnitEnum.OUNCES;
    additionTime: number;
    purpose: string;
    notes: string;
}
