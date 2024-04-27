import { Component, OnInit } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { SleepService } from '../services/sleep.service';
import { Storage } from '@ionic/storage-angular';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.page.html',
  styleUrls: ['./view-data.page.scss'],
})
export class ViewDataPage implements OnInit {
  overnight:OvernightSleepData[];
  showData:boolean=false;
  showData1:boolean=false;
  sleepiness:StanfordSleepinessData[];


  constructor(private SS:SleepService, public store:Storage) { }

  ngOnInit() {
  }

  getOvernightData() {
    SleepService.AllOvernightData = [];
    this.store.forEach((key, value) => {
      console.log("1")
    });
    this.store.forEach((key, value) => {
      console.log(value)
      if (value.includes('Overnight')) {
        this.SS.logOvernightData(new OvernightSleepData(key.sleepStart, key.sleepEnd));
      }
    });
    this.overnight = SleepService.AllOvernightData;
    this.showData = !this.showData;
  }
  clearOvernight() {
    this.store.clear();
    SleepService.AllOvernightData = [];
  }

  getSleepinessData() {
    SleepService.AllSleepinessData = [];
    this.store.forEach((key, value) => {
      console.log("2")
    });
    this.store.forEach((key, value) => {
      console.log(key, value)
      if (value.includes('Sleepiness')) {
        this.SS.logSleepinessData(new StanfordSleepinessData(key.loggedValue, key.loggedAt));
      }
    });
    this.sleepiness = SleepService.AllSleepinessData;
    this.showData1 = !this.showData1;
  }

  clearSleepiness() {
    this.store.clear();
    SleepService.AllSleepinessData = [];
  }

  
}
