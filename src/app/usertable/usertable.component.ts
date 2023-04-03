import { Component } from '@angular/core';
import { EmpService } from '../services/emp.service';
@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent {
posts:any;
constructor(private  post:EmpService) { }

ngOnInit()
{
    this.post.getdata().subscribe(response=>
      {
         this.posts=response;
      })
}
}
