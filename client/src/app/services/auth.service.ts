import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

const url:string='http://localhost:3000/api/';
@Injectable()

 export class authService{
    constructor(private http: HttpClient) { }
    login(payload:any)
    // : Observable<any>
    {
        return this.http.post<any>(url,payload);
    }

  getusers(){
      return this.http.get<any>(url+'/useers');
  }
deleteuser(payload:any){
    return this.http.delete<any>(url,payload);
}
Review(payload:any){
    return this.http.post<any>(url+'/review',payload);
}
adduser(payload:any){
    return this.http.post<any>(url+'/add',payload);
}

edituser(payload:any){
    return this.http.put<any>(url+'/edit',payload);
}
 }

 // import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs/Observable';

// const url:string='http://localhost:3000/api/';
// @Injectable()

//  export class employee{
//     constructor(private http: HttpClient) { }
//     login(payload:any)
//     // : Observable<any>
//     {
//         return this.http.post<any>(url,payload);
//     }
//  }