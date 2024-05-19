import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  error = new BehaviorSubject('');
  toolTip = new BehaviorSubject(null);

  constructor() { }

  // updateData(data: any) {
  //   this.error.next(data);
  // }

}
