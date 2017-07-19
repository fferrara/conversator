import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonBarComponent } from './json-bar.component';
import {ConversationStateMock} from "../../services/conversation-state.service.mock";
import {ConversationStateService} from "../../services/conversation-state.service";
import {ExporterService} from "../../services/exporter.service";
import {ExporterMock} from "../../services/exporter.service.mock";

describe('JsonBarComponent', () => {
  let conversationState = {
    provide: ConversationStateService,
    useClass: ConversationStateMock
  };
  let exporter = {
    provide: ExporterService,
    useClass: ExporterMock
  };

  let component: JsonBarComponent;
  let fixture: ComponentFixture<JsonBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonBarComponent ],
      providers: [conversationState, exporter]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
