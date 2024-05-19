import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiCallsService } from 'src/app/api-calls.service';
import { UtilsService } from 'src/app/utils.service';
import { ValidationComponent } from '../validation/validation.component';
import { __values } from 'tslib';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  data:any;
  isPopUp: boolean = false;
  error: string = '';
  errMsg: string = '';
  isLoading:boolean = false;
  constructor(private frmBldr:FormBuilder, private Utils:UtilsService , private service:ApiCallsService){}
  ngOnInit(): void {
  }

  registraionForm = new FormGroup({
    id :this.frmBldr.control(null,[Validators.required,Validators.email]),
    userName : this.frmBldr.control(null,[Validators.required,Validators.maxLength(10)]),
    Password : this.frmBldr.control(null,[Validators.required]),
    cnfmPassword : this.frmBldr.control(null)
    
  })


  submit(){
    let valid = this.registraionForm.valid;
    let err = ''
    if(!valid){
      this.Utils.error.next('ENTER FULL DETAILS');
      this.errMsg = 'ENTER FULL DETAILS';
      this.isPopUp = true;
      return;
    }else if(this.registraionForm.value.cnfmPassword !== this.registraionForm.value.Password){
      this.errMsg = 'Password Does Not Match';
      this.isPopUp = true;
    }else{
      this.isLoading = true;
      this.service.register(this.registraionForm.value).subscribe((res:any)=>{
      this.data = res;
      this.isLoading = false;
      this.errMsg = 'Successfully Registred';
      this.isPopUp = true;
      })
    }
  }

  bluraction(event:any){
    if(event.required){
    }
  }

}
