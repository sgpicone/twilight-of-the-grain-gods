import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grain',
  templateUrl: './grain.component.html',
  styleUrls: ['./grain.component.scss']
})
export class GrainComponent implements OnInit {
  @Input() grainForm: FormGroup;
  @Input() index: number;
  @Output() deleteGrain: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  delete() {
    this.deleteGrain.emit(this.index);
  }

}
