import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-brew-days-create',
  templateUrl: './brew-days-create.component.html',
  styleUrls: ['./brew-days-create.component.scss']
})
export class BrewDaysCreateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
