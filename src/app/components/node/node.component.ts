import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";

import {jsPlumb} from "jsplumb";
import {ConversationNode} from "../../models/editor/node";
import {ConversationStateService} from "../../services/conversation-state.service";

@Component({
  selector: 'conversation-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @ViewChild('nodeEl') nodeElement: ElementRef;
  @Input('node') node: ConversationNode;
  @Output() nodeCreated = new EventEmitter();
  @Output() nodeUpdated = new EventEmitter();

  editing: boolean = false;

  constructor(public conversation: ConversationStateService) {
  }

  ngOnInit() {

  }

  edit(){
    this.editing = true;
  }

  editComplete() {
    this.editing = false;
    this.conversation.update(this.node.readable)
  }

  createNode() {
    this.nodeCreated.emit(this);
  }

}
