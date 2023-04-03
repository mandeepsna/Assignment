import { Component } from '@angular/core';

@Component({
  selector: 'app-addnewuser',
  templateUrl: './addnewuser.component.html',
  styleUrls: ['./addnewuser.component.css']
})
export class AddnewuserComponent {
save(data:any)
{
      console.log(data);
      data.reset();
}
}
