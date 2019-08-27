import { FormControl, Validators } from '@angular/forms';
import { Grain } from './grain.model';

export class GrainForm {
    name = new FormControl();
    amount = new FormControl();
    amountUnit = new FormControl();
    color = new FormControl();
    brand = new FormControl();
    notes = new FormControl();

    constructor(grain: Grain) {
        this.name.setValue(grain.name);
        this.name.setValidators([Validators.required]);

        this.amount.setValue(grain.amount);
        this.amount.setValidators([Validators.required]);

        this.amountUnit.setValue(grain.amountUnit);
        this.amountUnit.setValidators([Validators.required]);

        this.color.setValue(grain.color);
        this.color.setValidators([Validators.required]);

        this.brand.setValue(grain.brand);

        this.notes.setValue(grain.notes);
    }
}
