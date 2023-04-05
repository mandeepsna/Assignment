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
   createData(data:any)
   {
          return this.client.post('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001',data);
   }

  employee = [
    {
      id: 101,
      policyName: 'xyz',
      salary: 500000,
      claimedAmount: 50000,
      numberOfDependents: 3,
      color:'green'
    },
    {
      id: 102,
      policyName: 'abc',
      salary: 300000,
      claimedAmount: 40000,
      numberOfDependents: 4,
      color:'yellow'
    },
    {
      id: 103,
      policyName: 'def',
      salary: 800000,
      claimedAmount: 30000,
      numberOfDependents: 2,
      color:'aqua'
    },
    {
      id: 104,
      policyName: 'ghi',
      salary: 1000000,
      claimedAmount: 20000,
      numberOfDependents: 5,
      color:'blue'
    },
    {
      id: 105,
      policyName: 'jkl',
      salary: 900000,
      claimedAmount: 10000,
      numberOfDependents: 6,
      color:'orange'
    },
    {
      id: 106,
      policyName: 'mno',
      salary: 400000,
      claimedAmount: 60000,
      numberOfDependents: 4,
      color:'grey'
    },
    {
      id: 107,
      policyName: 'pqr',
      salary: 300000,
      claimedAmount: 70000,
      numberOfDependents: 1,
      color:'red'
    },
    {
      id: 108,
      policyName: 'stu',
      salary: 700000,
      claimedAmount: 80000,
      numberOfDependents: 2,
      color:'	#0040ff'
    },
  ];


  getChartData()
  {
      return this.employee;
  }
}