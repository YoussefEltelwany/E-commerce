import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})


export class ProductsService {
 
  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any>{
   return this.http.get(environment.baseApi + 'products');
    }

    Getallcategories():Observable<any>{
     return this.http.get(environment.baseApi +'products/categories')
    }

    GetproductsBycategories(keyword:string):Observable<any>{
      return this.http.get(environment.baseApi +'products/category/'+ keyword)
     }

  
     GetproductsByid(id: number):Observable<any>{
       return this.http.get(environment.baseApi +'products/'+ id)
      }

  }

