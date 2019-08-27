import { Addition } from './addition.model';
import { Validators, FormControl } from '@angular/forms';

export class AdditionForm {
    name = new FormControl();
    amount = new FormControl();
    unit = new FormControl();
    time = new FormControl();
    purpose = new FormControl();
    notes = new FormControl();

    constructor(addition: Addition) {
        this.name.setValue(addition.name);
        this.name.setValidators([Validators.required]);

        this.amount.setValue(addition.amount);
        this.amount.setValidators([Validators.required]);

        this.unit.setValue(addition.amountUnit);
        this.unit.setValidators([Validators.required]);

        this.time.setValue(addition.additionTime);
        this.time.setValidators([Validators.required]);

        this.purpose.setValue(addition.purpose);

        this.notes.setValue(addition.notes);
    }
}
