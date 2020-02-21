import { UnitEnum } from '../../../../shared/unit';
import { StageEnum } from '../../../../shared/stage';

export class Hop {
    name: string;
    amount: number;
    amountUnit: UnitEnum = UnitEnum.OUNCES;
    additionStage: StageEnum = StageEnum.BOIL;
    alpha: number;
    additionTime: number;
    ibuContent: number;
    notes: string;
}
