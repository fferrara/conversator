import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Utterance} from "../../models/utterance";
import {ConversationService} from "../conversation.service";
import {Readable} from "../../models/readable";

import {jsPlumb} from "jsplumb";
import {ConversationNode} from "../../models/editor/node";
import {Connectable} from "../../models/connectable";

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @ViewChild('container') nodeContainer: ElementRef;

  nodes: Array<ConversationNode>;
  private plumb: any;

  constructor(public conversation: ConversationService) {
    this.nodes = conversation.load()
      .map((r: Readable, index) => {
      return new ConversationNode(125, getYOffset(index), r);
    });

  }

  ngOnInit() {
    jsPlumb.ready(() => {
      this.plumb = jsPlumb.getInstance();
      this.plumb.setContainer(this.nodeContainer.nativeElement);

      this.nodes.forEach((node: ConversationNode) => {
        this.buildNode(node);

        if (node.hasNext()){
          let utterance = node.readable as Utterance;
          let nextNode = this.nodes.find(node => node.id === utterance.next().getId());
          this.buildConnection(node, nextNode)
        }
      })
    });
  }

  onNodeCreated(event) {
    let newReadable = new Utterance('NOVO' + this.nodes.length, 'novooo')
    let newNode = new ConversationNode(125, getYOffset(this.nodes.length), newReadable);
    this.nodes.push(newNode);
    event.node.next = newNode;
    setTimeout(() => {
      this.buildNode(newNode);
      this.buildConnection(event.node, newNode);
      }, 0);

  }

  private buildNode(node: ConversationNode) {
    console.log(node.id);
    this.plumb.addEndpoint(node.id, {
      anchor: 'Bottom',isSource: true, isTarget: false, endpoint:[ "Dot", { radius:5 } ]
    });
    this.plumb.addEndpoint(node.id, {
      anchor: 'Top',isSource: false, isTarget: true, endpoint:[ "Dot", { radius:5 } ]
    });

    this.plumb.draggable(node.id)
  }

  private buildConnection(node: ConversationNode, nextNode: ConversationNode) {
    this.plumb.connect({
      source: node.id,
      target: nextNode.id,
      anchors: ['Bottom', 'Top'],
      endpointStyle:{
        radius: 5
      }
    })
  }
}

function getYOffset(index: number): number {
  return 20 + (80 * index)
}
