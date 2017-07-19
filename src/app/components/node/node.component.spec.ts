import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeComponent } from './node.component';
import {ConversationStateMock} from "../../services/conversation-state.service.mock";
import {ConversationStateService} from "../../services/conversation-state.service";
import {ConversationNode} from "../../models/editor/node";
import {Utterance} from "../../models/utterance";

describe('NodeComponent', () => {
  let conversationState = {
    provide: ConversationStateService,
    useClass: ConversationStateMock
  };

  let component: NodeComponent;
  let fixture: ComponentFixture<NodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeComponent ],
      providers: [conversationState]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeComponent);
    component = fixture.componentInstance;
    component.node = new ConversationNode(5, 5, new Utterance("ID", "Ehy, yo!"));

    fixture.detectChanges();
  });

  it('should not be created', () => {
    expect(component).toBeTruthy();
  });
});
