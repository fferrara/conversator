import {
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {NodeComponent} from "../node/node.component";
import {Utterance} from "../../models/utterance";

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @ViewChild("nodes", { read: ViewContainerRef }) nodeContainer;

  private nodeFactory: ComponentFactory<NodeComponent>;

  constructor(private resolver: ComponentFactoryResolver) {
    this.nodeFactory  = this.resolver.resolveComponentFactory(NodeComponent);


  }

  ngOnInit() {
    let u1 = new Utterance('aaaaa');
    let u2 = new Utterance('bbbbb');
    let u3 = new Utterance('ccccc');
    let root: ComponentRef<NodeComponent> = this.nodeContainer.createComponent(this.nodeFactory);
    root.instance.nodeContent = u1;

    let child1: ComponentRef<NodeComponent> = this.createNode(root.instance);
    child1.instance.nodeContent = u2;

    let child2: ComponentRef<NodeComponent> = this.createNode(child1.instance);
    child2.instance.nodeContent = u3;
  }

  private createNode(parent: NodeComponent) {
    let child: ComponentRef<NodeComponent> = this.nodeContainer.createComponent(this.nodeFactory);
    parent.childs.push(child.instance);
    child.instance.nodeCreated.subscribe(this.createNode.bind(this));

    return child;
  }

}
