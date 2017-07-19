import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsonBarOpened = false;

  toggleJsonBar(opened: boolean){
    this.jsonBarOpened = opened;
  }
}
