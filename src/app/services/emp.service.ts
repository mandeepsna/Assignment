import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private client:HttpClient) {
      
   }
   getdata()
   {
        return this.client.get('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');
   }
}
