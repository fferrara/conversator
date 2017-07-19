import {Readable} from "./readable";
import {Connectable} from "./connectable";
/**
 * Created by Flavio Ferrara on 23/06/2017.
 */

export class Utterance implements Readable, Connectable {
  private _text: string;
  private _next: string;
  private _id: string;

  constructor(id: string, text: string, next?: string) {
    this._id = id;
    this._text = text;
    this._next = next || null;
  }

  getId(): string {
    return this._id;
  }

  next(): string {
    return this._next;
  }

  setNext(id: string) {
    this._next = id;
  }

  hasNext(): boolean {
    return this._next !== null;
  }

  getText(): string {
    return this._text;
  }

  updateText(text: string) {
    this._text = text;
  }

  isBlocking(): boolean {
    return false;
  }

  public static build(data): Utterance {
    return new Utterance(data.id, data.text, data.next);
  }
}
