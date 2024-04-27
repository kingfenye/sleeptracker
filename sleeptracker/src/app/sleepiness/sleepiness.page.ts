import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';



@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {

  daytimeSleepyDate:string;
  sleepyDate:Date;
  sleepinessVariable:string;

  constructor(private SS:SleepService, public store:Storage) { }

  ngOnInit() {
  }

  logData1() {
    this.sleepyDate = new Date(this.daytimeSleepyDate);

    let SSD = new StanfordSleepinessData(parseInt(this.sleepinessVariable), this.sleepyDate);
    console.log("Variable: ", this.sleepinessVariable, "Date: ", this.sleepyDate);
    // this.SS.logOvernightData(OSD);
    this.store.set('Daytime Sleepiness'+ SSD.id, SSD)
    // console.log(SleepService.AllSleepinessData);

  }

}
