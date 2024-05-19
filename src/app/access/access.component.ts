import { Component } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent {

    constructor(private utils:UtilsService){}
  error(){
    this.utils.error.subscribe((err:any) =>{
      this.error = err;
    })
  }
}
