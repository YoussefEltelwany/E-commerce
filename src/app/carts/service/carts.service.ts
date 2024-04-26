import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }


  CreateNewCart(module :any):Observable<any>{
    return this.http.post(environment.baseApi + 'carts', module);
  }
}
