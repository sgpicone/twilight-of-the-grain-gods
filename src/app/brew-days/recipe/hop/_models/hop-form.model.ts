import { Hop } from './hop.model';
import { FormControl, Validators } from '@angular/forms';

export class HopForm {
    name = new FormControl();
    amount = new FormControl();
    amountUnit = new FormControl();
    alpha = new FormControl();
    additionStage = new FormControl();
    additionTime = new FormControl();
    ibuContent = new FormControl();
    notes = new FormControl();

    constructor(hop: Hop) {
        this.name.setValue(hop.name);
        this.name.setValidators([Validators.required]);

        this.amount.setValue(hop.name);
        this.amount.setValidators([Validators.required]);

        this.amountUnit.setValue(hop.amountUnit);
        this.amountUnit.setValidators([Validators.required]);

        this.alpha.setValue(hop.alpha);
        this.alpha.setValidators([Validators.required]);

        this.additionStage.setValue(hop.additionStage);
        this.additionStage.setValidators([Validators.required]);

        this.additionTime.setValue(hop.additionTime);
        this.additionTime.setValidators([Validators.required]);

        this.ibuContent.setValue(hop.ibuContent);

        this.notes.setValue(hop.notes);
    }
}
