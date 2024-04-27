import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-overnight',
  templateUrl: './overnight.page.html',
  styleUrls: ['./overnight.page.scss'],
})
export class OvernightPage implements OnInit {
  start:string;
  end:string;
  convertStart:Date;
  convertEnd:Date;
  
  constructor(private SS:SleepService, public store:Storage) { }

  ngOnInit() {
    
  }

  enterDate() {
    this.convertStart = new Date(this.start);
    this.convertEnd = new Date(this.end);

    let OSD = new OvernightSleepData(this.convertStart, this.convertEnd);
    // this.SS.logOvernightData(OSD);
    this.store.set('Overnight'+ OSD.id, OSD)
    // console.log(SleepService.AllOvernightData);
    this.store.forEach((key, value, index) => {
      console.log(key)
    });
  }
}
