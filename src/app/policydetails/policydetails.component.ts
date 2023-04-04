import { Component } from '@angular/core';

@Component({
  selector: 'app-policydetails',
  templateUrl: './policydetails.component.html',
  styleUrls: ['./policydetails.component.css'],
})
export class PolicydetailsComponent {
  policyamt: any[] = [];
  number: number = 10;
  employee = [
    {
      id: 101,
      policyName: 'xyz',
      salary: 500000,
      claimedAmount: 50000,
      numberOfDependents: 3,
    },
    {
      id: 102,
      policyName: 'abc',
      salary: 300000,
      claimedAmount: 40000,
      numberOfDependents: 4,
    },
    {
      id: 103,
      policyName: 'def',
      salary: 800000,
      claimedAmount: 30000,
      numberOfDependents: 2,
    },
    {
      id: 104,
      policyName: 'ghi',
      salary: 1000000,
      claimedAmount: 20000,
      numberOfDependents: 5,
    },
    {
      id: 105,
      policyName: 'jkl',
      salary: 900000,
      claimedAmount: 10000,
      numberOfDependents: 6,
    },
    {
      id: 106,
      policyName: 'mno',
      salary: 400000,
      claimedAmount: 60000,
      numberOfDependents: 4,
    },
    {
      id: 107,
      policyName: 'pqr',
      salary: 300000,
      claimedAmount: 70000,
      numberOfDependents: 1,
    },
    {
      id: 108,
      policyName: 'stu',
      salary: 700000,
      claimedAmount: 80000,
      numberOfDependents: 2,
    },
  ];

  getTotal(i: number) {
    return this.policyamt[i];
  }
  ngOnInit() {
    this.policyamt = this.employee.map((num) => {
      if (num.salary < 500000) {
        return 1000000;
      } else {
        return num.salary * 2.5;
      }
    });
  }
}
