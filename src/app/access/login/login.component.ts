import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallsService } from 'src/app/api-calls.service';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm:any
  errMsg: string = '';
  isPopUp: boolean = false;
  isLoading: boolean = false;
constructor(private router:Router, private frmBldr:FormBuilder, private service:ApiCallsService,private Utils:UtilsService){
  this.loginForm = this.frmBldr.group({
    id: this.frmBldr.control(null, [Validators.required, Validators.email]),
    Password: this.frmBldr.control(null,[Validators.required])
  })
}
ngOnInit(): void {}

login(form:any){
  if(!form.valid){
    this.errMsg = 'Please enter full details'
    this.Utils.error.next(this.errMsg);
    return
  }
  this.isLoading = true;
  this.service.LoginAuth(this.loginForm.value.email).subscribe((res:any)=>{
    console.log(res);
    if(res !== ''){
      if(res.Password == form.value.Password){
        this.errMsg = 'Login Success';
        this.isLoading = false;
        this.Utils.error.next(this.errMsg);
      }else{
        this.errMsg = 'Please Enter Valid Password';
        this.isLoading = false;
        this.Utils.error.next(this.errMsg);
      }
    }
  })
}

}
