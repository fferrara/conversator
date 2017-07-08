import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Utterance} from "../../models/utterance";
import {ConversationLoadService} from "../conversation.service";

import {jsPlumb} from "jsplumb";
import {ConversationNode} from "../../models/editor/node";
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @ViewChild('container') nodeContainer: ElementRef;

  nodes: Array<ConversationNode> = [];
  private plumb: any;

  constructor(public loader: ConversationLoadService) {
    loader.load()
      .mergeMap(conversation => conversation.getAll())
      .map(readable => new ConversationNode(125, getYOffset(this.nodes.length), readable))
      .subscribe(node => this.nodes.push(node))
  }

  ngOnInit() {
    jsPlumb.ready(() => {
      this.plumb = jsPlumb.getInstance();
      this.plumb.setContainer(this.nodeContainer.nativeElement);

      this.nodes.forEach(node => this.drawNode(node));
      this.drawConnections();
    });
  }

  onNodeCreated(event) {
    let newReadable = new Utterance('NOVO' + this.nodes.length, 'novooo')
    let newNode = new ConversationNode(125, getYOffset(this.nodes.length), newReadable);
    this.nodes.push(newNode);
    event.node.next = newNode;
    setTimeout(() => {
      this.drawNode(newNode);
      this.drawConnection(event.node, newNode);
    }, 0);
  }

  private drawNode(node: ConversationNode) {
    this.plumb.addEndpoint(node.id, {
      anchor: 'Bottom', isSource: true, isTarget: false, endpoint: ["Dot", {radius: 5}]
    });
    this.plumb.addEndpoint(node.id, {
      anchor: 'Top', isSource: false, isTarget: true, endpoint: ["Dot", {radius: 5}]
    });

    this.plumb.draggable(node.id)
  }

  private drawConnections() {
    this.nodes
      .filter(node => node.hasNext())
      .forEach(node => {
        let c = node.readable as Utterance;
        let nextNode = this.nodes.find(node => node.id === c.next());
        this.drawConnection(nextNode, node);
      })
  }

  private drawConnection(node: ConversationNode, nextNode: ConversationNode) {
    this.plumb.connect({
      source: node.id,
      target: nextNode.id,
      anchors: ['Bottom', 'Top'],
      endpointStyle: {
        radius: 5
      }
    })
  }
}

function getYOffset(index: number): number {
  return 20 + (80 * index)
}
