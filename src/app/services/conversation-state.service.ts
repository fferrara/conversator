import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Conversation} from "../models/conversation";
import {Readable} from "../models/readable";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {ConversationLoadService} from "./conversation-load.service";
import 'rxjs/add/operator/do'
import {Utterance} from "../models/utterance";

@Injectable()
export class ConversationStateService {
  private subject: ReplaySubject<Conversation>;
  private conversation: Conversation;

  constructor(public loader: ConversationLoadService) {
    this.subject = new ReplaySubject<Conversation>(1);
  }

  get(): Observable<Conversation> {
    if (! this.conversation) this.loadConversation();

    return this.subject.asObservable();
  }

  addReadableAfter(id:string, r: Readable){
    this.conversation.add(<Utterance> r);
    let u = this.conversation.get(id) as Utterance;
    u.setNext(r.getId());

    this.subject.next(this.conversation);
  }

  private loadConversation() {
    this.loader.load()
      .do(conversation => this.conversation = conversation)
      .subscribe(conversation => this.subject.next(conversation))
  }

  update(readable: Readable) {
    this.conversation.update(readable);
    this.subject.next(this.conversation);
  }
}
