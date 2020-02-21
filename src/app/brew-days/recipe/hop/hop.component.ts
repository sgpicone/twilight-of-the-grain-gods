import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UnitEnum } from '../../../shared/unit';
import { StageEnum } from '../../../shared/stage';

@Component({
  selector: 'app-hop',
  templateUrl: './hop.component.html',
  styleUrls: ['./hop.component.scss']
})
export class HopComponent implements OnInit {
  @Input() hopForm: FormGroup;
  @Input() index: number;
  @Output() deleteHop: EventEmitter<number> = new EventEmitter();

  constructor() { }

  units = UnitEnum;
  stages = StageEnum;

  ngOnInit() { }

  delete() {
    this.deleteHop.emit(this.index);
  }

}
