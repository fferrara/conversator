import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Utterance} from "../../models/utterance";
import {ConversationLoadService} from "../conversation-load.service";

import {jsPlumb} from "jsplumb";
import {ConversationNode} from "../../models/editor/node";
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import {ConversationStateService} from "../conversation-state.service";
import {Observable} from "rxjs/Observable";
import {Readable} from "../../models/readable";

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @ViewChild('container') nodeContainer: ElementRef;

  nodes: ConversationNode[] = []
  private plumb: any;

  constructor(public conversation: ConversationStateService) {
    conversation.get()
      .map(conversation => conversation.getAll())
      .subscribe(readables => this.storeNewNodes(readables))
  }

  private storeNewNodes(readables: Array<Readable>){
    readables
      .filter(readable => ! this.nodes.find(node => node.readable.getId() === readable.getId())) // new readables
      .map((readable, index) => new ConversationNode(125, getYOffset(index), readable)) // map to node
      .forEach(node => this.nodes.push(node)); // add to the list
  }

  ngOnInit() {

  }

  onNodeCreated(event) {
    let newReadable = new Utterance('NOVO' + Math.random().toString(), 'novooo')
    this.conversation.addReadableAfter(event.node.readable.getId(), newReadable)
    /*let newNode = new ConversationNode(125, getYOffset(this.nodes.length), newReadable);
    this.nodes.push(newNode);
    event.node.next = newNode;
    setTimeout(() => {
      this.drawNode(newNode);
      this.drawConnection(event.node, newNode);
    }, 0);*/
  }


}

function getYOffset(index: number): number {
  return 20 + (80 * index)
}
