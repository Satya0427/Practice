import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  error = ''
  fldHlp: any;
  
  constructor(private Utils:UtilsService){
    
    
  }

    ngOnInit(): void {
      this.Utils.error.subscribe((err:any) =>(this.error = err))
      this.Utils.toolTip.subscribe((hlp:any) =>(this.fldHlp = hlp));
    }


}
