import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit{

  @Input() msg:any;
  @Input() openDilouge:boolean = false
  @Output() exit:any = new EventEmitter();

  constructor(){}
  ngOnInit(): void {

      
  }

  exitPopUp(){
    this.exit.emit();
  }

}
