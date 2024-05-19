import { Injectable } from '@angular/core';
import {Observable,map,catchError} from 'rxjs'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  UsersUrl='https://rest-api-yhi2.onrender.com/user';

  usersData:any =[
    {name:'manikanta',age:26,village:'mathukumilli'},
    {name:'Nabi',age:25,village:'kakinda'},
    {name:'Venkanna',age:25,village:'vadlamuru'},
    {name:'krishna',age:27,village:'mathukumilli'}
  ] 


  constructor( private http:HttpClient) { }

  public register(login: any): Observable<any> {
    return this.http.post<any>(this.UsersUrl,login).pipe(
      map(response => response),
      catchError((err, caught) => {
        return err;
      })
    );
  }

  LoginAuth(id:any){
    return this.http.get(this.UsersUrl+"/"+id).pipe(
      map(response => response),
      catchError((err, caught) => {
        return err;
      })
    );
  }


}
