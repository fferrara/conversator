import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Conversation} from "../models/conversation";
import {Readable} from "../models/readable";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {ConversationLoadService} from "./conversation-load.service";
import 'rxjs/add/operator/do'
import {Utterance} from "../models/utterance";

@Injectable()
export class ConversationStateMock {

  static conversation = new Conversation({
    'UNO':  new Utterance('UNO', 'Che bisibi bodidi bu, asd pescila', 'DUE'),
    'DUE': new Utterance('DUE', 'A be la bi a bi o usu', 'TRE'),
    'TRE': new  Utterance('TRE', 'Ciao! A bi a be ubu')
  });

  get(): Observable<Conversation> {
    return Observable.of(ConversationStateMock.conversation);
  }

  addReadableAfter(id:string, r: Readable){  }

  update(readable: Readable) { }
}
