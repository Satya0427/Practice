import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit{

  @Input() isLoading:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.isLoading)
  }

}
