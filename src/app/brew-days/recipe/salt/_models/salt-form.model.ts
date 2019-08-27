import { FormControl, Validators } from '@angular/forms';
import { Salt } from './salt.model';

export class SaltForm {
    name = new FormControl();
    amount = new FormControl();
    unit = new FormControl();
    purpose = new FormControl();
    notes = new FormControl();

    constructor(salt: Salt) {
        this.name.setValue(salt.name);
        this.name.setValidators([Validators.required]);

        this.amount.setValue(salt.amount);
        this.amount.setValidators([Validators.required]);

        this.unit.setValue(salt.amountUnit);
        this.unit.setValidators([Validators.required]);

        this.purpose.setValue(salt.purpose);
        this.purpose.setValidators([Validators.required]);

        this.notes.setValue(salt.notes);
    }
}
