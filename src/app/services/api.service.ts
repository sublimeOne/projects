import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoint: string = 'https://jsonplaceholder.typicode.com/albums';//'https://developers.zomato.com/api/v2.1/categories';

  constructor( 
    private http: HttpClient) { 

    }


  getItems() {
    return this.http.get(this.endpoint);
  }


  
}
