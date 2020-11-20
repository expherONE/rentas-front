import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {  }

  getCrud(){
    return this.http.get('http://localhost:4201/platzi/products/all');
  }
}
