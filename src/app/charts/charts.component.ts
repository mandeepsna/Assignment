import { Component } from '@angular/core';
import { EmpService } from '../services/emp.service';
import{Chart,registerables} from 'node_modules/chart.js'
Chart.register(...registerables);
 
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  chartData:any;
  plyname:any[]=[];
  slry:any[]=[];
  color:any[]=[];


  constructor(private  post:EmpService ) {
   
   }
   ngOnInit()
{
   
  this.chartData=this.post.getChartData();
    if(this.chartData!=null)
    {
       for(let i=0;i<this.chartData.length;i++)
       {
              this.plyname.push(this.chartData[i].policyName);
              this.slry.push(this.chartData[i].salary);
              this.color.push(this.chartData[i].color);
             
     
       }
    }

    this.RenderChart(this.plyname,this.slry,this.color,'pie' ,'piechart');
    this.RenderChart(this.plyname,this.slry,this.color,'bar' ,'barchart');
    this.RenderChart(this.plyname,this.slry,this.color,'doughnut' ,'doughnut');
    this.RenderChart(this.plyname,this.slry,this.color,'radar' ,'Radar');
}
RenderChart(plyname:any,slry:any,color:any, type:any,id:any ) {
  const myChart=new Chart(id, {
  type: type,
  data:{
     labels: plyname,
     datasets:[{ 
           data:slry,
           label:'Employee Details',
           backgroundColor: color,

     }]
  }
  })
}
}
