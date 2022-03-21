import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(
    private _http: HttpClient) { }



    apiUrl = 'http://localhost:3000/empleados';

    getAllData():Observable<any>
    {
      return this._http.get(`${this.apiUrl}`)
    }

    CreateEmpleado(empleado:any):Observable<any>
    {
      console.log(empleado,"res=====<")
      return this._http.post(`${this.apiUrl}`, empleado)
    }
}
