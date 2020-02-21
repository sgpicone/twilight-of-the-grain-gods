import { UnitEnum } from '../../../../shared/unit';
import { StageEnum } from '../../../../shared/stage';

export class Addition {
    name: string;
    amount: number;
    amountUnit: UnitEnum = UnitEnum.OUNCES;
    additionStage: StageEnum = StageEnum.BOIL;
    additionTime: number;
    purpose: string;
    notes: string;
}
