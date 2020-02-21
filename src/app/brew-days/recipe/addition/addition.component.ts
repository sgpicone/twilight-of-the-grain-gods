import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UnitEnum } from '../../../shared/unit';
import { StageEnum } from '../../../shared/stage';



@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit {
  @Input() additionForm: FormGroup;
  @Input() index: number;
  @Output() deleteAddition: EventEmitter<number> = new EventEmitter();

  units = UnitEnum;
  stages = StageEnum;

  constructor() { }

  ngOnInit() { }

  delete() {
    this.deleteAddition.emit(this.index);
  }

}
