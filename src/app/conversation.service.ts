import {Injectable} from "@angular/core";
import {Utterance} from "../models/utterance";
import {Conversation} from "../models/conversation";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ConversationLoadService {

  constructor() {
  }

  load(): Observable<Conversation> {
    let elements = {
      'UNO':  new Utterance('UNO', 'Che bisibi bodidi bu, asd pescila'),
      'DUE': new Utterance('DUE', 'A be la bi a bi o usu', 'UNO'),
      'TRE': new  Utterance('TRE', 'Ciao! A bi a be ubu', 'DUE')
    };

    return Observable.of(new Conversation(elements));
  }



}
