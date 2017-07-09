import { TestBed, inject } from '@angular/core/testing';

import { ConversationStateService } from './conversation-state.service';

describe('ConversationStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversationStateService]
    });
  });

  it('should be created', inject([ConversationStateService], (service: ConversationStateService) => {
    expect(service).toBeTruthy();
  }));
});
