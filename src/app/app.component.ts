import { Component } from '@angular/core';
import { DataService } from './data.service';
DataService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  fetchedData:any
  constructor(private _dataService: DataService){

  }
  ngOnInit() {
    this._dataService.getData().subscribe((data) => {
      console.log(data);
      this.fetchedData=data;
    })
   
    
  }
  determineColor(num:number){
    if(num>0 && num<3){
      return 'red'
    }
    else if(num>3 && num<10){
      return 'yellow'
    }
    else if(num>10){
      return 'green'
    }
    else{
      return 'default'
    }
  }
}
