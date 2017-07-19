import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, IterableDiffer, IterableDiffers, OnInit,
  Output
} from '@angular/core';
import {jsPlumb} from "jsplumb";
import {ConversationNode} from "../../models/editor/node";
import {Utterance} from "../../models/utterance";

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodeListComponent implements OnInit {

  @Input() nodes: Array<ConversationNode>;
  @Output() nodeCreated = new EventEmitter();

  private plumb: any;
  private iterableDiffer: IterableDiffer<ConversationNode>;
  private drawnNodes: Array<ConversationNode> = [];

  constructor(private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
    jsPlumb.ready(() => {
      this.plumb = jsPlumb.getInstance();
    });
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.nodes);
    if (changes) {
      setTimeout(() => {
        this.nodes
          .filter(node => this.drawnNodes.indexOf(node) < 0)
          .forEach(node => this.drawNode(node));
        this.drawConnections();
      }, 0)
    }
  }

  onNodeCreated(event) {
    this.nodeCreated.emit(event)
  }

  private drawNode(node: ConversationNode) {
    this.plumb.addEndpoint(node.id, {
      anchor: 'Bottom', isSource: true, isTarget: false, endpoint: ["Dot", {radius: 5}]
    });
    this.plumb.addEndpoint(node.id, {
      anchor: 'Top', isSource: false, isTarget: true, endpoint: ["Dot", {radius: 5}]
    });

    this.plumb.draggable(node.id)
    this.drawnNodes.push(node);
  }

  private drawConnections() {
    this.nodes
      .filter(node => node.hasNext())
      .forEach(node => {
        let c = node.readable as Utterance;
        let nextNode = this.nodes.find(node => node.id === c.next());
        this.drawConnection(node, nextNode);
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
