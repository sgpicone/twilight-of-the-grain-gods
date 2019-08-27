import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit {
  @Input() additionForm: FormGroup;
  @Input() index: number;
  @Output() deleteAddition: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  delete() {
    this.deleteAddition.emit(this.index);
  }

}
