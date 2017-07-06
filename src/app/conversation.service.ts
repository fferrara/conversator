import { Injectable } from '@angular/core';
import {Readable} from "../models/readable";
import {Utterance} from "../models/utterance";

@Injectable()
export class ConversationService {

  constructor() {
  }

  load(): Array<Readable> {
    let u3 = new Utterance('UNO', 'Che bisibi bodidi bu, asd pescila');
    let u2 = new Utterance('DUE', 'A be la bi a bi o usu', u3);
    let u1 = new Utterance('TRE', 'Ciao! A bi a be ubu', u2);

    return  [u1, u2, u3];
  }

}
