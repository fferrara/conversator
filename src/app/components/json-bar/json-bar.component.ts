import {Component, Input, OnInit} from '@angular/core';
import {ConversationStateService} from "../../services/conversation-state.service";
import {ExporterService} from "../../services/exporter.service";

@Component({
  selector: 'json-bar',
  templateUrl: './json-bar.component.html',
  styleUrls: ['./json-bar.component.css']
})
export class JsonBarComponent implements OnInit {
  public conversationJson: string;
  @Input() allowEdit: boolean;

  constructor(public conversation: ConversationStateService, public exporter: ExporterService) {

  }

  ngOnInit() {
    this.conversation.get()
      .map(conversation => this.exporter.serialize(conversation))
      .subscribe(serialized => this.conversationJson = serialized);
  }

  onBackdropClick() {
    console.log('click')
  }

}
