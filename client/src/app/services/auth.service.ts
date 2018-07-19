import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

const url: string = 'http://localhost:3000/api/';
@Injectable()

export class authService {
    constructor(private http: HttpClient) { }
    login(payload: any)
    // : Observable<any>
    {
        return this.http.post<any>(url, payload);
    }

    getusers() {
        return this.http.get<any>(url + 'user');
    }
    deleteuser(payload: any) {
        return this.http.delete<any>(url + 'user', { params: payload });
    }
    Review(payload: any) {
        return this.http.post<any>(url + 'feedback', payload);
    }
    newuser(payload: any) {
        return this.http.post<any>(url + 'user', payload);
    }

    edituser(payload: any) {
        return this.http.put<any>(url + 'user', payload);
    }
    getuser(payload){
        return this.http.get<any>(url + 'user/byid', { params: payload });
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