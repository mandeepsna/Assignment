import { Component } from '@angular/core';
import { EmpService } from '../services/emp.service';
import { Router ,Route, OutletContext} from '@angular/router';
@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent {
posts:any;
empid:any;
constructor(private  post:EmpService,private route:Router ) {
 
 }
 onBtnClick()
 {
    
  this.route.navigate(['/edit',1])
 }
delete(index:number)
{
   this.posts.splice(index,1);
}
 

ngOnInit()
{
  
  this.post.getdata().subscribe(response=>
      {
         this.posts=response;
      })
     
}
}
