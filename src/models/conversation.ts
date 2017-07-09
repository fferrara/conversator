import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import {Readable} from "./readable";
import {Utterance} from "./utterance";
import {ClosedQuestion, OpenQuestion} from "./question";

/**
 * Created by Flavio on 06/07/2017.

 * Model of a Conversation
 */

interface Element {
  text: string,
  id: string,
  next: string,
  alt?: Array<any>,
  input?: string
}

export class Conversation {
  private elements;

  constructor(elements: Object){
    this.elements = elements;
  }

  first(): Readable {
    return this.elements['START'];
  }

  get(id: string): Readable {
    return this.elements[id];
  }

  getAll(): Readable[] {
    return Object.keys(this.elements).map(key => this.elements[key]);
  }

  static buildElement(element: Element  ) {
    if (element.alt) {
      return ClosedQuestion.build(element);
    }
    if (element.input) {
      return OpenQuestion.build(element);
    }

    return Utterance.build(element);
  }

  static fromJson(data){
    let elements = {};
    Object.keys(data).map(key => {
      let element: Element = data[key];
      elements[key] = Conversation.buildElement(element);
    });

    return new Conversation(elements);
  }

  add(u: Utterance) {
    this.elements[u.getId()] = u;
  }

  update(readable: Readable) {
    this.elements[readable.getId()] = readable;
  }
}
