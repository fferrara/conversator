import { TestBed, inject } from '@angular/core/testing';

import { ConversationStateService } from './conversation-state.service';
import {ConversationLoadService} from "./conversation-load.service";
import {ConversationLoadMock} from "./conversation-load.service.mock";

describe('ConversationStateService', () => {
  let conversationLoad = {
    provide: ConversationLoadService,
    useClass: ConversationLoadMock
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversationStateService, conversationLoad]
    });
  });

  it('should be created', inject([ConversationStateService], (service: ConversationStateService) => {
    expect(service).toBeTruthy();
  }));
});
