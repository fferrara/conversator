import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import "rxjs/add/operator/take";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarCollapsed: boolean = true;
  private jsonBarOpened = false;

  @Output() onToggleJsonBar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleJsonBar() {
    this.onToggleJsonBar.emit(! this.jsonBarOpened);
    this.jsonBarOpened = ! this.jsonBarOpened;
  }

}
