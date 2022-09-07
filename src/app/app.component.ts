import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'about';
  flag = 'experience';

  setActive(id: string){
    this.flag = id
  }
  
}
