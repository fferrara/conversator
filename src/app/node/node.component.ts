import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Readable} from "../../models/readable";
import {Connectable} from "../../models/connectable";

@Component({
  selector: 'conv-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @Input('content') nodeContent: Readable;
  @Input() childs: Array<NodeComponent>;
  @Output() nodeCreated = new EventEmitter();

  constructor() {
    this.childs = [];
  }

  ngOnInit() {
  }

  createNode() {
    this.nodeCreated.emit(this);
  }

}
