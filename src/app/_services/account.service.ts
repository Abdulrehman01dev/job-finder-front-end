import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  register(data: Object[]) : Observable<Object>{
    return this.http.post(`${environment.API_URI}/auth/register` ,{...data})
  }

}
