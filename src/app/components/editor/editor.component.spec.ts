import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorComponent } from './editor.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ConversationStateService} from "../../services/conversation-state.service";
import {ConversationStateMock} from "../../services/conversation-state.service.mock";
import {ConversationNode} from "../../models/editor/node";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/merge';
import {Utterance} from "../../models/utterance";
import {Conversation} from "../../models/conversation";

describe('EditorComponent', () => {
  let conversationState = {
    provide: ConversationStateService,
    useClass: ConversationStateMock
  };
  let subject = new Subject();
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorComponent ],
      providers: [conversationState],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;

    // merging the mock conversation with our subject
    let obs = Observable.merge(subject.asObservable(), component.conversation.get());
    spyOn(component.conversation, 'get').and.returnValue(obs);

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 3 ConversationNodes', () => {
    expect(component.nodes.length).toBe(3);
    component.nodes.forEach(node => {
      expect(node instanceof ConversationNode).toBe(true);
    })
  });

  describe('When new readables arrives', () => {
    beforeEach(() => {
      let newConversation: Conversation = Object.create(ConversationStateMock.conversation);
      let newReadable = new Utterance("ID", "Ehy! I'm new");
      (<Utterance>newConversation.get('TRE')).setNext("ID");
      newConversation.add(newReadable);

      subject.next(newConversation)
    });

    it('should generate new ConversationNode', async(() => {
      expect(component.nodes.length).toBe(4);
    }))
  })

});
