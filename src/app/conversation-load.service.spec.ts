import { TestBed, inject } from '@angular/core/testing';

import { ConversationLoadService } from './conversation-load.service';

describe('ConversationLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversationLoadService]
    });
  });

  it('should be created', inject([ConversationLoadService], (service: ConversationLoadService) => {
    expect(service).toBeTruthy();
  }));
});
