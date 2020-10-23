import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KegService } from '../keg.service';
import { Keg } from '../_models/keg';

@Component({
  selector: 'app-keg-info',
  templateUrl: './keg-info.component.html',
  styleUrls: ['./keg-info.component.scss']
})
export class KegInfoComponent implements OnInit {
  keg: Keg;

  constructor(
    private kegService: KegService,
    private route: ActivatedRoute) {
    this.keg = null;
  }

  ngOnInit() {
    this.getKeg();
  }

  getKeg() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.kegService.getKegById(id).subscribe((keg: Keg) => { 
      this.keg = keg;
      console.log(this.keg);
    });
  }

}
