import { Component, OnInit } from '@angular/core';
import { KegService } from '../keg.service';
import { Subscription } from 'rxjs';
import { Keg } from '../_models/keg';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.scss']
})
export class KegListComponent implements OnInit {

  kegs: Keg[];

  constructor(private kegService: KegService) { 
    this.kegs = [];
  }

  ngOnInit() {
    this.kegService.list().subscribe((kegs: Keg[]) => {
      this.kegs = kegs;
    });
  }

}
