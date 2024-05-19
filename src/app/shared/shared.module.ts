import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [ 
    LoaderComponent, FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    LoaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
