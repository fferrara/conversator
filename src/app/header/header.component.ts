import { Component, OnInit } from '@angular/core';
import {ExporterService} from "../exporter.service";
import {ConversationLoadService} from "../conversation-load.service";
import {ConversationStateService} from "../conversation-state.service";
import 'rxjs/add/operator/take'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarCollapsed: boolean = true;

  constructor(public conversation: ConversationStateService, public exporter: ExporterService) { }

  ngOnInit() {
  }

  exportConversation() {
    this.conversation.get()
      .take(1)
      .map(conversation => this.exporter.serialize(conversation))
      .subscribe(serialized => this.show(serialized));
  }

  private show(serialized: string){
    console.log(serialized);
  }

}
