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
constructor(private  post:EmpService,private router:Router ) {
 
 }
 onBtnClick()
 {
   this.router.navigate(['/addnewuser'])
 }
delete(index:number)
{
   this.posts.splice(index,1)
}
 

ngOnInit()
{
    this.post.getdata().subscribe(response=>
      {
         this.posts=response;
      })
}
}
