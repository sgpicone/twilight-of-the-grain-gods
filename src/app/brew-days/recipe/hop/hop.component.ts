import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  ngOnInit() { }

  delete() {
    this.deleteHop.emit(this.index);
  }

}
