import { Addition } from './addition.model';
import { Validators, FormControl } from '@angular/forms';

export class AdditionForm {
    name = new FormControl();
    amount = new FormControl();
    amountUnit = new FormControl();
    additionStage = new FormControl();
    additionTime = new FormControl();
    purpose = new FormControl();
    notes = new FormControl();

    constructor(addition: Addition) {
        this.name.setValue(addition.name);
        this.name.setValidators([Validators.required]);

        this.amount.setValue(addition.amount);
        this.amount.setValidators([Validators.required]);

        this.amountUnit.setValue(addition.amountUnit);
        this.amountUnit.setValidators([Validators.required]);

        this.additionStage.setValue(addition.additionStage);
        this.additionStage.setValidators([Validators.required]);

        this.additionTime.setValue(addition.additionTime);
        this.additionTime.setValidators([Validators.required]);

        this.purpose.setValue(addition.purpose);

        this.notes.setValue(addition.notes);
    }
}
