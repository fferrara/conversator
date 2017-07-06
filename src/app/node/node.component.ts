import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Readable} from "../../models/readable";

import {jsPlumb} from "jsplumb";
import {ConversationNode} from "../../models/editor/node";

@Component({
  selector: 'conversation-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @ViewChild('nodeEl') nodeElement: ElementRef;
  @Input('node') node: ConversationNode;
  @Output() nodeCreated = new EventEmitter();

  editing: boolean = false;

  constructor() {
  }

  ngOnInit() {
    jsPlumb.ready(() => {
      let plumb = jsPlumb.getInstance();


    });
  }

  edit(){
    this.editing = true;
  }

  editComplete() {
    this.editing = false;
    console.log('store')
  }

  createNode() {
    this.nodeCreated.emit(this);
  }

}
