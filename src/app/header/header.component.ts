import { Component, OnInit } from '@angular/core';
import {ExporterService} from "../exporter.service";
import {ConversationLoadService} from "../conversation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarCollapsed: boolean = true;

  constructor(public loader: ConversationLoadService, public exporter: ExporterService) { }

  ngOnInit() {
  }

  exportConversation() {
    this.loader.load()
      .map(conversation => this.exporter.serialize(conversation))
      .subscribe(serialized => this.show(serialized));
  }

  private show(serialized: string){
    console.log(serialized);
  }

}
